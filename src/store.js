import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task/taskSlice.js";

export const store = configureStore({
  reducer: { task: taskReducer },
});
