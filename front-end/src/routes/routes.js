import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/login/login';
import ForgotPassword from '../pages/forgotPassword/forgotPassword';
import Cadastro from '../pages/cadastro/cadastro';
import Sucesso from '../pages/sucess/sucess';

export default function Router(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/esqueciMinhaSenha" element={<ForgotPassword />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/sucesso" element={<Sucesso />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}