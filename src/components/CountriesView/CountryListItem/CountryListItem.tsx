import "./CountryListItem.scss";

import { Country } from "../../../models/country";
import React from "react";

interface OwnProps {
  country: Country;
  index: number;
}
const CountryListItem: React.FC<OwnProps> = ({ country, index }) => {
  return (
    <div className='country-list-item' key={`country-${index}`}>
      <p style={{ marginRight: "0.75rem" }}>{index + 1}</p>
      <img src={country.flag} alt='' className='flag' />
      <p key={country.numericCode}>{country.name}</p>
    </div>
  );
};

export default CountryListItem;
