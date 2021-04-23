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
      resolve(
        (allCountriesData as Country[])
          .map((country) => ({
            ...country,
            formattedPopulation: new Intl.NumberFormat().format(
              country.population
            ),
          }))
          .sort((a, b) => b.population - a.population)
      );
    } catch (e) {
      reject(e);
    }
  });
};
