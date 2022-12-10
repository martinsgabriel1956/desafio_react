import { useState, useContext, FormEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import ArrowRight from "../../assets/arrow-right.svg";

import "../../styles/pages/Login.css";

import { UserContext } from "../../contexts/UserContext";

export function Login() {
  const [username, setUsername] = useState<string>("");
  const [emptyInput, setEmptyInput] = useState(false);

  const { login, setError } = useContext(UserContext);
  const history = useHistory();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if(username.length === 0) {
      setError(true);
      setEmptyInput(true);
      return;
    }

    try {
      setError(false);
      login(username);
      history.push("/dashboard");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if(username.trim().length > 0) {
      setEmptyInput(false);
      setError(false);
    }

  }, [username]);

  return (
    <div className="container">
      <img className="logo" src={Logo} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <button type="submit" className="btn-login">
          Entrar
          <img src={ArrowRight} alt="Logo" />
        </button>
        {emptyInput && <span className="required-field">Campo obrigatório</span>}
      </form>
    </div>
  );
}
