import "./GraphView.scss";

import { ConnectedProps, connect } from "react-redux";

import BarGraphComponent from "./BarGraph/BarGraphs";
import React from "react";

interface OwnProps extends PropsFromRedux {}

const GraphView: React.FC<OwnProps> = ({ filteredCountries }) => {
  return (
    <div className='graph-view-component'>
      {filteredCountries.length > 0 && (
        <BarGraphComponent data={filteredCountries} />
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  filteredCountries: state.allCountriesData.filteredForComparison,
});
const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(GraphView);
