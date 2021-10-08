import { configureStore } from "@reduxjs/toolkit";
import userDataSlice from "./Slices/userDataSlice";

const store = configureStore({
    reducer :{
        userData : userDataSlice
    }
})

export default store;