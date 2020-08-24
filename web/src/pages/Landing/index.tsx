import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg'

import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import logoutIcon from '../../assets/images/icons/logout.svg'

import api from '../../services/api';

import './styles.css';
import { logout } from "../../services/auth";

function Landing() {

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect( () => {
    api.get('connections').then(response => {
      const {total} = response.data;

      setTotalConnections(total);
    })
  },  []);

  return (
    <div id="page-landing">
      
      <div className="page-landing-topBar">
        <Link to="/">
          <img src={logoutIcon} alt="" onClick={logout}/>
        </Link>
      </div>

      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/> 
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img 
          src={landingImg} 
          alt="Plataforma de estudos" 
          className="hero-image"
        />


      </div>
      <div className="footer-principal">

        <p>Seja bem vindo
          <h4>O que deseja fazer?</h4>
        </p>

        <span className="total-connections">
          Total de {totalConnections} conexões
          <br /> já realizadas 
          <img src={purpleHeartIcon} alt="Coração roxo"/>
        </span>

        <div className="buttons-container">
          <Link to="/study" className='study'>
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className='give-classes'>
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Landing;
