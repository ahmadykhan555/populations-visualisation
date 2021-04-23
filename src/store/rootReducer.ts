import data from "./countries/reducer"; // create index.ts // improve naming
import { combineReducers } from "redux";

const reducer = combineReducers({ data });
export default reducer;
