import { combineReducers } from "redux";
import { userReducer } from "./reducers/userReducer";
import { dashboardReducer } from "./reducers/dashboardReducer";

const rootReducer = combineReducers({
  userReducer: userReducer,
  dashboardReducer: dashboardReducer,
});

export default rootReducer;
