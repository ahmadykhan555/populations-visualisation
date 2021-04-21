import { createStore } from "redux";
import rootReducer from "./rootReducer";

export interface StateAction {
  type: any;
  payload?: object;
}

const store = createStore(rootReducer);
export default store;
