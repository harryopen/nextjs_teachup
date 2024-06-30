// slice  is made up of  three steps
    /** 
     *  create a slice
     *  create  initial  state
     *  create  reducers
     *  export  the slice  reducers 
     *  export the  slice reducer 
     * 
     * **/
    import {createSlice} from "@reduxjs/toolkit";
    import courses from "../../app/assets/all_courses";

    const initialState = {
        courses: courses,
    };
    const  coursesSlice  = createSlice({
        name:'cart',
        initialState,
        reducers:{

          }
        }

    )
    export default coursesSlice.reducer;
    