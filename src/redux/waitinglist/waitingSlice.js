import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const submitMail = createAsyncThunk('user/waitinglist', async (details) => {
  try {
    const response = await axios.post('https://api.onefarmtech.com/api/waitlist', details, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    return response.data;
  }
  catch (error) {
    console.log(error);
    throw error;
  }
});

const waitingSlice = createSlice({
  name: 'waitinglist',
  initialState: {
    loading: false,
    error: null,
    response: null,
  },
  reducers: {
    clearState: (state) => {
      state.response = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitMail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitMail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(submitMail.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
  }
});

export const { clearState } = waitingSlice.actions;
export default waitingSlice.reducer;
export { submitMail };