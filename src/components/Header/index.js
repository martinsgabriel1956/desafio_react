import Logout from '../../assets/log-out.svg';

import './style.css';

export function Header() {
  return (
    <header className="navbar">
      <nav className="nickname">
        <p>#martinsgabriel1956</p>
      </nav>
      <button className="logout">
        <p>Sair</p>
        <img src={Logout} alt="Sair" />
      </button>
    </header>
  );
}