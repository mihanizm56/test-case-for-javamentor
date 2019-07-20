import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, history } from "./redux/store";
import { MainWrapper } from "./components/organisms";
import "./styles/main.css";
import "./fonts/index.css";

const ROOT_ELEMENT = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <MainWrapper />
  </Provider>,
  ROOT_ELEMENT
);
