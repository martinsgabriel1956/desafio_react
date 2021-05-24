import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './style.css'

import ArrowRight from '../../assets/arrow-right_2.svg';

import { UserContext } from "../../contexts/UserContext";

export function Follow() {
  const { userData } = useContext(UserContext);

  return (
    <div className="follow-container">
      <img className="avatar" src={userData.avatar_url} alt="Usuário" />
      <p>#{userData.followers_url}</p>
      <Link to="/profile">
        <img src={ArrowRight} alt="" />
      </Link>
    </div>
  )
}
