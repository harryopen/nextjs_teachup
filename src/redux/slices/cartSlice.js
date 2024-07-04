import { createSlice } from "@reduxjs/toolkit";
import courses from "../../app/assets/all_courses";

const dashInitialState = [];

const initialState = {
  courses: courses,
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
});

const dashboardSlice = createSlice({
  name: "dashboard_course",
  initialState: dashInitialState,
  reducers: {
    addToDashboard: (state, action) => {
      const { desc, id, image, name, new_price } = action.payload;
      state.push({ desc, id, image, name, new_price });
    },
  },
  
});

export const coursesReducer = coursesSlice.reducer;
export const dashboardReducer = dashboardSlice.reducer;

export const { addToDashboard } = dashboardSlice.actions;
