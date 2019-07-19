import React, { memo } from "react";
import { SearcherContainer } from "./searcher-container";
import { SearcherView } from "./searcher-view";

export const Searcher = () => (
  <SearcherContainer>
    {({ handleSearchClick, handleSearchChange, listData, options }) => (
      <SearcherView
        handleSearchClick={handleSearchClick}
        handleSearchChange={handleSearchChange}
        listData={listData}
        options={options}
      />
    )}
  </SearcherContainer>
);
