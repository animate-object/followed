import { Maybe } from "../types";

export const parseQuery = (): Record<string, Maybe.Maybe<string>> =>
  window.location.search
    .substring(1)
    .split("&")
    .reduce((queryMap: Record<string, string>, pair: string) => {
      const parts = pair.split("=");
      return { ...queryMap, [parts[0]]: parts[1] };
    }, {});
