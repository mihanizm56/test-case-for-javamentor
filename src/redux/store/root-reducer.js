import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import langDataStorage from "../modules/lang-data";

export const rootReducer = combineReducers({
  langData: langDataStorage
});
