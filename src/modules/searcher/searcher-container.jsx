import React from "react";
import { connect } from "react-redux";
import { fetchLangData, getLangData } from "../../redux/modules/lang-data";

class Container {
  handleSearchClick = () => {
    console.log("check handleSearchClick");
  };

  handleSearchChange = () => {
    console.log("check handleSearchChange");
  };

  render = () => {
    const { listData, children } = this.props;

    return children({
      handleSearchClick: this.handleSearchClick,
      handleSearchChange: this.handleSearchChange,
      listDatalistData
    });
  };
}

export const SearcherContainer = connect(
  { getLangData },
  { fetchLangData }
)(WrappedContainer);
