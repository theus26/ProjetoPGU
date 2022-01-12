import React from "react";
import { Link } from 'react-router-dom';
import './login.css';
import Footer from '../../components/footer';




export default function login() {


    return (
        <>
            <div className="container-form">
                <div className="card-Form">
                    <img src='/SGP.png'></img>

                    <div className="label-float">
                        <input type="text" name="usuario" id="usuario" required placeholder="Digite seu Usuario" maxLength="15" minLength="5" required></input>
                        <label for="userLabel" id="labelUsuario" >Usuario</label>

                    </div>
                    <div className="label-float">
                        <input type="password" name="senha" id="senha" required placeholder="Digite sua Senha" maxLength="25" minLength="8" required></input>
                        <label for="userLabel" id="labelSenha" >Senha</label>

                    </div>
                    <button type="submit" className="botao">Entrar</button> <br /><br />
                    <Link className="link-form" to="/esqueciMinhaSenha" style={{}}>
                        Esqueceu sua senha ou bloqueou seu usuário?
                    </Link>
                    
                </div>

            </div>

            <footer className="footer-login">
        Procuradoria Geral do Estado de Sergipe<br/>
SGP © 2010 - 2022    Desenvolvido pela CODIN - Coordenadoria de Informática
        </footer>
        </>
    );

}


