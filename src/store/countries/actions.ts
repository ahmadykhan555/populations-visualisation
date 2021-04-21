import { Country } from "../../models/country";

export const setCountriesData = (data: Country[]) => ({
  type: CountryStateActions.SET_COUNTRIES_DATA,
  payload: [...data],
});

export enum CountryStateActions {
  SET_COUNTRIES_DATA = "SET-COUNTRIES-DATA",
}
