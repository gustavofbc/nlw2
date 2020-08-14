import React from 'react';

import background from '../../assets/images/success-background.svg';
import  successIcon from '../../assets/images/icons/success-check-icon.svg';

import './styles.css';

function Registered() {
    return (
        <div id="page-registered-principal" className="page-registered-principal">
            <div className="page-registered-principal-content">
                <main>
                    <div className="success">
                        <img className="success-icon"
                            src={successIcon} alt="icon success"
                        />
                    </div>

                    <img className="background"
                        src={background} alt="background"
                    />

                    <h1>Cadastro concluído</h1>
            
                    <span>
                        Agora você faz parte da plataforma da Proffy.
                        Tenha uma ótima experiência.
                    </span>

                    <button type="button">
                        Fazer login
                    </button>
                 </main>
            </div>
        </div>
    );
}

export default Registered;