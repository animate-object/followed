interface Loaded<T> {
  state: "Loaded";
  data: T;
}

interface Loading {
  state: "Loading";
}

interface Errored {
  state: "Errored";
  e: any;
}

export type Loadable<T> = Loaded<T> | Loading | Errored;

export const isLoading = <T>(l: Loadable<T>): l is Loading =>
  l.state === "Loading";

export const isLoaded = <T>(l: Loadable<T>): l is Loaded<T> =>
  l.state === "Loaded";

export const isErrored = <T>(l: Loadable<T>): l is Errored =>
  l.state === "Errored";

export const loading = <T>(): Loading => ({ state: "Loading" });

export const loaded = <T>(data: T): Loaded<T> => ({
  state: "Loaded",
  data
});

export const errored = <T>(e: any): Errored => ({ state: "Errored", e });

export const map = <T, R>(f: (t: T) => R, l: Loadable<T>): Loadable<R> =>
  isLoaded(l) ? loaded(f(l.data)) : l;
