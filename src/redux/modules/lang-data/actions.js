import { FETCH_LANG_DATA, PUT_LANG_DATA } from "./constants";

export const fetchLangData = type => ({ type: FETCH_LANG_DATA, payload: type });
export const putLangData = data => ({ type: PUT_LANG_DATA, payload: data });
