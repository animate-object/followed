export interface Err {
  type: "Error";
  msg: string;
}

export interface Ok<T> {
  type: "Ok";
  data: T;
}

export type Result<T> = Ok<T> | Err;

export const ok = <T>(data: T): Ok<T> => ({ type: "Ok", data });

export const err = (msg: string): Err => ({ type: "Error", msg });

export const isErr = <T>(r: Result<T>): r is Err => r.type === "Error";

export const isOk = <T>(r: Result<T>): r is Ok<T> => r.type === "Ok";

export const map = <T, R>(f: (t: T) => R, r: Result<T>): Result<R> =>
  isOk(r) ? ok(f(r.data)) : r;
