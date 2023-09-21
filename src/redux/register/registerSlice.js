import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const loginThunk = createAsyncThunk('user/login', async (email) => {
  const response = await axios.post('', {
    email: email
  });
  return response.data;
});

const registerThunk = createAsyncThunk()

const registerSlice = createSlice({
  name: 'login',
  initialState: {
    token: '',
    role: '',
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload
    },
    setRole: (state, action) => {
      state.role = action.payload
    }
  }
});

export const { login, setRole } = registerSlice.actions;
export default registerSlice.reducer;
export { loginThunk };
