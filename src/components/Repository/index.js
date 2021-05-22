import React from 'react';

import Star from '../../assets/star.svg';
import Private from '../../assets/lock.svg';
import Public from '../../assets/unlock.svg';

import './styles.css'

export function Repository() {
  return (
    <div className="repository-container">
      <h3>desafio_react</h3>
      <p>Desafio React da Luby Software</p>
      <div className="repository-info">
      <div className="stars">
        <img src={Star} alt="estrelas" />
        <p>32</p>
      </div>
      <div className="repository-status">
        <img src={Public} alt="" />
        <img src={Private} alt="" />
      </div>
      </div>
    </div>
  )
}
