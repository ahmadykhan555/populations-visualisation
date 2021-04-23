import { Country } from "../../models/country";

export const setCountriesData = (data: Country[]) => ({
  type: CountryStateActions.SetCountriesData,
  payload: [...data],
});
export const setCountriesForComparison = (data: Country[]) => ({
  type: CountryStateActions.SetForComparison,
  payload: [...data],
});

export const addCountryForComparison = (country: Country) => ({
  type: CountryStateActions.AddForComparison,
  payload: country,
});

export const removeCountryFromComparison = (country: Country) => ({
  type: CountryStateActions.RemoveFromComparison,
  payload: country,
});

export enum CountryStateActions {
  SetCountriesData = "SET-COUNTRIES-DATA",
  SetForComparison = "SET-FOR-COMPARISON",
  AddForComparison = "ADD-FOR-COMPARISON",
  RemoveFromComparison = "REMOVE-FROM-COMPARISON",
}
