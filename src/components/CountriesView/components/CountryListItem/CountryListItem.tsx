import "./CountryListItem.scss";

import React, { useState } from "react";
import { CountryListItemProps } from "./types";

const CountryListItem: React.FC<CountryListItemProps> = ({
  country,
  index,
  onCountrySelected,
}) => {
  const [selected, setSelected] = useState<boolean>(false);
  const handleItemClick = () => {
    setSelected(!selected);
    onCountrySelected && onCountrySelected(country, !selected);
  };
  return (
    <div
      className={`country-list-item ${
        selected ? "country-list-item--selected" : ""
      }`}
      onClick={handleItemClick}
      key={`${country.name}-${country.region}`}>
      <div className='country-list-item__content'>
        <p style={{ marginRight: "0.75rem" }}>{index + 1}</p>
        <img src={country.flag} alt='' className='flag' />
        <p key={country.numericCode}>{country.name}</p>
      </div>
      {selected && <div className='country-list-item__checkmark'>✅</div>}
    </div>
  );
};

export default CountryListItem;
