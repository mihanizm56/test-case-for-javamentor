import {LangCardType} from '../../components/molecules'

export interface OptionsType {
    [value: string]: string
}

export type handleSearchChangeParams = {
    target:{
        value:string
    }
}

export type SearcherViewProps = {
    handleSearchClick:()=>void, 
    handleSearchChange:(params:handleSearchChangeParams)=>void, 
    langData:Array<LangCardType>, 
    options: Array<OptionsType>, 
    selectedValue: string
}
