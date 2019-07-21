import React, { memo } from "react";
import { LangCardType } from "../../components/molecules";
import { SearcherContainer } from "./searcher-container";
import { SearcherView } from "./searcher-view";
import "./searcher.css";
import { HandleSearchChangeParams, OptionsType } from "./types";

interface SearcherContainerRenderProps {
  handleSearchClick: () => void;
  handleSearchChange: (params: HandleSearchChangeParams) => void;
  langData: Array<LangCardType>;
  options: Array<OptionsType>;
  selectedValue: string;
}

export const Searcher = memo(() => (
  <SearcherContainer>
    {({
      handleSearchClick,
      handleSearchChange,
      langData,
      options,
      selectedValue
    }: SearcherContainerRenderProps) => (
      <SearcherView
        handleSearchClick={handleSearchClick}
        handleSearchChange={handleSearchChange}
        langData={langData}
        options={options}
        selectedValue={selectedValue}
      />
    )}
  </SearcherContainer>
));
