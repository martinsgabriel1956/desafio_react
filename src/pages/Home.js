import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import "../styles/pages/Home.css";

import { Bio } from "../components/Bio";
import { Footer } from "../components/Footer";

import Logout from '../assets/log-out.svg';

import { UserContext } from "../contexts/UserContext";

export function Home() {
  const { data } = useContext(UserContext); 

  const { login } = data;

  return (
    <>
      <header className="navbar">
        <nav className="nickname">
          <p>#{login}</p>
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
