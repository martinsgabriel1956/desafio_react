import React from 'react';
import { Link } from 'react-router-dom';

import './style.css'

import Avatar from '../../assets/avatar.jpeg';
import ArrowRight from '../../assets/arrow-right_2.svg';

export function Follow() {
  return (
    <div className="follow-container">
      <img className="avatar" src={Avatar} alt="Usuário" />
      <p>#martinsgabriel1956</p>
      <Link to="/dashboard">
        <img src={ArrowRight} alt="" />
      </Link>
    </div>
  )
}
