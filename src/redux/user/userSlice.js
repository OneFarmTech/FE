import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUser = createAsyncThunk('user/fetch', async () => {
  const token = sessionStorage.getItem("token");
  try {
    const response = await axios.get(import.meta.env.VITE_API_URL + 'profile', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response)
    return response.data
  }
  catch (error) {
    console.log(error)
    throw error;
  }
});

const updateUser = createAsyncThunk('user/update', async (details) => {
  const token = sessionStorage.getItem("token");
  try {
    const response = await axios.post(import.meta.env.VITE_API_URL + 'profile/update', details, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });

    return response.data;
  }
  catch (error) {
    console.log(error.message)
    throw error;
  }
})

const initial = {
  error: null,
  loading: false,
  userDetails: {},
  role: null
}

const userSlice = createSlice({
  name: 'user',
  initialState: initial,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userDetails = action.payload.data.user;
        state.role = action.payload.data.roles[0]
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
      .addCase(updateUser.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
  }
});

export default userSlice.reducer;
export { fetchUser, updateUser };
