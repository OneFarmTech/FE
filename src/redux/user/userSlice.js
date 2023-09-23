import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser = createAsyncThunk('user/fetch', async () => {
  const token = sessionStorage.getItem("token");
  try {
    const response = await axios.get('https://api.onefarmtech.com/api/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    return response.data
  }
  catch (error) {
    throw error;
  }
});

const initial = {
  error: null,
  loading: false,
  user: {}
}

const userSlice = createSlice({
  name: 'user',
  initialState: initial,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload.data.user;
        state.loading = false;
      })
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
  }
});

export default userSlice.reducer;
export { fetchUser };
