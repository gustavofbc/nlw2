import React from 'react';

import './styles.css';
import ViewNotification from '../../components/ViewNotification';

function ClassesCreatedNotification() {
    return (
        <div id="page-notification-created-classes" className="page-notification-created-classes">
            <ViewNotification
                message="Cadastro salvo!" 
                subMessage="Tudo certo, seu cadastro está na nossa lista de professores.
                    Agora é só ficar de olho no seu WhatsApp."
                textButton="Acessar"
                redirectTo="/study"
            />
        </div>
    );
}

export default ClassesCreatedNotification;