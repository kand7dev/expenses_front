import { ActionCreators } from "../app/expensesReducer";

// Responsible for making HTTP requests.
// HTTP Methods will happen here.

export const GetExpenses = async (dispatch) => {
  try {
    // API call happens here.
    // Pollting with hard-coded data for now.
    // dispatch is used to trigger a state change. expenses[] will be stored in our state afte dispatch.
    const expenses = [
      {
        id: 1,
        description: "Groceries",
        amount: 23.16,
      },
      {
        id: 2,
        description: "Gas",
        amount: 18.52,
      },
      {
        id: 3,
        description: "Student Loans",
        amount: 600,
      },
    ];
    dispatch(ActionCreators.setExpenses(expenses));
  } catch {
    console.log("Error");
  }
};
