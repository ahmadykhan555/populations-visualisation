import "./App.scss";

import {
  setCountriesData,
  setCountriesForComparison,
} from "./store/countries/actions";

import CountriesView from "./components/CountriesView/CountriesView";
import { Country } from "./models/country";
import GraphView from "./components/GraphView/GraphView";
import MapView from "./components/MapView/MapView";
import { connect } from "react-redux";
import { getAllCountriesData } from "./API/countries";
import { useEffect } from "react";

const App: React.FC<any> = ({ dispatch }) => {
  // onMount
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const allData: Country[] = await getAllCountriesData();
      dispatch(setCountriesData(allData));
    } catch (e) {
      // handle error
    }
  };

  return (
    <div className='app'>
      <div className='app__aside'>
        <CountriesView />
      </div>
      <div className='app__center'>
        <MapView />
        <GraphView />
      </div>
    </div>
  );
};
const connector = connect();
export default connector(App);
