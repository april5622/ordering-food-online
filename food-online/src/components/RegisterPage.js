import React from 'react';
import "../css/RegisterPage.css";

function RegisterPage() {
    const handleChange = e =>{

    }
    const handleSubmit = e => {

    }

    return (
        <div className="register-container">
            <h3>REGISTER HERE</h3>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="firstname">
                    <input
                        placeholder="First Name"
                        type="text"
                        name="firstname"
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="lastname">
                    <input
                        placeholder="Last Name"
                        type="text"
                        name="lastname"
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="Email">
                    <input className="email-input"
                        type="text"
                        placeholder="Email"
                        name="email"
                        //value={userInfo.email}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="username">
                    <input
                        placeholder="Username"
                        type="text"
                        name="username"
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="password">
                    <input className="pass-input"
                        type="text"
                        placeholder="Password"
                        name="password"
                        //value={userInfo.password}
                        onChange={handleChange}   
                    />
                </label>

                <button type="submit" onSubmit={handleSubmit}>Register</button>
            </form>
        </div>
    )
}

export default RegisterPage;
