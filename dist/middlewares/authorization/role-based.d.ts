import { NextFunction, Request, Response } from "express";
export declare const roleBasedAuthorization: (aceptRoles: string) => (request: Request, response: Response, next: NextFunction) => void;
