import React, { useContext , useState} from "react";
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "../contexts/authContext";
import { Link } from "react-router-dom";

const LoginPage = (props)=>{

    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")

    const login = ()=>{
        context.authenticate(userName,password);
    };

    let location = useLocation();

    const { from } = location.state? { from:location.state.from.pathname}:{from:"/"};

    if(context.isAuthenticated === true){
        return <Navigate to={from}/>;
    }

    return(
    <>
        <h2>Login page</h2>
        <input id="username" placeholder="user name" onChange={e =>{
            setUserName(e.target.value);
        }}></input><br />
        <input id="password" type="pawssword" placeholder="password" onChange={e =>{
            setPassword(e.target.value);
        }}></input><br />
        {}
        <button onClick={login}>Log in </button>
        <p>Not Registered?
            <Link to="/signup">Sign Up!</Link>
        </p>
    </>
    );
};

export default LoginPage;
