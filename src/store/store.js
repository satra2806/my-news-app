"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import news from "./slice/newsSlice";

const rootReducer = combineReducers({
  // grocery:grocery
  news: news,
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
});
