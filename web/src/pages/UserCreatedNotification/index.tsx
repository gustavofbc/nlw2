import React from 'react';

import './styles.css';
import ViewNotification from '../../components/ViewNotification';

function UserCreatedNotification() {
    return (
        <div id="page-registered-principal" className="page-registered-principal">
            <ViewNotification
                message="Cadastro concluído" 
                subMessage="Agora você faz parte da plataforma da Proffy.
                            Tenha uma ótima experiência."
                textButton="Fazer login"
                redirectTo='/'
            />
        </div>
    );
}

export default UserCreatedNotification;