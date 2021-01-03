import { NextFunction, Request, Response } from "express";
import { JwtToken } from "./token";
export declare function offlineVerifyToken(accessToken: string): Promise<JwtToken>;
export declare function validAuthentication(request: Request, response: Response, next: NextFunction): void;
