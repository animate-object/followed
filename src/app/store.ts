import { createStore, applyMiddleware, Store } from "redux";
import { reducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import * as Saga from "./saga";

export const configureStore = (): Store => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(Saga.root);

  return store;
};
