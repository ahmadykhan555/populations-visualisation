import "./MapView.scss";

import React, { useEffect } from "react";

import { createMap } from "../../utility/map";

interface OwnProps {}
const CONTAINER_ID = "app-map-view-container";

const MapView: React.FC<OwnProps> = () => {
  // onMount
  useEffect(() => {
    createMap(CONTAINER_ID);
  }, []);
  return <div id={CONTAINER_ID} className='map-view-component'></div>;
};

export default MapView;
