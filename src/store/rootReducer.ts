import allCountriesData from "./countries/reducer";
import { combineReducers } from "redux";

const reducer = combineReducers({ allCountriesData });
export default reducer;
