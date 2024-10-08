import { newExpense, editExpense, deleteExpense, setExpensesError, newExpenseError, editExpenseError, deleteExpenseError } from "../app/expensesSlice";
import { alreadyExists, invalidInputData } from "../app/authSlice";
import { toast } from "react-toastify";

const ToastMiddleware = () => next => action => {
    switch (action.type) {
        case newExpense.type:
            toast.success("New expense added!")
            break;
        case editExpense.type:
            toast.success("Expense updated!")
            break;
        case deleteExpense.type:
            toast.success("Expense deleted!")
            break;
        case setExpensesError.type:
            toast.error("Error loading expenses!")
            break;
        case newExpenseError.type:
            toast.error("Error adding an expense!")
            break;
        case editExpenseError.type:
            toast.error("Error editing expense!")
            break;
        case deleteExpenseError.type:
            toast.error("Error deleting expense!")
            break;
        case alreadyExists.type:
            toast.error("User already exists!");
            break;
        case invalidInputData.type:
            toast.error("Invalid username or password")
            break;
        default:
            break;
    }
    return next(action);
}
export default ToastMiddleware;