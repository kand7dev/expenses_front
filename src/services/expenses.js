import { ActionCreators } from "../app/expensesReducer";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5110/Expenses",

})

// Responsible for making HTTP requests.
// HTTP Methods will happen here.

export const GetExpenses = async (dispatch) => {
  try {
    // API call happens here.
    // Pollting with hard-coded data for now.
    // dispatch is used to trigger a state change. expenses[] will be stored in our state afte dispatch.
    const { data } = await axiosInstance.get();
    dispatch(ActionCreators.setExpenses(data));
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
    dispatch(ActionCreators.newExpense(data));
  } catch {
    console.log("Error!");
  }
}

export const EditExpense = async (dispatch, expense) => {
  try {
    //api call
    dispatch(ActionCreators.editExpense(expense));
  } catch (error) {
    console.log("Error!");
  }
}

export const DeleteExpense = async (dispatch, expense) => {
  try {
    //api call
    dispatch(ActionCreators.deleteExpense(expense));
  } catch (error) {
    console.log("Error!");
  }
}