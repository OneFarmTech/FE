import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./register/registerSlice";

const store = configureStore({
  reducer: {
    register: registerReducer
  }
});

export default store;
