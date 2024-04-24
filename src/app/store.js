import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./expensesSlice";
import statisticsSlice from "./statisticsSlice";
import ToastMiddleware from "../middlewares/ToastMiddleware";
import  authenticationSlice  from "./authSlice";

export const store = configureStore({
  reducer: {
    expensesSlice: expensesSlice,
    authenticationSlice: authenticationSlice,
    statisticsSlice: statisticsSlice,
  },
  middleware: [ToastMiddleware]
});
