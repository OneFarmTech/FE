import { createSlice } from "@reduxjs/toolkit";

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
