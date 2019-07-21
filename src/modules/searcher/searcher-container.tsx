import React from "react";
import { connect } from "react-redux";
import { LangCardType } from "../../components/molecules";
import { fetchLangData, getLangData } from "../../redux/modules/lang-data";
import { listOptions as options } from "./constants";
import { HandleSearchChangeParams, SearcherViewProps } from "./types";

interface SearcherContainerPropsType {
  fetchLangData: (value: string) => void;
  langData: Array<LangCardType>;
  children: (object: SearcherViewProps) => Array<React.ReactNode>;
}

interface SearcherContainerStateType {
  selectedValue: string;
}
class WrappedContainer extends React.Component<
  SearcherContainerPropsType,
  SearcherContainerStateType
> {
  public state = {
    selectedValue: ""
  };

  public handleSearchClick = () =>
    this.props.fetchLangData(this.state.selectedValue);

  public handleSearchChange = ({
    target: { value }
  }: HandleSearchChangeParams) => this.setState({ selectedValue: value });

  public render = () => {
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
