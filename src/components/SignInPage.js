import { useState } from "react";
import { FormControl, InputGroup, Form, Button } from "react-bootstrap"
import { SignIn } from "../services/authentication";
import { useDispatch } from "react-redux";
import ThirdPartySignIns from "./ThirdPartySignIns"
import { ToastContainer } from "react-toastify";


const SignInPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    return (
        <div style={{ width: "30rem", margin: "auto", paddingTop: "8px", fontFamily: "Montserrat" }}>
            <ToastContainer />
            <Form onSubmit={event => {
                event.preventDefault();
                SignIn(dispatch, { username, password })
            }}>
                <h4 style={{ textAlign: "center", fontFamily: "Satisfy" }}>Welcome back!</h4>
                <InputGroup className="mb-3" style={{ marginTop: "1rem" }}>
                    <FormControl placeholder="Username" onChange={event => setUsername(event.target.value)}></FormControl>
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl placeholder="Password" type="password" onChange={event => setPassword(event.target.value)}></FormControl>
                </InputGroup>
                <Button type="submit" variant="primary" style={{ margin: "auto", display: "block", width: "10rem" }}>Sign In</Button>
            </Form>
            <ThirdPartySignIns />
        </div >)
};

export default SignInPage;