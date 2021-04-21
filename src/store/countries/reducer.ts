import { Country } from "../../models/country";
import { CountryStateActions } from "./actions";
import { StateAction } from "..";

interface CountriesData {
  allCountriesData: Country[];
  filteredForComparison: Country[];
}

const initialState: CountriesData = {
  allCountriesData: [],
  filteredForComparison: [],
};

const countriesReducer = (
  state: CountriesData = initialState,
  action: StateAction
) => {
  switch (action.type) {
    case CountryStateActions.SET_COUNTRIES_DATA:
      return { ...state, allCountriesData: action.payload };

    case CountryStateActions.SET_FOR_COMPARISON:
      return { ...state, filteredForComparison: action.payload };
    default:
      return { ...state };
  }
};
export default countriesReducer;
