import React from 'react';
import { Link } from 'react-router-dom';

import logoIcon from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import "./styles.css";

interface PageHeaderProps {
    title?: string;
    description?: string; //o "?" torna-o opcional
    pageTitle?: string;
    img?: string;
    // countProffys?: string;
    subtext?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/home">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <p>{props.pageTitle}</p>
                <img src={logoIcon} alt="Proffy"/>
            </div>

            <div className="header-content">
                <div className="header-content-container">
                    <div className="container-header">
                        <strong>{props.title}</strong>
                        {props.description && <p>{props.description}</p>}
                    </div>
                    <div className="container-subtext">
                        <img className="header-content-img" src={props.img}/>
                        <p>
                            {props.subtext}
                        </p>
                    </div>
                </div>

                {props.children} 
            </div>

        </header>
    );
}

export default PageHeader;