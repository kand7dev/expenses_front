import { GoogleLogin } from "@react-oauth/google";
import { ThirdPartySignIn } from "../services/authentication";
import { useDispatch } from "react-redux";

const ThirdPartySignIns = () => {

    const dispatch = useDispatch();
    return (<div style={{ textAlign: "center", marginTop: "1rem", marginLeft: "auto", marginRight: "auto", maxWidth: "fit-content" }}>
        <GoogleLogin onSuccess={response => ThirdPartySignIn(dispatch, response.credential)}
            onError={e => console.log("Error!", e)} />

    </div>)

};

export default ThirdPartySignIns;
