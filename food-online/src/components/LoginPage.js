import React, { useState } from 'react';
import "../css/LoginPage.css";
import axios from "axios";
import { Link, useHistory } from 'react-router-dom';



function LoginPage(props) {
    let history = useHistory();
    
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        const data = {
            ...userInfo,
            [e.target.name]: e.target.value
        };
        setUserInfo(data);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const loginData = {
            ...userInfo
        };
        console.log(loginData)
        axios
            .post()
            .then(res => {
                console.log(res.data)
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("userId", res.data.id);
                history.push(`/cart/${localStorage.getItem('userId')}`)
            })
            .catch(err => {
                console.log(err)
            });    
    };


    return (
        <div className="login-container">
            <h3>LOGIN HERE</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    <input className="username-input"
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={userInfo.username}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="password">
                    <input className="pass-input"
                        type="text"
                        placeholder="Password"
                        name="password"
                        value={userInfo.password}
                        onChange={handleChange}   
                    />
                </label>

                <button type="submit" onSubmit={handleSubmit}>Login</button>
                
                <Link className="registerbutton" to="/register">Register</Link>
                
            </form>   
        </div>
    )
};


export default LoginPage;

