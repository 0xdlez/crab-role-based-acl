"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleBasedAuthorization = void 0;
var common_1 = require("../../common");
exports.roleBasedAuthorization = function (aceptRoles) { return function (request, response, next) {
    var roles = (request["_userInfo"] || "").roles;
    var userRoles = roles.split(",");
    if (aceptRoles.indexOf("*") >= 0) {
        return next();
    }
    var routerAceptRoles = aceptRoles.split(",");
    var hasRole = routerAceptRoles.some(function (ar) { return userRoles.indexOf(ar) >= 0; });
    if (hasRole) {
        return next();
    }
    common_1.responseAuthorizationError(response, new Error("Permissiion denied!"));
}; };
//# sourceMappingURL=role-based.js.map