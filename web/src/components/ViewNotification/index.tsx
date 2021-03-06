import React from 'react';
import { Link } from 'react-router-dom';

import background from '../../assets/images/success-background.svg';

import './styles.css';

interface ViewNotificationProps {
    message: string;
    subMessage?: string;
    textButton: string;
    redirectTo: string;
    iconImage: string;
}

const ViewNotification: React.FC<ViewNotificationProps> = (props) => {
    return (
        <div id="view-notification-content">
                <main>
                    
                    <img className="background"
                        src={background} alt="background"
                    />
                    <div className="success">
                        <img className="success-icon"
                            src={props.iconImage} alt="icon success"
                        />
                    </div>


                    <h1>{props.message}</h1>
            
                    <span>{props.subMessage}</span>
                    <Link to={props.redirectTo} className="button">{props.textButton}</Link>
                 </main>
                    
            </div>
    );
}

export default ViewNotification;