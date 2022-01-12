import React from "react";
import './forgotPassword.css';

export default function forgotPassword(){
    return(
        <div className="container-form-forgot">
        <div className="card-Form-forgot">
           <img className="img-forgot" src='/sgpre.png'></img><br/>
                <h4>Solicitar uma nova senha</h4>

            <div className="label-float-forgot">
                <input type="text" name="login" id="login" required placeholder="Digite seu Login"  maxLength="25" minLength="8" required></input>
                <label for="userLabel" id="labellogin" >Login</label>
              
       </div>
       <div className="label-float-forgot">
                <input type="text" name="cpf" id="cpf" required placeholder="Digite seu CPF" maxLength="25" minLength="8" required></input>
                <label for="userLabel" id="labelcPF" >CPF</label>
              
       </div>
       <button type="submit" className="botao-forgot">Solicitar</button> <br/><br/>
      
        </div>
        <footer className="footer-forgot">
        Procuradoria Geral do Estado de Sergipe<br/>
SGP © 2010 - 2022    Desenvolvido pela CODIN - Coordenadoria de Informática
        </footer>
    </div>

   

    );
}