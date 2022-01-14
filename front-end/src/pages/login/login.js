import React, { useState } from "react";
import { Link } from 'react-router-dom';
import './login.css';
import api from '../../api/api';
import { use } from "../../../../backend/routes/usuario";
import { response, set } from "../../../../backend/app";
//import do Card

export default function login() {

    const [usuario,setUsuario] = useState("");
    const [senha,setSenha] = useState("");
    const [erro,setErro] = useState("");
    const [loading,setLoading] = useState(false);

    handleClickLogin = () => {
        window.open('/sucesso', "_self");
    }

    const submit = ()=>{
        setLoading(true);
        setErro("Entrando...");
        if(usuario === "" || senha === ""){
            setLoading(false)
            setErro("Por favor preencha os campos")
        }else{
            api.post('http://localhost:3001/login',{
                usuario,
                senha,
            }).then((response)=>{
                window.localStorage.setItem('token',response.data.token);
                window.localStorage.setItem('permissao',response.data.permissao);
                handleClickLogin();
                
            }).catch((err)=>{
                if (err.response.status === 401 || err.response.status === 404){
                    setErro('Email ou senha Invalidos ');
                }
                if (err.response.status === 500){
                    setErro('erro no servidor ');
                }
            })
        }
    }

    return (
        <>
            <div className="container-form">
                <div className="card-Form">
                    <img src='/SGP.png'></img>

                    <Card />

                    <div className="label-float">
                        <input type="text" name="usuario" id="usuario" required placeholder="Digite seu Usuario" maxLength="15" minLength="5" required onChange={(e)=>setUsuario(e.target.value)}></input>
                        <label for="userLabel" id="labelUsuario" >Usuario</label>

                    </div>
                    <div className="label-float">
                        <input type="password" name="senha" id="senha" required placeholder="Digite sua Senha" maxLength="25" minLength="8" required onChange={(e)=>setSenha(e.target.value)}></input>
                        <label for="userLabel" id="labelSenha" >Senha</label>

                    </div>
                    <button type="submit" className="botao">Entrar</button>
                     <p>{erro}</p>
                     <br /><br />
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


