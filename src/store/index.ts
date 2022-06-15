import { combineReducers, createStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

const _reducers = combineReducers({ reducer });

const store = createStore(_reducers);

export default store;