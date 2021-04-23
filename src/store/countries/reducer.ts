import { Country } from "../../models/country";
import { CountryStateActions } from "./actions";
import { StateAction } from "..";
import { MAX_COUNTRIES_TO_COMPARE } from "../../constants";

interface CountriesData {
  allCountries: Country[];
  filteredForComparison: Country[];
  regions: string[];
}

const initialState: CountriesData = {
  allCountries: [],
  filteredForComparison: [],
  regions: [],
};

const countriesReducer = (
  state: CountriesData = initialState,
  action: StateAction
) => {
  switch (action.type) {
    case CountryStateActions.SetCountriesData: {
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
        allCountries: action.payload,
        regions: Object.keys(regionsMap),
      };
    }

    case CountryStateActions.SetForComparison: {
      const filtered = action.payload?.slice(0, MAX_COUNTRIES_TO_COMPARE) || [];
      return {
        ...state,
        filteredForComparison: filtered,
      };
    }

    case CountryStateActions.AddForComparison: {
      if (state.filteredForComparison.length < MAX_COUNTRIES_TO_COMPARE) {
        return {
          ...state,
          filteredForComparison: [
            ...state.filteredForComparison,
            action.payload,
          ],
        };
      } else {
        return { ...state };
      }
    }

    case CountryStateActions.RemoveFromComparison: {
      const countryToRemove = action.payload;
      const countries = state.filteredForComparison.filter(
        (country) => country.name !== countryToRemove.name
      );
      return { ...state, filteredForComparison: countries };
    }
    default:
      return { ...state };
  }
};
export default countriesReducer;
