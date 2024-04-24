import axios from "axios";
import { userAuthenticated } from "../app/authSlice";
import { alreadyExists } from "../app/expensesSlice";

const axiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}/Authentication`,
});

export const SignUp = async (dispatch, credentials) => {
    try {
        const { data } = await axiosInstance.post("/signup", credentials);
        dispatch(userAuthenticated(data));
    } catch (error) {
        console.log(error.response.data)
        dispatch(alreadyExists())
    }
};

export const SignIn = async (dispatch, credentials) => {
    try {
        const { data } = await axiosInstance.post("/signin", credentials)
        dispatch(userAuthenticated(data));
    } catch (error) {
        console.log(error.response.data)
    }
}

export const ThirdPartySignIn = async (dispatch, token) => {
    try {
        //api call
        const { data } = await axiosInstance.post(`/google?token=${token}`);
        dispatch(userAuthenticated(data));
    } catch (error) {
        console.log(error.response.data)
    }
}
