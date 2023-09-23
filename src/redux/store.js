import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./register/registerSlice";
import userReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    user: userReducer
  }
});

export default store;
