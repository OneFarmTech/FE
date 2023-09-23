import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginThunk = createAsyncThunk('user/login', async (email) => {
  try {
    const response = await axios.post('https://api.onefarmtech.com/api/register', {
      email: email
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
    // console.log(response)
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
    // login: (state, action) => {
   
    //   state.userToken = action.payload
    // },
    // setRole: (state, action) => {
    //   state.role = action.payload
    // }
    clearUser: (state) => {
      sessionStorage.removeItem("token");
      state = initial;
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
  }
});

// export const { login, setRole } = registerSlice.actions;
export const { clearUser } = registerSlice.actions;
export default registerSlice.reducer;
export { loginThunk, signupThunk, codeVerification };
