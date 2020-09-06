import React from 'react';

import './styles.css';
import ViewNotification from '../../components/ViewNotification';
import successIcon from '../../assets/images/icons/success-update-class.svg';

function ClassesUpdatedNotification() {
    return (
        <div id="page-notification-updated-classes" className="page-notification-created-classes">
            <ViewNotification
                message="Dados atualizados!" 
                subMessage="Tudo certo, seus dados estão atualizados proffy.
                    Agora é só ficar de olho no seu WhatsApp."
                textButton="Retornar a lista"
                redirectTo="/list-classes"
                iconImage={successIcon}
            />
        </div>
    );
}

export default ClassesUpdatedNotification;