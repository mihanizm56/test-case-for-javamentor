import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createAppStore } from "./redux/store";
import { MainWrapper } from "./components/organisms";
import "./styles/main.css";
import "./assets/fonts/index.css";

const ROOT_ELEMENT = document.getElementById("root");

const store = createAppStore();

ReactDOM.render(
  <Provider store={store}>
    <MainWrapper />
  </Provider>,
  ROOT_ELEMENT
);
