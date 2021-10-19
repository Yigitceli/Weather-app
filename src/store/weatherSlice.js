import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWeathers } from "../Api";

export const fetchWeathers = createAsyncThunk(
  "fetchWeathers",
  async (ThunkApi) => {
    const response = await getWeathers();

    return response;
  }
);

const weathersSlice = createSlice({
  name: "weather",
  initialState: {
    isLoading: true,
    isError: false,
    data: []
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeathers.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
      state.data = [];
    });
    builder.addCase(fetchWeathers.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isError = false;
      state.isLoading = false;
    });
    builder.addCase(fetchWeathers.rejected, (state, action) => {
      state.data = [];
      state.isLoading = false;
      state.isError = true;
    });
  }
});

export default weathersSlice.reducer;
