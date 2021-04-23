import "./CountriesView.scss";

import { ConnectedProps, connect } from "react-redux";
import React, { useEffect } from "react";
import { setCountriesForComparison } from "../../store/countries/actions";
import { AllCountries, FilteredCountries, RegionsSelector } from "./components";
import { SearchBox } from "..";
import { Country } from "../../models/country";

interface OwnProps extends PropsFromRedux {}
const CountriesView: React.FC<OwnProps> = ({
  allCountriesData,
  filteredCountries,
  regions,
  dispatch,
}) => {
  useEffect(() => {}, [allCountriesData]);
  const handleSelectedRegion = (region: string) => {
    const filteredForRegion = allCountriesData.filter(
      (country: Country) => country.region === region
    );
    dispatch(setCountriesForComparison(filteredForRegion));
  };
  return (
    <div className='countries-list-component'>
      {allCountriesData.length ? (
        <>
          <SearchBox
            searchFor={["name", "region"]}
            list={allCountriesData}
            placeholderText='Search countries/regions'
            onSearchComplete={(list: any) => {
              dispatch(setCountriesForComparison(list));
            }}
          />
          <RegionsSelector
            onCellSelected={handleSelectedRegion}
            list={regions}
          />
          {filteredCountries.length > 0 && (
            <FilteredCountries countries={filteredCountries} />
          )}
          <AllCountries countries={allCountriesData} />
        </>
      ) : (
        <p>No countries yet</p>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  allCountriesData: state.allCountriesData.allCountriesData,
  filteredCountries: state.allCountriesData.filteredForComparison,
  regions: state.allCountriesData.regions,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CountriesView);
