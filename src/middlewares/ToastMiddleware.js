import { newExpense, editExpense, deleteExpense, setExpensesError, newExpenseError, editExpensesError, deleteExpensesError } from "../app/expensesSlice";
import { toast } from "react-toastify";

const ToastMiddleware = () => next => action => {
    switch(action.type){
        case newExpense.type:
            toast.success("New expense added!")
            break;
        case editExpense.type:
            toast.update("Expense updated!")
            break
        case deleteExpense.type:
            toast.success("Expense deleted!")
            break;
        case setExpensesError.type:
            toast.error("Error loading expenses!")
            break;
        case newExpenseError.type:
            toast.error("Error adding an expense!")
            break;
        case editExpensesError.type:
            toast.error("Error editing expense!")
            break;
        case deleteExpensesError.type:
            toast.error("Error deleting expense!")
            break;
        default:
            break;
    }
    return next(action);
}
export default ToastMiddleware;