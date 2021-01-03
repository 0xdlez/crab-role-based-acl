export declare class JwtToken {
    exp: number;
    iat: number;
    allowedOrigins: string[];
    roles: string;
    name: string;
    fullName: string;
    _resourceAccess: any;
    _realmAccess: any;
    constructor(payload: any);
    private _loadAllRoles;
    isAllowOrigin(origin: string): boolean;
    isExpired(): boolean;
    hasApplicationRole(appName: string, roleName: string): boolean;
    hasRealmRole(roleName: string): boolean;
}
