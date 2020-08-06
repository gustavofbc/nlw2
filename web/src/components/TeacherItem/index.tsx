import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/40838230?s=460&u=c07951c74add98296f80181d8cacaa6c698154e3&v=4" alt="Gustavo Felipe"/>
                <div>
                    <strong>Gustavo Felipe</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Testesadasdssddasdas 
                <br/><br/>
                teste teste teste teste teste teste teste teste teste teste.
            </p>

            <footer>
                <p>
                    Preço/hora:
                    <strong>R$ 20,00</strong> 
                </p>
                <button type='button'>
                    <img src={whatsappIcon} alt="WhatsApp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem