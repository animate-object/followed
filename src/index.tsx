import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";
import App from "./app/views/App";
import { Provider } from "react-redux";
import { configureStore } from "./app/store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <div className={styles.app}>
      <App />
    </div>
  </Provider>,
  document.getElementById("root")
);
