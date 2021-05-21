import Logout from '../../assets/log-out.svg';
import { Link } from 'react-router-dom';

import './style.css';

export function Header() {
  return (
    <header className="navbar">
      <nav className="nickname">
        <p>#martinsgabriel1956</p>
      </nav>
      <Link to="/" className="logout">
        <p>Sair</p>
        <img src={Logout} alt="Sair" />
      </Link>
    </header>
  );
}