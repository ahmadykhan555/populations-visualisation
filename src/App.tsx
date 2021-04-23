import "./App.scss";

import { setCountriesData } from "./store/countries/actions";

import { Country } from "./models/country";
import { getAllCountriesData } from "./API/countries";
import { useEffect, useState } from "react";
import { GraphView, MapView, CountriesView, AppLoader } from "./components";
import { connect } from "react-redux";

const App: React.FC<any> = ({ dispatch }) => {
  const [loading, setLoading] = useState<boolean>(false);
  // onMount
  useEffect(() => {
    setLoading(true);
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const allData: Country[] = await getAllCountriesData();
      dispatch(setCountriesData(allData));
    } catch (e) {
      // handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='app'>
      {loading && <AppLoader />}
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
