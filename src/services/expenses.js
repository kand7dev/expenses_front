import {
  setExpenses,
  newExpense,
  editExpense,
  deleteExpense,
} from "../app/expensesSlice";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5110/Expenses",
});

// Responsible for making HTTP requests.
// HTTP Methods will happen here.

export const GetExpenses = async (dispatch) => {
  try {
    // API call happens here.
    // Pollting with hard-coded data for now.
    // dispatch is used to trigger a state change. expenses[] will be stored in our state afte dispatch.
    const { data } = await axiosInstance.get();
    dispatch(setExpenses(data));
  } catch {
    console.log("Error");
  }
};

export const NewExpense = async (dispatch, expense) => {
  try {
    // API call happens here.
    // Pollting with hard-coded data for now.
    // dispatch is used to trigger a state change. expenses[] will be stored in our state afte dispatch.
    const { data } = await axiosInstance.post("", expense);
    dispatch(newExpense(data));
  } catch {
    console.log("Error!");
  }
};

export const EditExpense = async (dispatch, expense) => {
  try {
    //api call
    await axiosInstance.put("", expense);
    dispatch(editExpense(expense));
  } catch (error) {
    console.log("Error!");
  }
};

export const DeleteExpense = async (dispatch, expense) => {
  try {
    //api call
    await axiosInstance.delete("", { data: { ...expense } });
    dispatch(deleteExpense(expense));
  } catch (error) {
    console.log("Error!");
  }
};
