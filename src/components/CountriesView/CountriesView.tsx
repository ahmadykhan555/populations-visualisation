import "./CountriesView.scss";

import { ConnectedProps, connect } from "react-redux";
import React, { useEffect } from "react";
import { setCountriesForComparison } from "../../store/countries/actions";
import { AllCountries, FilteredCountries, RegionsSelector } from "./components";
import { SearchBox } from "..";
import { Country } from "../../models/country";

interface OwnProps extends PropsFromRedux {}
const CountriesView: React.FC<OwnProps> = ({
  allCountries,
  filteredCountries,
  regions,
  dispatch,
}) => {
  useEffect(() => {}, [allCountries]);
  const handleSelectedRegion = (region: string) => {
    const filteredForRegion = allCountries.filter(
      (country: Country) => country.region === region
    );
    dispatch(setCountriesForComparison(filteredForRegion));
  };
  return (
    <div className='countries-list-component'>
      {allCountries.length ? (
        <>
          <SearchBox
            searchFor={["name", "region"]}
            list={allCountries}
            placeholderText='Search countries/regions'
            onSearchComplete={(list: any) => {
              dispatch(setCountriesForComparison(list));
            }}
          />
          <RegionsSelector
            onCellSelected={handleSelectedRegion}
            list={regions}
          />
          <div className='list-sections'>
            {filteredCountries.length > 0 && (
              <FilteredCountries countries={filteredCountries} />
            )}
            <AllCountries countries={allCountries} />
          </div>
        </>
      ) : (
        <p>No countries yet</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  allCountries: state.data.allCountries,
  filteredCountries: state.data.filteredForComparison,
  regions: state.data.regions,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CountriesView);
