import React, { memo,FunctionComponent } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { Button, Select, LangList } from '../../components'
import {LangCardType} from '../../components/molecules'
import {OptionsType, SearcherViewProps} from './types'

export const SearcherView = memo(
    ({ handleSearchClick, handleSearchChange, langData, options, selectedValue } :SearcherViewProps) => (
        <div className='searcher-wrapper'>
            <div className='searcher-container'>
                <div className='searcher__select'>
                    <Select handleChange={handleSearchChange} selectedValue={selectedValue}>
                         {options.map((option:OptionsType, index:number):React.ReactNode => ( 
                            <MenuItem className='searcher_option' value={option.value} key={index}>
                                 {option.value}
                            </MenuItem>
                       ))}
                    </Select>
                </div>
                <Button handleClick={handleSearchClick} />
            </div>
            <LangList langData={langData} />
        </div>
    )
)
