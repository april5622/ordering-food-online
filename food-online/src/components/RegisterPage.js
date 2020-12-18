import React, { useState } from 'react';
import axios from  "axios";
import { useHistory } from "react-router-dom";
import "../css/RegisterPage.css";

function RegisterPage() {
    let history = useHistory();
    
    const [userInfo, setUserInfo] = useState({
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
    });

    const handleChange = e =>{
        const data = {
            ...userInfo,
            [e.target.name]: e.target.value
        };
        setUserInfo(data);
    };

    const handleSubmit = e => {
        e.preventDefailt();
        const registerData = {
            ...userInfo
        };
        console.log("REGISTERDATA", registerData)
        axios
            .post('https://food-online-be.herokuapp.com/auth/register', registerData)
            .then(res => {
                localStorage.setItem("values", res.data.registerData);
                history.push('/login')
                setUserInfo(userInfo)
                console.log("RES DATA",res.data)
            })
            .catch(err => {
                console.log(err)
            });
    };

    return (
        <div className="register-container">
            <h3>REGISTER HERE</h3>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="firstname">
                    <input
                        placeholder="First Name"
                        type="text"
                        name="firstname"
                        value={userInfo.firstname}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="lastname">
                    <input
                        placeholder="Last Name"
                        type="text"
                        name="lastname"
                        value={userInfo.lastname}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="Email">
                    <input className="email-input"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={userInfo.email}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="username">
                    <input
                        placeholder="Username"
                        type="text"
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

                <button type="submit" onSubmit={handleSubmit}>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage;
