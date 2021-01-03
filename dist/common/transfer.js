"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseProgressEnd = exports.responseProgress = exports.responseAuthorizationError = exports.responseError = exports.responseSuccess = void 0;
var helper_1 = require("./helper");
function responseSuccess(res, payload) {
    console.log(res.req.url + " 200 ");
    return res.status(200).send(payload);
}
exports.responseSuccess = responseSuccess;
function responseError(res, error) {
    console.log(error.stack);
    console.log(res.req.url + " 500 ");
    return res.status(500).send(error.message);
}
exports.responseError = responseError;
function responseAuthorizationError(res, error) {
    console.log(error.stack);
    console.log(res.req.url + " 401 ");
    return res.status(401).send(helper_1.isNullOrEmpty(error.message) ? "Invalid token authorization." : error.message);
}
exports.responseAuthorizationError = responseAuthorizationError;
function responseProgress(res, percent) {
    console.log(res.req.url + " 200 PROGRESS " + percent + "% ");
    if (!res.hasHeader) {
        res.writeHead(200, { "content-type": "text/plain" });
    }
    return res.write(JSON.stringify({
        percent: Math.floor(percent),
    }));
}
exports.responseProgress = responseProgress;
function responseProgressEnd(res, percent, payload) {
    console.log(res.req.url + " 200 PROGRESS Finish");
    return res.end(JSON.stringify({
        percent: Math.floor(percent),
        payload: payload,
    }));
}
exports.responseProgressEnd = responseProgressEnd;
//# sourceMappingURL=transfer.js.map