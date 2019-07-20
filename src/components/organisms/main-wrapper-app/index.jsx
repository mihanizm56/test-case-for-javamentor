import React, { memo } from "react";
import { MainWrapper } from "../..";
import "./App.css";

export const MainWrapper = memo(() => {
  return (
    <div className="global-wrapper">
      <div className="main-wrapper">{/*Здесь модуль*/}</div>
    </div>
  );
});
