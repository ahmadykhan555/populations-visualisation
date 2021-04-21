import environment from "../environment/environment";
import mapbox from "mapbox-gl";
mapbox.accessToken = environment.mapboxAccessToken;

const DEFAULT_ZOOM_LEVEL = 9;
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
