import { configureStore } from "@reduxjs/toolkit";
import { coursesReducer, dashboardReducer } from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    dashboard: dashboardReducer,
  },
});

export default store;
