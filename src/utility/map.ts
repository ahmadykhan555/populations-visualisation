import mapbox from "mapbox-gl";
mapbox.accessToken = process.env.REACT_APP_MAP_ACCESS_TOKEN || "";

const DEFAULT_ZOOM_LEVEL = 2;
const DEFAULT_CENTER = new mapbox.LngLat(-74.5, 40);

export const createMap = (
  container: string,
  center: mapbox.LngLat = DEFAULT_CENTER,
  zoom = DEFAULT_ZOOM_LEVEL
): mapbox.Map => {
  return new mapbox.Map({
    container, // unique container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
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

export const createPopup = (text: string): mapbox.Popup => {
  return new mapbox.Popup({
    offset: 25,
    closeButton: false,
    closeOnClick: false,
  }).setHTML(text);
};
