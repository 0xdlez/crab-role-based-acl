import { NextFunction, Request, Response } from "express";
import { JwtToken } from "./token";
import { responseAuthorizationError } from "../../common";

/**
 * Validate token is allow this request's origin
 * @param request
 * @param response
 * @param next
 */
export function validSupportOrigin(request: Request, response: Response, next: NextFunction) {
  const origin = request.get("origin");
  const token: JwtToken = request["_userInfo"] as JwtToken;

  if (origin != null && token != null) {
    if (token.isAllowOrigin(origin)) {
      return next();
    }
  }

  responseAuthorizationError(response, new Error("Token not allow origin!"));
}
