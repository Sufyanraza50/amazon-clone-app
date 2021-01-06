import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="login__container">
                <h1>Log in</h1>
                <form>
                    <h5>Email:</h5>
                    <input type="email"/>
                    <h5>Password</h5>
                    <input type="password" />
                    <button type="submit" className="login__signInButton">Sign In</button>
                    <p>Ny signing- you are agreeing to term's and conditions</p>
                </form>
            </div>
        </div>
    )
}

export default Login;
