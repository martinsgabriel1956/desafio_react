import { Link } from 'react-router-dom';

import './style.css';

import Home from '../../assets/home.svg';
import Repos from '../../assets/github.svg';
import Users from '../../assets/users.svg';

export function Footer() {
  return (
    <div className="footer-container">
      <Link to="/home" className="tab-buttons">
        <img src={Home} alt="" />
        <p>Home</p>
      </Link>
      <Link to="/repositories" className="tab-buttons">
        <img src={Repos} alt="" />
        <p>Repos</p>
      </Link>
      <Link to="/followers" className="tab-buttons">
        <img src={Users} alt="" />
        <p>Seguidores</p>
      </Link>
      <Link to="/followings" className="tab-buttons">
        <img src={Users} alt="" />
        <p>Seguindo</p>
      </Link>
    </div>
  );
}