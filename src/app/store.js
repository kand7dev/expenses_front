import { configureStore } from "@reduxjs/toolkit";
import expensesSlice from "./expensesSlice";
import ToastMiddleware from "../middlewares/ToastMiddleware";
import  authenticationSlice  from "./authSlice";

export const store = configureStore({
  reducer: {
    expensesSlice: expensesSlice,
    authenticationSlice: authenticationSlice
  },
  middleware: [ToastMiddleware]
});
