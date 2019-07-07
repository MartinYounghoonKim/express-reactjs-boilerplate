import { applyMiddleware, compose, createStore } from "redux";

import sagas from "./sagas";
import reducers from "./reducers";
import middlewares, { sagaMiddleware } from "./middlewares";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
function configureStore () {
  if (process.env.NODE_ENV === "development") {
    middlewares.push();
  }
  const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: "typescript-redux"
    });
  const composeEnhancers = devtools || compose;
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  const store = createStore(reducers, enhancer);
  sagaMiddleware.run(sagas);
  return store;

}

export default configureStore;
