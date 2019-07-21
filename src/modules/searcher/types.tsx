import { LangCardType } from "../../components/molecules";

export interface OptionsType {
  [value: string]: string;
}

export interface HandleSearchChangeParams {
  target: {
    value: string;
  };
}

export interface SearcherViewProps {
  handleSearchClick: () => void;
  handleSearchChange: (params: HandleSearchChangeParams) => void;
  langData: Array<LangCardType>;
  options: Array<OptionsType>;
  selectedValue: string;
}
