import { Country } from "../../models/country";

export const setCountriesData = (data: Country[]) => ({
  type: CountryStateActions.SET_COUNTRIES_DATA,
  payload: [...data],
});
export const setCountriesForComparison = (data: Country[]) => ({
  type: CountryStateActions.SET_FOR_COMPARISON,
  payload: [...data],
});

export enum CountryStateActions {
  SET_COUNTRIES_DATA = "SET-COUNTRIES-DATA",
  SET_FOR_COMPARISON = "SET-FOR-COMPARISON",
}
