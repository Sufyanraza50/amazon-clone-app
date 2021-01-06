import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <Link>
                <img src="https://i.ibb.co/SBG91xy/amazon-logo-transparent.png" alt="home-logo" className="login__logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email:</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button type="submit" className="login__signInButton">Sign In</button>
                    <p>By Signing In - You are agreeing to Term's and Conditions</p>
                    <button className="login__registerButton">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
