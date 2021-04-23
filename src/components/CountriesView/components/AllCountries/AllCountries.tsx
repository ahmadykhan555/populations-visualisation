import React from "react";
import { useDispatch } from "react-redux";
import { CountryListItem } from "..";
import { Country } from "../../../../models/country";
import {
  addCountryForComparison,
  removeCountryFromComparison,
} from "../../../../store/countries/actions";
import { AllCountriesProps } from "./types";
import "./AllCountries.scss";

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3 className='section-label'>All Countries</h3>{" "}
        <span style={{ fontSize: "0.75rem", marginLeft: "0.5rem" }}>
          (Select upto 5 for comparison)
        </span>
      </div>
      <div className='countries-list'>
        {countries.map((country, index) => (
          <CountryListItem
            allowSelection
            onCountrySelected={handleCountrySelected}
            index={index}
            key={index}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};
export default AllCountries;
