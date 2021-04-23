import allCountriesData from "./countries/reducer"; // create index.ts // improve naming
import { combineReducers } from "redux";

const reducer = combineReducers({ allCountriesData });
export default reducer;
