import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchLangData, getLangData } from "../../redux/modules/lang-data";
import { listOptions as options } from "./constants";

class WrappedContainer extends Component {
  state = {
    selectedField: null
  };

  handleSearchClick = () => {
    console.log("check handleSearchClick, should start ");
  };

  handleSearchChange = ({ target: { value } }) => {
    console.log("check handleSearchChange", value);
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

export const SearcherContainer = connect(
  state => ({ getLangData: getLangData(state) }),
  { fetchLangData }
)(WrappedContainer);
