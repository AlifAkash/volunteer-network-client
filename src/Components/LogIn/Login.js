import React, { useContext } from 'react';
import "./Login.css";
import logo from "../../volunteer-network-main/logos/Group 1329.png";
import googleLogo from "../../volunteer-network-main/logos/google.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loginUser, setLoginUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();

    const handleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => {
            const {displayName, email} = result.user;
            const loggedInUser = {
                isLogIn: true,
                name: displayName,
                email: email
            }
            setLoginUser(loggedInUser);
            history.replace(from);
        }) 
        .catch(error => {
            const errorMassage = error.message;
            const errorCode = error.code;
            console.log(errorCode, errorMassage);
        });
    }
    return (
        <div className="Login">
            <div>
                <img style={{ height: "50px"}} src={logo} alt="" />
            </div>
            <div className="loginArea">
                <h3>Login with</h3>
                <button onClick={handleLogin} > <img style={{height: "25px"}} src={googleLogo} alt=""/> Continue with google </button>
            </div>
        </div>
    );
};

export default Login;