import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import { ToastContainer } from "react-toastify";
import SignInPage from "./components/SignInPage";


const App = () => (
  <SignInPage></SignInPage>
  // <div style={{ width: "60%", margin: "auto" }}>
  //   <ToastContainer/>
  //   <h3>New Expense</h3>
  //   <ExpenseForm />
  //   <hr style={{ border: "1px solid grey" }} />
  //   <h3>Your Expenses</h3>
  //   <ExpenseList />
  // </div>
);

export default App;
