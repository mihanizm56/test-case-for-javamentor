import React, { memo } from "react";
import { Button, Select, LangList } from "../../components";

export const SearcherView = memo(
  ({ handleSearchClick, handleSearchChange, listData, options }) => (
    <div className="searcher-wrapper">
      <div className="searcher-container">
        <Select handleChange={handleSearchChange}>
          {options.map((option, index) => (
            <option value={option.value} key={index}>
              {option.value}
            </option>
          ))}
        </Select>
        <Button handleClick={handleSearchClick} />
      </div>
      <div className="searcher-list">
        <LangList listData={listData} />
      </div>
    </div>
  )
);
