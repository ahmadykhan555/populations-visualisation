import "./CountryListItem.scss";

import React from "react";
import { CountryListItemProps } from "./types";

const CountryListItem: React.FC<CountryListItemProps> = ({
  country,
  index,
}) => {
  return (
    <div
      className='country-list-item'
      key={`${country.name}-${country.region}`}>
      <p style={{ marginRight: "0.75rem" }}>{index + 1}</p>
      <img src={country.flag} alt='' className='flag' />
      <p key={country.numericCode}>{country.name}</p>
    </div>
  );
};

export default CountryListItem;
