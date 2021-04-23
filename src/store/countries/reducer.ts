import { Country } from "../../models/country";
import { CountryStateActions } from "./actions";
import { StateAction } from "..";
import { MAX_COUNTRIES_TO_COMPARE } from "../../constants";

interface CountriesData {
  allCountries: Country[];
  filteredCountries: Country[];
  regions: string[];
}

const initialState: CountriesData = {
  allCountries: [],
  filteredCountries: [],
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
        filteredCountries: filtered,
      };
    }

    case CountryStateActions.AddForComparison: {
      if (state.filteredCountries.length < MAX_COUNTRIES_TO_COMPARE) {
        return {
          ...state,
          filteredCountries: [...state.filteredCountries, action.payload],
        };
      } else {
        return { ...state };
      }
    }

    case CountryStateActions.RemoveFromComparison: {
      const countryToRemove = action.payload;
      const countries = state.filteredCountries.filter(
        (country) => country.name !== countryToRemove.name
      );
      return { ...state, filteredCountries: countries };
    }
    default:
      return { ...state };
  }
};
export default countriesReducer;
