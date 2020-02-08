import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app/views/App";
import { Provider } from "react-redux";
import { configureStore } from "./app/store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
