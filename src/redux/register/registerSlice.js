import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginThunk = createAsyncThunk('user/login', async (email) => {
  try {
    const response = await axios.post('https://api.onefarmtech.com/api/login', {
      email
    });
    return await response.data;
  } catch (error) {
    throw error;
  }
});

const signupThunk = createAsyncThunk('user/signup', async (details) => {
  try {
    const response = await axios.post('https://api.onefarmtech.com/api/register', details);
    return await response.data;
  } catch (error) {
    throw error;
  }
  
});

const codeVerification = createAsyncThunk('user/verifyCode', async (details) => {
  try {
    const response = await axios.post('https://api.onefarmtech.com/api/register', details);
    return await response.data;
  } catch (error) {
    throw error;
  }
  
});

const verifyLogin = createAsyncThunk('user/verifyLogin', async (details) => {
  try {
    const response = await axios.post('https://api.onefarmtech.com/api/login', details);
    return await response.data;
  } catch (error) {
    throw error;
  }
  
});

const initial = {
  userToken: sessionStorage.getItem("token") || null,
  response: null,
  loading: false,
  error: null
}

const registerSlice = createSlice({
  name: 'login',
  initialState: initial,
  reducers: {
    clearUser: (state) => {
      sessionStorage.removeItem("token");
      state.userToken = null;
      state.response = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(codeVerification.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(codeVerification.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(codeVerification.fulfilled, (state, action) => {
        state.loading = false;
        state.userToken = action.payload.token;
        sessionStorage.setItem("token", state.userToken);
      })
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.response = action.payload;
      })
      .addCase(verifyLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(verifyLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userToken = action.payload.token;
        sessionStorage.setItem("token", state.userToken);
      })
  }
});

// export const { login, setRole } = registerSlice.actions;
export const { clearUser } = registerSlice.actions;
export default registerSlice.reducer;
export { loginThunk, signupThunk, codeVerification, verifyLogin };
