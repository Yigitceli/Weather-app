import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from "./weatherSlice";

export const store = configureStore({
  reducer: {
    weathers: weatherSlice
  }
});
