"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validSupportOrigin = exports.validAuthentication = exports.roleBasedAuthorization = void 0;
var authorization_1 = require("./middlewares/authorization");
Object.defineProperty(exports, "roleBasedAuthorization", { enumerable: true, get: function () { return authorization_1.roleBasedAuthorization; } });
var jwt_authentication_1 = require("./middlewares/jwt-authentication");
Object.defineProperty(exports, "validAuthentication", { enumerable: true, get: function () { return jwt_authentication_1.validAuthentication; } });
Object.defineProperty(exports, "validSupportOrigin", { enumerable: true, get: function () { return jwt_authentication_1.validSupportOrigin; } });
__exportStar(require("./middlewares/jwt-authentication/types"), exports);
//# sourceMappingURL=index.js.map