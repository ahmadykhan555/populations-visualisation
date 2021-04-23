import "./MapView.scss";

import { ConnectedProps, connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { createMap, createMarker, createPopup } from "../../utility/map";

import { Country } from "../../models/country";
import mapboxgl from "mapbox-gl";

interface OwnProps extends PropsFromRedux {}
const CONTAINER_ID = "app-map-view-container";

const MapView: React.FC<OwnProps> = ({ countriesData }) => {
  const [map, setMap] = useState<mapboxgl.Map>();
  const markers: mapboxgl.Marker[] = [];

  // onMount
  useEffect(() => {
    setMap(createMap(CONTAINER_ID));
  }, []);

  useEffect(() => {
    if (map && countriesData.length) {
      const bounds = new mapboxgl.LngLatBounds();
      countriesData.forEach((country: Country) => {
        const [lat, lng] = country.latlng;
        if (lat && lng) {
          const marker = createMarker(
            `marker-${country.numericCode}`,
            new mapboxgl.LngLat(lng, lat)
          );
          marker
            .setPopup(
              createPopup(
                `<p><strong>${country.name}</strong></p> <p><strong>${country.region}</strong></p>`
              )
            )
            .addTo(map)
            .togglePopup();
          bounds.extend(marker.getLngLat());
          markers.push(marker);
        }
      });
      map.fitBounds(bounds, { maxDuration: 1000 }); // fit viewport to show all markers
    }

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [countriesData]);

  return <div id={CONTAINER_ID} className='map-view-component'></div>;
};

const mapStateToProps = (state: any) => ({
  countriesData: state.allCountriesData.filteredForComparison,
});

const connector = connect(mapStateToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(MapView);
