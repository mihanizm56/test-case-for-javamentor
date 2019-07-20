import React from 'react'
import { connect } from 'react-redux'
import { fetchLangData, getLangData } from '../../redux/modules/lang-data'
import { listOptions as options } from './constants'
import {SearcherViewProps, handleSearchChangeParams} from './types'
import {LangCardType} from '../../components/molecules'



type SearcherContainerPropsType = {
    fetchLangData:(value:string)=>void,
    langData:Array<LangCardType>,
    children:(object: SearcherViewProps)=>Array<React.ReactNode>
}

type SearcherContainerStateType = {
    selectedValue:string
}
class WrappedContainer extends React.Component<SearcherContainerPropsType,SearcherContainerStateType> {
  state = {
      selectedValue: ''
  };

  componentDidUpdate () {
      console.log('SearcherContainer props', this.props)
  }

  handleSearchClick = () => {
      const {selectedValue} = this.state
      console.log('check handleSearchClick, should start ')
      this.props.fetchLangData(selectedValue)
  };

  handleSearchChange = ({ target: { value } }:handleSearchChangeParams) => {
      this.setState({selectedValue: value})
      console.log('check handleSearchChange', value)
  };

  render = () => {
      const {selectedValue} = this.state
      const { langData, children } = this.props

      return children({
          handleSearchClick: this.handleSearchClick,
          handleSearchChange: this.handleSearchChange,
          selectedValue,
          langData,
          options
      })
  };
}

export const SearcherContainer:any = connect(
    getLangData,
    { fetchLangData }
)(WrappedContainer)
