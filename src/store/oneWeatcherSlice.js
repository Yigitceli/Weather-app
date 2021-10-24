import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOneWeather } from "../Api";

export const fetchOneWeather = createAsyncThunk(
  "fetchOneWeather",
  async (city, thunkAPI) => {
    const data = await getOneWeather(city);
    return data;
  }
);

const oneWeatherSlice = createSlice({
  name: "oneWeather",
  initialState: {
    isLoading: true,
    isError: false,
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchOneWeather.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchOneWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = action.payload;
    });
    builder.addCase(fetchOneWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default oneWeatherSlice.reducer;
