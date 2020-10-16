import { createStore, applyMiddleware, compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import createRootReducer from "./reducers/rootReducer";

export const history = createBrowserHistory();

export const store = createStore(
  createRootReducer(history),
  undefined,
  compose(
    applyMiddleware(thunk, routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
