import "./App.scss";

import { setCountriesData } from "./store/countries/actions";

import { Country } from "./models/country";
import { getAllCountriesData } from "./API/countries";
import { useEffect } from "react";
import { GraphView, MapView, CountriesView } from "./components";
import { connect } from "react-redux";

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
