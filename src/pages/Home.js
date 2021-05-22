import { Link } from 'react-router-dom';

import "../styles/pages/Home.css";

import { Bio } from "../components/Bio";
import { Footer } from "../components/Footer";

import Logout from '../assets/log-out.svg';

export function Home() {
  return (
    <>
      <header className="navbar">
        <nav className="nickname">
          <p>#martinsgabriel1956</p>
        </nav>
        <Link to="/" className="logout">
          <p>Sair</p>
          <img src={Logout} alt="Sair" />
        </Link>
      </header>
      <Bio />
      <Footer />
    </>
  );
}
