import { Country } from "../../models/country";
import { CountryStateActions } from "./actions";
import { StateAction } from "..";

interface CountriesData {
  allCountriesData: Country[];
  filteredForComparison: Country[];
  regions: string[];
}

const initialState: CountriesData = {
  allCountriesData: [],
  filteredForComparison: [],
  regions: [],
};

const countriesReducer = (
  state: CountriesData = initialState,
  action: StateAction
) => {
  switch (action.type) {
    case CountryStateActions.SET_COUNTRIES_DATA: {
      const regionsMap: any = {};
      if (action.payload) {
        (action.payload as Country[]).forEach((country) => {
          if (!regionsMap[country.region] && country.region) {
            regionsMap[country.region] = true;
          }
        });
      }
      return {
        ...state,
        allCountriesData: action.payload,
        regions: Object.keys(regionsMap),
      };
    }

    case CountryStateActions.SET_FOR_COMPARISON: {
      return {
        ...state,
        filteredForComparison: action.payload,
      };
    }
    default:
      return { ...state };
  }
};
export default countriesReducer;
