import { NextFunction, Request, Response } from "express";
/**
 * Validate token is allow this request's origin
 * @param request
 * @param response
 * @param next
 */
export declare function validSupportOrigin(request: Request, response: Response, next: NextFunction): void;
