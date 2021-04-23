import React from "react";
import { useDispatch } from "react-redux";
import { CountryListItem } from "..";
import { Country } from "../../../../models/country";
import {
  addCountryForComparison,
  removeCountryFromComparison,
} from "../../../../store/countries/actions";
import { AllCountriesProps } from "./types";

const AllCountries: React.FC<AllCountriesProps> = ({ countries }) => {
  const dispatch = useDispatch();

  const handleCountrySelected = (country: Country, selected: boolean) => {
    dispatch(
      selected
        ? addCountryForComparison(country)
        : removeCountryFromComparison(country)
    );
  };

  return (
    <div className='all-countries-component countries-list'>
      <h3 className='section-label'>All Countries</h3>
      {countries.map((country, index) => (
        <CountryListItem
          onCountrySelected={handleCountrySelected}
          index={index}
          key={index}
          country={country}
        />
      ))}
    </div>
  );
};
export default AllCountries;
