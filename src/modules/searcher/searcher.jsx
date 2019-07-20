import React, { memo } from "react";
import { Button, Select, LangList } from "../../components";

export const Searcher = () => (
  <SearcherContainer>
    {({ handleSearchClick, handleSearchChange, listData }) => (
      <SearcherView
        handleSearchClick={handleSearchClick}
        handleSearchChange={handleSearchChange}
        listData={listData}
      />
    )}
  </SearcherContainer>
);
