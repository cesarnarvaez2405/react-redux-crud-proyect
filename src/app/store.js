import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/task/taskslice";

export const store = configureStore({

    reducer:{
        task: taskReducer
    }

})