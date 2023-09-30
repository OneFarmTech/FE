import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./register/registerSlice";
import userReducer from "./user/userSlice";
import statesReducer from "./states/statesSlice"

const store = configureStore({
  reducer: {
    register: registerReducer,
    user: userReducer,
    states: statesReducer,
  }
});

export default store;
