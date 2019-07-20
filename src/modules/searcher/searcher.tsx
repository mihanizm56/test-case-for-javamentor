import React, { memo } from 'react'
import { SearcherContainer } from './searcher-container'
import { SearcherView } from './searcher-view'
import {LangCardType} from '../../components/molecules'
import {OptionsType, handleSearchChangeParams} from './types'
import './searcher.css'



interface SearcherContainerRenderProps {
    handleSearchClick:()=>void, 
    handleSearchChange:(params:handleSearchChangeParams)=>void, 
    langData:Array<LangCardType>, 
    options:Array<OptionsType>, 
    selectedValue:string
}

export const Searcher = memo(() => (
    <SearcherContainer>
        {({ handleSearchClick, handleSearchChange, langData, options, selectedValue }: SearcherContainerRenderProps) => (
            <SearcherView
                handleSearchClick={handleSearchClick}
                handleSearchChange={handleSearchChange}
                langData={langData}
                options={options}
                selectedValue={selectedValue}
            />
        )}
    </SearcherContainer>
))
