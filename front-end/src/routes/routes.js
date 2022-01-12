import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/login';
import ForgotPassword from '../pages/forgotPassword/forgotPassword';

export default function Router(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/esqueciMinhaSenha" element={<ForgotPassword />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}