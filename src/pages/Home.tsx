import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import "../styles/pages/Home.css";

import { Bio } from "../components/Bio";
import { Footer } from "../components/Footer";
import { UserContext } from "../contexts/UserContext";

import Logout from '../assets/log-out.svg';

export function Home() {
  const { data, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const { login } = data;

  function handleLogout() {
    logout();
    navigate("/");
  }

  return (
    <>
      <header className="navbar">
        <nav className="nickname">
          <p>#{login}</p>
        </nav>
        <button
          onClick={handleLogout}
          className="logout"
          type="button"
        >
          <p>Sair</p>
          <img src={Logout} alt="Sair" />
        </button>
      </header>
      <Bio />
      <Footer />
    </>
  );
}
