import "./CountriesView.scss";

import { ConnectedProps, connect } from "react-redux";
import React, { useEffect } from "react";
import FilteredCountries from "./FilteredCountries/FilteredCountries";
import SearchBoxComponent from "../SearchBox/SearchBox";
import { setCountriesForComparison } from "../../store/countries/actions";
import { AllCountries } from "./components";

interface OwnProps extends PropsFromRedux {}
const CountriesView: React.FC<OwnProps> = ({
  allCountriesData,
  filteredCountries,
  dispatch,
}) => {
  useEffect(() => {}, [allCountriesData]);
  return (
    <div className='countries-list-component'>
      {allCountriesData.length ? (
        <>
          <SearchBoxComponent
            searchFor={["name", "region"]}
            list={allCountriesData}
            placeholderText='Search countries/regions'
            onSearchComplete={(list: any) => {
              if (!list.length) {
                debugger;
              }
              dispatch(setCountriesForComparison(list.slice(0, 5)));
            }}
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
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(CountriesView);
