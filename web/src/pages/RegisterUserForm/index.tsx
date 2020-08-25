import React, { useState, FormEvent } from 'react';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/background2.svg'
import backIcon from '../../assets/images/icons/back.svg';
import eyeIcon from '../../assets/images/icons/eye.svg';
import eyeOpenIcon from '../../assets/images/icons/eyeOpen.svg';

import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

function RegisterUserForm() {
    const history = useHistory();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let botao = document.getElementById('btn-entrar');
    function checkFields() {
        if(botao){
            if(name && surname && email && password) {
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
        let imgIcon = (document.getElementById("icon-password") as HTMLImageElement);

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

    function handleCreateUsuario(e: FormEvent ) {
        e.preventDefault();

        api.post('usuario', {
            name,
            surname,
            email,
            password

        }).then( () => {
            history.push('/user-created-notification');

        }).catch( () => {
            alert('Erro no cadastro')
            })

    }

    return (
        <div id="page-register-user">
            <div className="page-register-user-content">

                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                </div>

                <form id="form-register-user" onSubmit={handleCreateUsuario}>
                    <div className="form-register-user-content">
                        <h2>Cadastro</h2>
                        <span>Preencha os dados abaixo para começar.</span>
                            <Input 
                                name="nome"
                                label=""
                                value={name}
                                placeholder="Nome"
                                onChange={ (e) => {setName(e.target.value)} }
                                required
                            />
                            <Input 
                                name="sobrenome"
                                label=""
                                value={surname}
                                placeholder="Sobrenome"
                                onChange={ (e) => {setSurname(e.target.value)} }
                                required
                            />
                            <Input 
                                name="email"
                                label=""
                                type="email"
                                value={email}
                                placeholder="E-mail"
                                onChange={ (e) => {setEmail(e.target.value)} }
                                required
                            />
                            <Input
                                id="password" 
                                name="password"
                                label=""
                                type="password"
                                value={password}
                                placeholder="Senha"
                                onChange={ (e) => {setPassword(e.target.value)} }
                                required
                           />
                        <img id="icon-password" className="icon-password" onClick={mostrarSenha} src={eyeIcon} alt="icon eye"/>
                        
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

export default RegisterUserForm;