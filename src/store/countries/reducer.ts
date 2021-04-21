import { CountryStateActions } from "./actions";
import { StateAction } from "..";

const initialState = {
  data: [],
};

const countriesReducer = (state = initialState, action: StateAction) => {
  switch (action.type) {
    case CountryStateActions.SET_COUNTRIES_DATA:
      return { ...state, data: action.payload };
    default:
      return { ...state };
  }
};
export default countriesReducer;
