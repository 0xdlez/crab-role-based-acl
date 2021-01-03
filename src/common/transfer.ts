import { Response } from "express";

import { isNullOrEmpty } from "./helper";

export function responseSuccess(res: Response, payload: object) {
  console.log(res.req.url + " 200 ");

  return res.status(200).send(payload);
}

export function responseError(res: Response, error: Error) {
  console.log(error.stack);
  console.log(res.req.url + " 500 ");

  return res.status(500).send(error.message);
}

export function responseAuthorizationError(res: Response, error: Error) {
  console.log(error.stack);
  console.log(res.req.url + " 401 ");

  return res.status(401).send(isNullOrEmpty(error.message) ? "Invalid token authorization." : error.message);
}

export function responseProgress(res: Response, percent: number) {
  console.log(res.req.url + " 200 PROGRESS " + percent + "% ");

  if (!res.hasHeader) {
    res.writeHead(200, { "content-type": "text/plain" });
  }

  return res.write(
    JSON.stringify({
      percent: Math.floor(percent),
    })
  );
}

export function responseProgressEnd(res: Response, percent: number, payload?: any) {
  console.log(res.req.url + " 200 PROGRESS Finish");

  return res.end(
    JSON.stringify({
      percent: Math.floor(percent),
      payload: payload,
    })
  );
}
