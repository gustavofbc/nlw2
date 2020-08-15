import React, { useState } from 'react';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/background2.svg'

import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'


import './styles.css';
import { Link } from 'react-router-dom';

function Principal() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    var botao = document.getElementById("btn-entrar");
    function checkFields(){
        if(botao)   //vertifica se existe um elemento com o id= "btn-entrar" antes
        {
            if(login && password){
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

            <form id="form-login">
            <div className="lado-b">
                <div className="lado-b-content">
                    <h2>Fazer login</h2>
                    <Input 
                        name="login"
                        label="" 
                        placeholder="E-mail"
                        value={login}
                        onChange={ (e) => {setLogin(e.target.value)} }
                        required
                    />
                    <Input 
                        name="senha" 
                        label=""
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={ (e) => {setPassword(e.target.value)} }
                        required
                    />
                

                    <div className="lado-b-options">
                        <input type="checkbox"/>
                        <label>Lembrar-me</label>

                        <Link to="/password-recovery">
                            <a type="button">Esqueci minha senha</a>
                        </Link>
                    </div>

                    
                    <button id="btn-entrar" type="submit">
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
            </form>
        </div>
        
    );
}

export default Principal;