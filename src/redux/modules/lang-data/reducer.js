import { PUT_LANG_DATA } from "./constants";
import lensPath from "ramda/src/lensPath";
import set from "ramda/src/set";

const initialState = {
  langData: []
};

const allRoutesLens = lensPath(["langData"]);
const stateLens = lensPath("");

const langDataStorage = (state = initialState, action) => {
  switch (action.type) {
    case PUT_LANG_DATA:
      return set(allRoutesLens, action.payload.data, state);

    default:
      return state;
  }
};

export default langDataStorage;
