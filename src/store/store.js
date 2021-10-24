import { configureStore } from "@reduxjs/toolkit";
import oneWeatcherSlice from "./oneWeatcherSlice";
import weathersSlice from "./weathersSlice";

export const store = configureStore({
  reducer: {
    weathers: weathersSlice,
    oneWeather: oneWeatcherSlice,
  },
});
