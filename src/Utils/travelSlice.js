import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  travel: [],
  status: "idle",
  error: null,
};

export const getTravelList = createAsyncThunk("packages/get", async () => {
  try {
    const data = await fetch("https://apis.ccbp.in/tg/packages");
    if (!data.ok) {
      throw new Error("Network response was not ok.");
    }
    const result = await data.json();
    return result.packages;
  } catch (error) {
    throw new Error("Error fetching travel data: " + error.message);
  }
});

const travelSlice = createSlice({
  name: "travel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTravelList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTravelList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.travel = action.payload;
      })
      .addCase(getTravelList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default travelSlice.reducer;
