import React, {Component} from 'react'
import { connect } from 'react-redux'
import { fetchLangData, getLangData } from '../../redux/modules/lang-data'
import { listOptions as options } from './constants'

class WrappedContainer extends Component {
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

  handleSearchChange = ({ target: { value } }) => {
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

export const SearcherContainer = connect(
    getLangData,
    { fetchLangData }
)(WrappedContainer)
