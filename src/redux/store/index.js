import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga.js";
import { enableBatching } from "redux-batched-actions";
import { rootReducer } from "./root-reducer";

export const createAppStore = savedState => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    enableBatching(rootReducer),
    savedState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

  sagaMiddleware.run(rootSaga);
  return store;
};
