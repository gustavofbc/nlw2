import React, { useState } from 'react';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/background2.svg'
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function RegisterUser() {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    var botao = document.getElementById('btn-entrar');
    function checkFields() {
        if(botao){
            if(nome && sobrenome && email && password) {
                botao.style.background='var(--color-secundary)';
                botao.style.color='var(--color-button-text)';
                botao.style.transition=' background-color 0.8s';
            }
            else{
                botao.style.background='var(--color-line-in-white)';
                botao.style.color='var(--color-text-complement)';
                botao.style.transition=' background-color 0.8s';
            }
        }
    }

    checkFields();

    return (
        <div id="page-register-user">
            <div className="page-register-user-content">

                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                </div>

                <form id="form-register-user">
                    <div className="form-register-user-content">
                        <h2>Cadastro</h2>
                        <span>Preencha os dados abaixo para começar.</span>
                            <Input 
                                name="nome"
                                label=""
                                value={nome}
                                placeholder="Nome"
                                onChange={ (e) => {setNome(e.target.value)} }
                            />
                            <Input 
                                name="sobrenome"
                                label=""
                                value={sobrenome}
                                placeholder="Sobrenome"
                                onChange={ (e) => {setSobrenome(e.target.value)} }
                            />
                            <Input 
                                name="email"
                                label=""
                                value={email}
                                placeholder="E-mail"
                                onChange={ (e) => {setEmail(e.target.value)} }
                            />
                            <Input 
                                name="password"
                                label=""
                                type="password"
                                value={password}
                                placeholder="Senha"
                                onChange={ (e) => {setPassword(e.target.value)} }
                            />
                        <button id="btn-entrar" type="submit">
                            Concluir cadastro
                        </button>
                    </div>
                </form>

            </div>

            <div id="logo-content">
                <img className="background-img"
                    src={backgroundImg} alt="background"
                />

                <div className="logo-container">
                    <div className="logo-content-principal">
                        <img src={logoImg} alt="Proffy"/>
                        <h3>Sua plataforma de estudos online.</h3>
                    </div>
                </div>

            </div>

        </div>        
    );
}

export default RegisterUser;