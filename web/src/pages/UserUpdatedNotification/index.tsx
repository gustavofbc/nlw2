import React from 'react';

import './styles.css';
import ViewNotification from '../../components/ViewNotification';
import  successIcon from '../../assets/images/icons/success-update-perfil.svg';


function UserUpdatedNotification() {
    return (
        <div id="page-registered-principal" className="page-registered-principal">
            <ViewNotification
                message="Dados atualizados" 
                subMessage="Dados pessoais atualizados com sucesso.
                            Tenha uma ótima experiência."
                textButton="Retornar ao perfil"
                redirectTo='/list-classes'
                iconImage={successIcon}
            />
        </div>
    );
}

export default UserUpdatedNotification;