import { Country } from "../../../../models/country";
import CountryListItem from "../../CountryListItem/CountryListItem";
import React from "react";
interface OwnProps {
  countries: Country[];
}
const AllCountries: React.FC<OwnProps> = ({ countries }) => {
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
