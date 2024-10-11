import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { thunk } from "redux-thunk";
import App from "./App";
import contactDetailsReducer from "./contactDetailsReducer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const reducerGroup = combineReducers({
  contact: contactDetailsReducer,
});
const store = createStore(reducerGroup, applyMiddleware(thunk));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
