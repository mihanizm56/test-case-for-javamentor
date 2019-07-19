import React from "react";
import { connect } from "react-redux";
import { fetchLangData, getLangData } from "../../redux/modules/lang-data";
import { listOptions as options } from "./constants";

class WrappedContainer {
  handleSearchClick = () => {
    console.log("check handleSearchClick, should start ");
  };

  handleSearchChange = () => {
    console.log("check handleSearchChange");
  };

  render = () => {
    const { listData, children } = this.props;

    return children({
      handleSearchClick: this.handleSearchClick,
      handleSearchChange: this.handleSearchChange,
      listData,
      options
    });
  };
}

// const mapStateToProps = {

// }

// const mapDispatchToProps = {
//   fetchLangDataAction:
// }

export const SearcherContainer = connect(
  { getLangData },
  { fetchLangData }
)(WrappedContainer);
