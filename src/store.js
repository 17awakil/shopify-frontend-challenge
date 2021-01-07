import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creates Redux Store that saves application state
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
