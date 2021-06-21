import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { dashboardReducer } from "./dashboardReducer";
import { uiReducer } from "./uiReducer";

export const rootReducer = combineReducers({
    ui: uiReducer,
    auth: authReducer,
    dashboard: dashboardReducer
})