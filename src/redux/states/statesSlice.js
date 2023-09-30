import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchStates = createAsyncThunk('fetch/states', async () => {
  let token = sessionStorage.getItem("token");

  try {
    const response = await axios.get('https://api.onefarmtech.com/api/states', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  }
  catch (error) {
    throw error;
  }
});

const initial = {
  error: null,
  loading: false,
  states: {}
}

const statesSlice = createSlice({
  name: 'states',
  initialState: initial,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStates.fulfilled, (state, action) => {
        state.states = action.payload;
        state.loading = false;
      })
      .addCase(fetchStates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStates.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
  }
});

export default statesSlice.reducer;
export { fetchStates };
