import "./CountriesList.scss";

import { ConnectedProps, connect } from "react-redux";

import { Country } from "../../models/country";
import React from "react";

interface OwnProps extends PropsFromRedux {}
const CountriesList: React.FC<OwnProps> = ({ countriesData }) => {
  return (
    <div className='countries-list-component'>
      {countriesData.map((country: Country) => (
        <p key={country.numericCode}>{country.name}</p>
      ))}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  countriesData: state.countriesData.data,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CountriesList);
