import React from "react";
import { CountryListItem } from "..";
import { AllCountriesProps } from "./types";

const AllCountries: React.FC<AllCountriesProps> = ({ countries }) => {
  return (
    <div className='all-countries-component countries-list'>
      <h3 className='section-label'>All Countries</h3>
      {countries.map((country, index) => (
        <CountryListItem index={index} key={index} country={country} />
      ))}
    </div>
  );
};
export default AllCountries;
