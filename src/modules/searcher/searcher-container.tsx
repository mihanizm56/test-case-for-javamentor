import React from "react";
import { connect } from "react-redux";
import { fetchLangData, getLangData } from "../../redux/modules/lang-data";
import { listOptions as options } from "./constants";
import { SearcherViewProps, handleSearchChangeParams } from "./types";
import { LangCardType } from "../../components/molecules";

type SearcherContainerPropsType = {
  fetchLangData: (value: string) => void;
  langData: Array<LangCardType>;
  children: (object: SearcherViewProps) => Array<React.ReactNode>;
};

type SearcherContainerStateType = {
  selectedValue: string;
};
class WrappedContainer extends React.Component<
  SearcherContainerPropsType,
  SearcherContainerStateType
> {
  state = {
    selectedValue: ""
  };

  handleSearchClick = () => this.props.fetchLangData(this.state.selectedValue);

  handleSearchChange = ({ target: { value } }: handleSearchChangeParams) =>
    this.setState({ selectedValue: value });

  render = () => {
    const { selectedValue } = this.state;
    const { langData, children } = this.props;
    const { handleSearchClick, handleSearchChange } = this;

    return children({
      handleSearchClick,
      handleSearchChange,
      selectedValue,
      langData,
      options
    });
  };
}

export const SearcherContainer: any = connect(
  getLangData,
  { fetchLangData }
)(WrappedContainer);
