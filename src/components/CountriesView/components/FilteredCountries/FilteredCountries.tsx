import { Country } from "../../../../models/country";
import React from "react";
import { CountryListItem } from "..";
import { FilteredCountriesProps } from "./types";

const FilteredCountries: React.FC<FilteredCountriesProps> = ({ countries }) => {
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
