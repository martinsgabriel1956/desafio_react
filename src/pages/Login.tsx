import { useState, useContext, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.svg";
import ArrowRight from "../assets/arrow-right.svg";

import "../styles/pages/Login.css";

import { UserContext } from "../contexts/UserContext";

export function Login() {
  const [username, setUsername] = useState('');
  const [emptyInput, setEmptyInput] = useState(false);

  const { login, setError } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    try {
      e.preventDefault();
      setError(false);
      login(username);
      navigate("home");
    } catch (err) {
      if (username === "") {
        setEmptyInput(true);
      } else {
        setEmptyInput(false);
        setError(true);
      }
    }
  }

  return (
    <div className="container">
      <img className="logo" src={Logo} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="btn-login">
          Entrar
          <img src={ArrowRight} alt="Logo" />
        </button>
      </form>
    </div>
  );
}
