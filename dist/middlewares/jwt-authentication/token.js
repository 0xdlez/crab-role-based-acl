"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtToken = void 0;
var JwtToken = /** @class */ (function () {
    function JwtToken(payload) {
        var exp = payload.exp, iat = payload.iat, allowedOrigins = payload["allowed-origins"], realm_access = payload.realm_access, resource_access = payload.resource_access, preferred_username = payload.preferred_username, name = payload.name;
        this.exp = exp;
        this.iat = iat;
        this.allowedOrigins = allowedOrigins;
        this._realmAccess = realm_access;
        this._resourceAccess = resource_access;
        this.name = preferred_username;
        this.fullName = name;
        this._loadAllRoles(resource_access, realm_access);
    }
    JwtToken.prototype._loadAllRoles = function (resourceAccess, realmAccess) {
        var realmRoles = realmAccess["roles"];
        var resourceRoles = [];
        for (var appName in resourceAccess) {
            var appRoles = resourceAccess[appName].roles;
            resourceRoles.push.apply(resourceRoles, appRoles);
        }
        this.roles = __spreadArrays(realmRoles, resourceRoles).join(",");
    };
    JwtToken.prototype.isAllowOrigin = function (origin) {
        return this.allowedOrigins && this.allowedOrigins.some(function (o) { return o && o.trim() === origin.trim(); });
    };
    JwtToken.prototype.isExpired = function () {
        return this.exp * 1000 <= Date.now();
    };
    JwtToken.prototype.hasApplicationRole = function (appName, roleName) {
        var appRoles = this._resourceAccess[appName];
        return appRoles && appRoles.roles.indexOf(roleName) >= 0;
    };
    JwtToken.prototype.hasRealmRole = function (roleName) {
        var realmRoles = this._realmAccess["roles"];
        return realmRoles && realmRoles.indexOf(roleName) >= 0;
    };
    return JwtToken;
}());
exports.JwtToken = JwtToken;
//# sourceMappingURL=token.js.map