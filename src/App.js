import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import StatisticsPage from "./components/StatisticsPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import HomePage from "./components/HomePage";
import { useEffect } from "react";
import { userAuthenticated } from "./app/authSlice";
import Navbar from "./components/NavBar"


const App = () => {
  const { isLoggedIn } = useSelector(state => state.authenticationSlice)
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token")
    if (token !== undefined && token !== null) {
      dispatch(userAuthenticated({ token }))
    }
  }, []);  //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate replace to="/signin" />} />
        <Route path="/signup" element={isLoggedIn ? <Navigate replace to="/" /> : <SignUpPage />} />
        <Route path="/signin" element={isLoggedIn ? <Navigate repalce to="/" /> : <SignInPage />} />
        <Route path="/statistics" element={isLoggedIn ? <StatisticsPage /> : <Navigate replace to="/signin" />} />
        <Route path="*" element={<h2>Page not Found</h2>} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
