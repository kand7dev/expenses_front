import { Button, Nav } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { logout } from "../app/authSlice";

const Navbar = () => {
    const { isLoggedIn } = useSelector(state => state.authenticationSlice);
    const dispatch = useDispatch();

    return <Nav className="navbar" style={{ backgroundColor: "#e4fff2" }}>
        <h1 style={{ fontFamily: "Satisfy", marginLeft: "50px" }}>My expenses</h1>
        {
            isLoggedIn
                ?
                <div style={{ display: "flex", alignItems: "center", fontFamily: "Satisfy" }}>
                    <NavLink style={{ marginLeft: "1rem" }} variant="link" to="/">Home</NavLink>
                    <NavLink style={{ marginLeft: "1rem" }} variant="link" to="/statistics">Statistics</NavLink>
                    <Button variant="link" href="/signin" onClick={() => dispatch(logout())}>Logout</Button>
                </div>
                : <div style={{ display: "flex", marginRight: "50px", fontFamily: "Satisfy" }}>
                    <NavLink to="/signup">Sign Up</NavLink>
                    <NavLink to="/signin" style={{ marginLeft: "1rem" }}>Sign In</NavLink>
                </div>
        }
    </Nav >
}

export default Navbar;