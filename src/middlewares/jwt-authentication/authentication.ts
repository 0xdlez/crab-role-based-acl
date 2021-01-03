import { NextFunction, Request, Response } from "express";
import jwt, { TokenExpiredError } from "jsonwebtoken";

import { JWT_ALGORITHMS, JWT_PRIVATE_CERT, responseAuthorizationError } from "../../common";
import { JwtToken } from "./token";

export function offlineVerifyToken(accessToken: string): Promise<JwtToken> {
  return new Promise((resolve, reject) => {
    const now = Date.now() / 1000;
    // set current time to now
    // to check time expried
    const params = {
      clockTimestamp: now,
      algorithms: JWT_ALGORITHMS,
    };

    const cert = JWT_PRIVATE_CERT.replace(/\\n/gm, '\n');
    jwt.verify(accessToken, Buffer.from(cert, "binary"), params, (err, payload) => {
      if (err) {
        console.log("Token error, " + err);

        if (err instanceof TokenExpiredError) {
          return reject(new Error("Token is expired!"));
        }

        return reject(new Error("Token is invalid!"));
      }

      resolve(new JwtToken(payload));
    });
  });
}

export function validAuthentication(request: Request, response: Response, next: NextFunction) {
  const header = request.headers;
  const token = (header.Authorization || header.authorization) as string;

  offlineVerifyToken(token)
    .then((token) => {
      request["_userInfo"] = token;
      next();
    })
    .catch((err) => {
      responseAuthorizationError(response, err);
    });
}
