import { combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit';
import userInfo from "./reducers/UserInfo";
import workLife from "./reducers/WorkLife";

const allReducers = combineReducers({
    userInfo: userInfo,
    workLife: workLife
});

const store = configureStore({reducer: allReducers});
export default store;