import React from "react";

import "../styles/pages/Home.css";

import { Bio } from "../components/Bio";
import { Footer } from "../components/Footer";

import Save from "../assets/log-in.svg";

export function UserProfile() {
  return (
    <>
      <header className="navbar">
        <nav className="nickname">
          <p>#martinsgabriel1956</p>
        </nav>
        <div className="logout">
          <p>Salvar</p>
          <img src={Save} alt="Sair" />
        </div>
      </header>
      <Bio />
      <Footer />
    </>
  );
}