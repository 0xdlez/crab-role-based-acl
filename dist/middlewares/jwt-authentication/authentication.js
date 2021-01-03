"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validAuthentication = exports.offlineVerifyToken = void 0;
var jsonwebtoken_1 = __importStar(require("jsonwebtoken"));
var common_1 = require("../../common");
var token_1 = require("./token");
function offlineVerifyToken(accessToken) {
    return new Promise(function (resolve, reject) {
        var now = Date.now() / 1000;
        // set current time to now
        // to check time expried
        var params = {
            clockTimestamp: now,
            algorithms: common_1.JWT_ALGORITHMS,
        };
        var cert = common_1.JWT_PRIVATE_CERT.replace(/\\n/gm, '\n');
        jsonwebtoken_1.default.verify(accessToken, Buffer.from(cert, "binary"), params, function (err, payload) {
            if (err) {
                console.log("Token error, " + err);
                if (err instanceof jsonwebtoken_1.TokenExpiredError) {
                    return reject(new Error("Token is expired!"));
                }
                return reject(new Error("Token is invalid!"));
            }
            resolve(new token_1.JwtToken(payload));
        });
    });
}
exports.offlineVerifyToken = offlineVerifyToken;
function validAuthentication(request, response, next) {
    var header = request.headers;
    var token = (header.Authorization || header.authorization);
    offlineVerifyToken(token)
        .then(function (token) {
        request["_userInfo"] = token;
        next();
    })
        .catch(function (err) {
        common_1.responseAuthorizationError(response, err);
    });
}
exports.validAuthentication = validAuthentication;
//# sourceMappingURL=authentication.js.map