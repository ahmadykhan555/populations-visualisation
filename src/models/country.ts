export interface Country {
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: number;
  borders: string[];
  callingCodes: string[];
  capital: string;
  cioc: string;
  currencies: any;
  demonym: string;
  flag: string;
  gini: number;
  languages: any[];
  latlng: number[];
  name: string;
  nativeName: string;
  numericCode: string;
  population: number;
  region: string;
  regionalBlocs: any;
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  translations: string;
  formattedPopulation: string;
}
