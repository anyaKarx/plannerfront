import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {ConfirmSignUp} from './components/ConfirmSignUp';

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login onFormSwitch={toggleForm}/>}/>
                    <Route path='/login' element={<Login onFormSwitch={toggleForm}/>}/>
                    <Route path='/register' element={<Register onFormSwitch={toggleForm}/>}/>
                    <Route path='/confirmSignUp/:token' element={<ConfirmSignUp/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;