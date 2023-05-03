import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login);
        const isFormValid = login && pass
        if (isFormValid) {
            axios({
                method: 'post',
                url: 'http://localhost:8081/api/auth/signin',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    username: login,
                    password: pass,
                }
            }).then((resp) => {
                const isOk = resp.status === 200
                if (isOk) {
                    alert('вы успешно авторизованы')
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
        navigate('/register');
    }


    return (
        <div className="auth-form-container">
            <h2>Вход</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="login">Введите ваш логин</label>
                <input value={login} onChange={(e) => setLogin(e.target.value)} type="login" placeholder="Ваш логин" id="login" name="login" />
                <label htmlFor="password">Введите ваш пароль</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Продолжить</button>
            </form>
            <button className="link-btn" onClick={handleRegisterClick}>У вас еще нет аккаунта?Зарегистрируйтесь здесь.</button>
        </div>
    )
}