import { combineReducers } from "redux";
import countriesData from "./countries/reducer";

const reducer = combineReducers({ countriesData });
export default reducer;
