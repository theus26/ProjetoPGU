import React from 'react';
import { Link } from 'react-router-dom';

export default function Sucesso(){
    return(
        <>
            <h1>Sucesso</h1>
            {window.localStorage.getItem('permissao') === 'adm' ? 
            <Link to="/cadastro" style={{}}>
            Cadastro
            </Link> : null}
        </>
    );
}