import React from 'react'
import { connect } from 'react-redux'
import { fetchLangData, getLangData } from '../../redux/modules/lang-data'
import { listOptions as options } from './constants'

class WrappedContainer extends React.Component {
  state = {
      selectedValue: null
  };

  handleSearchClick = () => {
      console.log('check handleSearchClick, should start ')
  };

  handleSearchChange = ({ target: { value } }) => {
      this.setState({selectedValue: value})
      console.log('check handleSearchChange', value)
  };

  render = () => {
      const {selectedValue} = this.state
      const { listData, children } = this.props

      return children({
          handleSearchClick: this.handleSearchClick,
          handleSearchChange: this.handleSearchChange,
          selectedValue,
          listData,
          options
      })
  };
}

export const SearcherContainer = connect(
    state => ({ getLangData: getLangData(state) }),
    { fetchLangData }
)(WrappedContainer)
