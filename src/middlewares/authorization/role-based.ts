import { NextFunction, Request, Response } from "express";

import { responseAuthorizationError } from "../../common";

export const roleBasedAuthorization = (aceptRoles: string) => (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { roles } = request["_userInfo"] || "";
  const userRoles = roles.split(",");

  if (aceptRoles.indexOf("*") >= 0) {
    return next();
  }

  const routerAceptRoles = aceptRoles.split(",");
  const hasRole = routerAceptRoles.some((ar) => userRoles.indexOf(ar) >= 0);

  if (hasRole) {
    return next();
  }

  responseAuthorizationError(response, new Error("Permissiion denied!"));
};
