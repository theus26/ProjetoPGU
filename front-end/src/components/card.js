import React from "react";
import './card.css';

export default function card() {
    return (
        <div className="container">
            <div className="container-content">
                <p id="texto1">Atendimento pelo Whatsapp</p> <br />
                <p id="texto2">Segunda a Sexta, das 7h as 13h.</p>

                <div className="content1">
                    <div>
                        <a className="link" href="https://api.whatsapp.com/send?1=pt_BR&phone=5579991912162" style={{ color: 707070 }} >
                            <p>TESTE</p>
                        </a>
                        <span>
                            (79) 99191-2161
                        </span>
                        <br />
                        <span >
                            Suporte
                        </span>
                        <br />
                    </div>
                </div>
                <div className="content2">
                    <a className="link" href="https://api.whatsapp.com/send?1=pt_BR&phone=5579991912482" style={{ color: 707070 }}>
                        (79) 99191-2482
                    </a>
                    <br />
                    <span>
                        Desenvolvimento
                    </span>
                </div>

            </div>
        </div>
    );
}