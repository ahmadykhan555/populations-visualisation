import mapboxgl from "mapbox-gl";
import mapbox, { Popup } from "mapbox-gl";
import { DEFAULT_CENTER, DEFAULT_ZOOM_LEVEL } from "../constants/index";
mapbox.accessToken = process.env.REACT_APP_MAP_ACCESS_TOKEN || "";

/**
 *
 * @param container HTML element to contain the map
 * @param center coordinates for map center
 * @param zoom coordinates for map zoom-level
 * @returns {mapboxgl.Map} Map
 */
export const createMap = (
  container: string,
  center: mapbox.LngLat = DEFAULT_CENTER,
  zoom = DEFAULT_ZOOM_LEVEL
): mapbox.Map | undefined => {
  if (!mapbox.accessToken) {
    return;
  }
  return new mapbox.Map({
    container, // unique container ID
    style: "mapbox://styles/mapbox/light-v10", // style URL
    center,
    zoom,
  });
};

/**
 *
 * @param id a unique ID for Marker DOM element
 * @param coords set of LngLat
 * @returns {mapbox.Marker} Marker
 */
export const createMarker = (id: string, coords: mapbox.LngLat) => {
  const el = document.createElement("div");
  el.id = id;
  el.className = "location-marker";
  return new mapbox.Marker(el).setLngLat(coords);
};

/**
 *
 * @param text popup text to show
 * @returns {Popup} mapboxPopup
 */

export const createPopup = (text: string): mapbox.Popup => {
  return new mapbox.Popup({
    offset: 25,
    closeButton: false,
    closeOnClick: false,
  }).setHTML(text);
};
