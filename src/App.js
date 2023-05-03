import React from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Login} from './components/Login';
import {Register} from './components/Register';
import {ConfirmSignUp} from './components/ConfirmSignUp';

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/confirmSignUp/:token' element={<ConfirmSignUp/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;