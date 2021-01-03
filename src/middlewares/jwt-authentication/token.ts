export class JwtToken {
  exp: number;
  iat: number;
  allowedOrigins: string[];
  roles: string;
  name: string;
  fullName: string;

  _resourceAccess: any;
  _realmAccess: any;

  constructor(payload) {
    const {
      exp,
      iat,
      "allowed-origins": allowedOrigins,
      realm_access,
      resource_access,
      preferred_username,
      name,
    } = payload;

    this.exp = exp;
    this.iat = iat;
    this.allowedOrigins = allowedOrigins;
    this._realmAccess = realm_access;
    this._resourceAccess = resource_access;
    this.name = preferred_username;
    this.fullName = name;

    this._loadAllRoles(resource_access, realm_access);
  }

  private _loadAllRoles(resourceAccess, realmAccess) {
    const realmRoles = realmAccess["roles"];
    const resourceRoles = [];

    for (let appName in resourceAccess) {
      const appRoles = resourceAccess[appName].roles;

      resourceRoles.push(...appRoles);
    }

    this.roles = [...realmRoles, ...resourceRoles].join(",");
  }

  public isAllowOrigin(origin: string): boolean {
    return this.allowedOrigins && this.allowedOrigins.some((o) => o && o.trim() === origin.trim());
  }

  public isExpired(): boolean {
    return this.exp * 1000 <= Date.now();
  }

  public hasApplicationRole(appName: string, roleName: string): boolean {
    const appRoles = this._resourceAccess[appName];

    return appRoles && appRoles.roles.indexOf(roleName) >= 0;
  }

  public hasRealmRole(roleName: string): boolean {
    const realmRoles = this._realmAccess["roles"];

    return realmRoles && realmRoles.indexOf(roleName) >= 0;
  }
}
