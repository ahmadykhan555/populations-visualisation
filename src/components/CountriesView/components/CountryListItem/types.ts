import { Country } from "../../../../models/country";

export interface CountryListItemProps {
  country: Country;
  index: number;
  onCountrySelected?: Function;
  allowSelection?: boolean;
}
