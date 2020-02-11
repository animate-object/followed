export type Maybe<T> = T | undefined | null;

export const of = <T>(value: T | undefined | null): Maybe<T> => value;
export const none = <T>(): Maybe<T> => undefined;

type Supplier<T> = () => T;

export const withDefault = <T>(maybe: Maybe<T>, default_: T | Supplier<T>): T =>
  maybe != null
    ? maybe
    : typeof default_ === "function"
    ? (default_ as Supplier<T>)()
    : default_;

export const map = <T, R>(f: (t: T) => R, maybe: Maybe<T>): Maybe<R> =>
  maybe != null ? f(maybe) : undefined;

export const ifPresent = <T>(f: (t: T) => void, maybe: Maybe<T>): void => {
  if (maybe) {
    f(maybe);
  }
};
