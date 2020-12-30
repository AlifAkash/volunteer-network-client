import React, { useContext } from 'react';
import "./Header.css";
import { Link, useHistory } from 'react-router-dom';
import logo from "../../volunteer-network-main/logos/Group 1329.png";
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../LogIn/firebase.config';

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

const Header = () => {
    const [loginUser, setLogInUser] = useContext(UserContext);
    const history = useHistory();

    const handleLogin = () =>{
        history.push("/login");
    }

    const handleAdmin = () => {
        history.push("/admin");
    }

    const handleLogOut = () => {
        firebase.auth().signOut()
            .then(() => {
                const userSignOut = {
                    isLogIn : false,
                    name: "",
                    email: ""
                }
                setLogInUser(userSignOut);
            })
            .catch(error => {
                console.log(error);
            });
    }

    // const handleSignOut = () => {
    //     firebase.auth().signOut()
    //         .then(function() {
    //             const signedOutUser = {
    //                 isSignedIn: false,
    //                 name: "",
    //                 email: "",
    //                 password: "",
    //                 success: false
    //             }
    //             setUser(signedOutUser); 
    //         })
    //         .catch(function(error) {
    //             console.log(error)
    //         });
    // }

    return (
        <div className="Header">
            <div className="logo">
                <img
                    style={{height : "50px",
                            width: "auto"
                    }}
                    src={logo}
                    alt=""
                />
            </div>
            <div className="links">
                <Link style={{textDecoration : "none", color : "black"}} to="/home">Home</Link>
                <Link style={{textDecoration : "none", color : "black"}} to="/donation">Donation</Link>
                <Link style={{textDecoration : "none", color : "black"}} to="/events">Events</Link>
                <Link style={{textDecoration : "none", color : "black"}} to="/blog">Blog</Link>
                {
                    loginUser.isLogIn?
                    <button style={{outline:"none"}} onClick={handleLogOut} className="login">Logout</button>
                    :
                    <button style={{outline:"none"}} onClick={handleLogin} className="login">Login</button>
                }
                <button style={{outline:"none"}} onClick={handleAdmin} className="admin">Admin</button>
            </div>
        </div>
    );
};

export default Header;