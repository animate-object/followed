import { Maybe } from "../types";

const PREFIX = "followed.settings";

export const getSiteSetting = (
  key: string,
  supplier: () => Maybe.Maybe<string>
): Maybe.Maybe<string> => {
  return Maybe.withDefault(
    window.localStorage.getItem(`${PREFIX}.${key}`),
    () => {
      const supplied = supplier();

      if (supplied) {
        window.localStorage.setItem(`${PREFIX}.${key}`, supplied);
        return supplied;
      }
    }
  );
};
