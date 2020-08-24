import React, { useState, useEffect } from 'react';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/background2.svg'
import eyeIcon from '../../assets/images/icons/eye.svg';
import eyeOpenIcon from '../../assets/images/icons/eyeOpen.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { login } from '../../services/auth';

function Principal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    var botao = document.getElementById("btn-entrar");
    function checkFields(){
        if(botao)   //vertifica se existe um elemento com o id= "btn-entrar" antes
        {
            if(email && password){
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

    function mostrarSenha() {
        let tipoInput = (document.getElementById("password") as HTMLInputElement);
        let imgIcon = (document.getElementById("icon-password-login") as HTMLImageElement);

        if(tipoInput){
            if(tipoInput.type == "password"){
                tipoInput.type = "text";
                imgIcon.src = eyeOpenIcon;
                imgIcon.style.padding = "5px";
            } else{
                tipoInput.type = "password";
                imgIcon.src = eyeIcon;
                imgIcon.style.padding = "2px";
            }
        }
    }
    
    const data = {
        email,
        password
    } 

    async function handleLogon( event: any ) {
        event.preventDefault();
        
        if (!email || !password) {
            throw 'Informe e-mail e senha!';
        } else {
          
            try {
                const result = await api.post("signin", data);
// PRECISO DE UM MÉTODO PRA RETORNAR ALGO QUE POSSA USAR PRA BUSCAR OS DADOS DO MEU USUÁRIO LOGADO E LEVAR
// PRO CADASTRO DE CLASSES E DO PERFIL NA LANDING PAGE
                // localStorage.setItem('User_id', result.data.usuarioExistente.id);
                // console.log(result);
                login(result.data.token);

                history.push("/home");
            } catch (err) {
                return "Houve um problema com o login, verifique suas credenciais. T.T"
          }
        }
      };

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

            <form id="form-login" onSubmit={handleLogon}>
            <div className="lado-b">
                <div className="lado-b-content">
                    <h2>Fazer login</h2>
                    <Input 
                        name="login"
                        label=""
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={ (e) => {setEmail(e.target.value)} }
                        required
                    />
                    <Input
                        id="password" 
                        name="senha" 
                        label=""
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={ (e) => {setPassword(e.target.value)} }
                        required
                    />
                    <img id="icon-password-login" className="icon-password-login" onClick={mostrarSenha} src={eyeIcon} alt="icon eye"/>

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

                    <span className="total-connections-principal">
                        É de graça <img src={purpleHeartIcon} alt="Coração roxo"/>
                    </span>
                </footer>
                <div className="link-register">
                    <Link to="/register-user">
                        <a className="register" type="button">Cadastre-se</a>
                    </Link>
                </div>
            </div>
            </form>
        </div>
        
    );
}

export default Principal;