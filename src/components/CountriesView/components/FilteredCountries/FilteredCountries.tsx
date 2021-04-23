import React from "react";
import { CountryListItem } from "..";
import { FilteredCountriesProps } from "./types";
import "./FilteredCountries.scss";

const FilteredCountries: React.FC<FilteredCountriesProps> = ({ countries }) => {
  return (
    <div className='filtered-countries-component countries-list'>
      <h3 className='section-label'>Comparing now</h3>
      <div className='countries-list'>
        {countries.map((country, index) => (
          <CountryListItem index={index} country={country} />
        ))}
      </div>
    </div>
  );
};
export default FilteredCountries;
