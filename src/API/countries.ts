import { Country } from "../models/country";
import { httpGET } from "../utility/http";

enum CountriesEndpoints {
  AllCountries = "https://restcountries.eu/rest/v2/all",
}

export const getAllCountriesData = async (): Promise<Country[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data: allCountriesData } = await httpGET(
        CountriesEndpoints.AllCountries
      );
      resolve(allCountriesData);
    } catch (e) {
      reject(e);
    }
  });
};
