import { combineReducers } from 'redux';
import langDataStorage from '../modules/lang-data';

export const rootReducer = combineReducers({
    langData: langDataStorage
});
