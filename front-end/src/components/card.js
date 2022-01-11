import React from "react";
import './card.css';

export default function card (){
    return (
        <div className="container">
            
            <div className="container-content">
                <p id="texto1">Atendimento pelo Whatsapp</p> <br/>
                <p id="texto2">Segunda a Sexta, das 7h as 13h.</p>
               
                
                <div className="content1">
                    <a className = "link" href="https://api.whatsapp.com/send?1=pt_BR&phone=5579991912162"  style={{color: 707070}} >
                    <br/>
                    (79) 99191-2162
                    <br/>
                    </a>
                    <span >
                        Suporte
                    </span>
                    <br/>
                </div>
                <div className="content2">
                    <a className="link" href="https://api.whatsapp.com/send?1=pt_BR&phone=5579991912482" style={{color: 707070}}>
                        (79) 99191-2482
                        <br/>
                       
                    </a>
                    <span>
                            Desenvolvimento
                        </span>
                </div>

            </div>
        </div>
    );
}