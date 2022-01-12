import React from "react";
import './login.css';




export default function login (){
  
   
    return(
        
        <div className="container-form">
            <div className="card-Form">
               <img src='/SGP.png'></img>

                <div className="label-float">
                    <input type="text" name="usuario" id="usuario" required placeholder="Digite seu Usuario"  maxLength="15" minLength="3" required></input>
                    <label for="userLabel" id="labelUsuario" >Usuario</label>
                  
           </div>
           <div className="label-float">
                    <input type="password" name="senha" id="senha" required placeholder="Digite sua Senha" maxLength="25" minLength="8" required></input>
                    <label for="userLabel" id="labelSenha" >Senha</label>
                  
           </div>
           <button type="submit" className="botao">Entrar</button> <br/><br/>
           <a id="link-form" href="https://intranet.pge.se.gov.br/Preferencias/esqueceu_senha.aspx">Esqueceu sua senha ou bloqueou seu usuário?</a>
            </div>
         
        </div>
    );
    
}

    
    