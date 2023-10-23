import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "./register/registerSlice";
import userReducer from "./user/userSlice";
import statesReducer from "./states/statesSlice"
import waitingReducer from "./waitinglist/waitingSlice";

const store = configureStore({
  reducer: {
    register: registerReducer,
    user: userReducer,
    states: statesReducer,
    waiting: waitingReducer,
  }
});

export default store;
