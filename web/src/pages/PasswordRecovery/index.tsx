import React, { useState } from 'react';
import Input from '../../components/Input';

import logoImg from '../../assets/images/logo.svg';
import backgroundImg from '../../assets/images/Background2.svg'
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';
import { Link } from 'react-router-dom';

function PasswordRecovery() {

    return (
        <div id="page-password-recovery">
            <div className="page-password-recovery-content">

                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                </div>

                <form id="form-password-recovery">
                    <div className="form-password-recovery-content">
                        <h2>Eita, esqueceu sua senha?</h2>
                        <span>Não esquenta, vamos dar um jeito nisso.</span>
                            <Input 
                                name="email"
                                label="" 
                                placeholder="E-mail"
                            />
                        <button type="submit">
                            Enviar
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

export default PasswordRecovery;