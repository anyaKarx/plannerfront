import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        const isFormValid = email && name && pass
        if (isFormValid) {
            axios({
                method: 'post',
                url: 'http://localhost:8081/api/auth/signup',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    password: pass,
                    login: name,
                    email
                }
            }).then((resp) => {
                const isOk = resp.status === 200
                if (isOk) {
                    alert('Проверьте почту')
                } else {
                    alert('Что-то пошло не так')
                }
            }).catch(() => {
                alert('Что-то пошло не так')
            })
        } else {
            alert('Заполните все поля')
        }
    }

    const handleRegisterClick = () => {
        navigate('/login');
    }

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={handleRegisterClick}>Already have an account? Login here.</button>
    </div>
    )
}
