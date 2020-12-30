import React from 'react';
import "./Header.css";
import { Link, useHistory } from 'react-router-dom';
import logo from "../../volunteer-network-main/logos/Group 1329.png";

const Header = () => {
    const history = useHistory();
    const handleLogin = () =>{
        history.push("/login");
    }
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
                <button style={{outline:"none"}} onClick={handleLogin} className="login">Login</button>
                <button style={{outline:"none"}} className="admin">Admin</button>
            </div>
        </div>
    );
};

export default Header;