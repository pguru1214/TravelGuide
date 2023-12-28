import { configureStore } from "@reduxjs/toolkit";
import travelReducer from "./travelSlice";

const store = configureStore({
    reducer: {
        travel : travelReducer,
    }
})
export default store