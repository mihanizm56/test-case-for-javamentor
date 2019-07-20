import React, { memo } from 'react'
import { SearcherContainer } from './searcher-container'
import { SearcherView } from './searcher-view'
import './searcher.css'

export const Searcher = memo(() => (
    <SearcherContainer>
        {({ handleSearchClick, handleSearchChange, listData, options, selectedValue }) => (
            <SearcherView
                handleSearchClick={handleSearchClick}
                handleSearchChange={handleSearchChange}
                listData={listData}
                options={options}
                selectedValue={selectedValue}
            />
        )}
    </SearcherContainer>
))