import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./Context";
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
<BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
