import React, { useState } from "react";
import { signInUserWithEmailAndPassword } from "firebase/auth";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const login = (e) => {
        e.preventDefault();
        signInUserWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            console.log(userCredential); 
        }).catch((error) => {
            console.log(error);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Log In</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Don't Have An Account? Register here.</button>
    </div>
    )
}