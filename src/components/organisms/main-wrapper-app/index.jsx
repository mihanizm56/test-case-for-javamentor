import React, { memo } from "react";
import { Searcher } from "../../../modules/searcher";
import "./App.css";

export const MainWrapper = memo(() => {
  return (
    <div className="global-wrapper">
      <div className="main-wrapper">
        <Searcher />
      </div>
    </div>
  );
});
