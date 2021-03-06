import React from 'react';

import './styles.css';
import ViewNotification from '../../components/ViewNotification';
import successIcon from '../../assets/images/icons/success-check-icon.svg';

function ResetSentNotification() {
    return (
        <div id="page-registered-principal" className="page-registered-principal">
            <ViewNotification
                message="Redefinição enviada!" 
                subMessage="Boa, agora é só checar o e-mail que foi enviado para você
                            redefinir sua senha e aproveitar os estudos."
                textButton="Voltar ao login"
                redirectTo="/"
                iconImage={successIcon}
            />
        </div>
    );
}

export default ResetSentNotification;