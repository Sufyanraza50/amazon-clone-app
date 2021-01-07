import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firbase';
import './Login.css'

const Login = () => {
    const history = useHistory()
    const [useremail, setUserEmail] = useState();
    const [userpassword, setUserPassword] = useState();

    const loginuser = event => {
        event.preventDefault()
        auth.signInWithEmailAndPassword(useremail, userpassword)
        .then((auth) => {
            history.push('/')
        })
        .catch(e => alert(e.message))
    }

    const signupuser = event => {
        event.preventDefault()
        auth.createUserWithEmailAndPassword(useremail, userpassword)
        .then(auth => {
            history.push('/')
        })
        .catch(e => alert(e.message))

    }

    return (
        <div className="login">
            <Link>
                <img src="https://i.ibb.co/SBG91xy/amazon-logo-transparent.png" alt="home-logo" className="login__logo" />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email:</h5>
                    <input type="email" value={useremail} onChange={event => setUserEmail(event.target.value)} />
                    <h5>Password</h5>
                    <input type="password" value={userpassword} onChange={event => setUserPassword(event.target.value)} />
                    <button onClick={loginuser} type="submit" className="login__signInButton">Sign In</button>
                    <p>By Signing In - You are agreeing to Term's and Conditions</p>
                    <button onClick={signupuser} className="login__registerButton">Create Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
