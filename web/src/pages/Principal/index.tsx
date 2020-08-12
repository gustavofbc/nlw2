import React from 'react';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/success-background.svg'

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'


import './styles.css';

function Principal() {
    return (
        <div id="page-principal">
            <div className="lado-a">
                <img className="background-img"
                    src={backgroundImg} alt="background"
                />
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>               
                    <h3>Sua plataforma de estudos online.</h3>
                </div>
            </div>

            <div className="lado-b">
                <div className="lado-b-content">
                    <h2>Fazer login</h2>
                    <Input name="login" label="" placeholder="E-mail"></Input>
                    <Input name="senha" label="" placeholder="Senha"></Input>
                

                    <div className="lado-b-options">
                        <input type="checkbox"/>
                        <label>Lembrar-me</label>

                        <a type="button">Esqueci minha senha</a>
                    </div>

                    <button type="submit">
                        Entrar
                    </button>
                </div>
                
                <footer className="lado-b-footer">
                    <span>Não tem conta?</span>

                    <span className="total-connections">
                        É de graça <img src={purpleHeartIcon} alt="Coração roxo"/>
                    </span>
                </footer>
                    <a className="register" href="#">Cadastre-se</a>
                    
            </div>

        </div>
        
    );
}

export default Principal;