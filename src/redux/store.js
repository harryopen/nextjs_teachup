import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./slices/cartSlice";
const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export default store;
