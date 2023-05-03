import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const ConfirmSignUp = () => {
    const { token } = useParams(); // Получаем токен из URL
    const [message, setMessage] = useState('Подождите, идет подтверждение регистрации...');
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8081/api/auth/signupConfirm/${token}`)
            .then((response) => {
                if (response.status === 200) {
                    setMessage('Регистрация подтверждена успешно!');
                    setSuccess(true);
                } else {
                    setMessage('Извините, но этот токен недействителен.');
                }
            })
            .catch((error) => {
                setMessage('Произошла ошибка при подтверждении регистрации.');
                console.error(error);
            });
    }, [token]);

    const handleButtonClick = () => {
        if (success) {
            navigate('/login');
        } else {
            navigate('/register');
        }
    };

    return (
        <div className="auth-form-container">
            <h2>{message}</h2>
            <button className="link-btn" onClick={handleButtonClick}>{success ? 'быстрее авторизуйтесь:)'
                : 'Попробуйте зарегистрироваться заново'}</button>
        </div>
    )
}

