import React from 'react';
import {FiArrowRight} from 'react-icons/fi';

import '../styles/global.css';
import '../styles/landing.css';

import logoImg from '../images/logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy"/>
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="location">
          <strong>Ceará</strong>
          <span>Quixeramobim</span>
        </div>
        <a href="" className="enter-app">
          <FiArrowRight size={30} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  );
}

export default Landing;