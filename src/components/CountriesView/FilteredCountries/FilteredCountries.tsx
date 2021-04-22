import { Country } from "../../../models/country";
import CountryListItem from "../CountryListItem/CountryListItem";
import React from "react";
interface OwnProps {
  countries: Country[];
}
const FilteredCountries: React.FC<OwnProps> = ({ countries }) => {
  return (
    <div className='filtered-countries-component countries-list'>
      <h3 className='section-label'>Comparing now</h3>
      {countries.map((country, index) => (
        <CountryListItem index={index} country={country} />
      ))}
    </div>
  );
};
export default FilteredCountries;
