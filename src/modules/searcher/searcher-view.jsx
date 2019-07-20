import React, { memo } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { Button, Select, LangList } from '../../components'

export const SearcherView = memo(
    ({ handleSearchClick, handleSearchChange, listData, options, selectedValue }) => (
        <div className='searcher-wrapper'>
            <div className='searcher-container'>
                <div className='searcher__select'>
                    <Select handleChange={handleSearchChange} selectedValue={selectedValue}>
                        {options.map((option, index) => (
                            <MenuItem className='searcher_option' value={option.value} key={index}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                <Button handleClick={handleSearchClick} />
            </div>
            <div className='searcher-list'>
                <LangList listData={listData} />
            </div>
        </div>
    )
)
