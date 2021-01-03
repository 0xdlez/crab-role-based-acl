"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validSupportOrigin = void 0;
var common_1 = require("../../common");
/**
 * Validate token is allow this request's origin
 * @param request
 * @param response
 * @param next
 */
function validSupportOrigin(request, response, next) {
    var origin = request.get("origin");
    var token = request["_userInfo"];
    if (origin != null && token != null) {
        if (token.isAllowOrigin(origin)) {
            return next();
        }
    }
    common_1.responseAuthorizationError(response, new Error("Token not allow origin!"));
}
exports.validSupportOrigin = validSupportOrigin;
//# sourceMappingURL=cors-domain.js.map