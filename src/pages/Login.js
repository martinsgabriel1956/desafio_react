import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Logo from "../assets/logo.svg";
import ArrowRight from "../assets/arrow-right.svg";

import "../styles/pages/Login.css";

import { UserContext } from "../contexts/UserContext";

export function Login() {
  const [username, setUsername] = useState("");
  const [emptyInput, setEmptyInput] = useState(false);

  const { login, error} = useContext(UserContext);
  const history = useHistory();

  function handleSubmit(e) {
    try {
      e.preventDefault();
        login(username);
        setUsername("");
        history.push("/dashboard");
    } catch (err) {
      if (username === "") {
        setEmptyInput(true);
      } else {
        setEmptyInput(false);
      }
    }
  }

  function handleChange(e) {
    setUsername(e.target.value);
  }
  // async function handleSubmit(e) {
  //   try {
  //     setError(false);
  //     e.preventDefault();
  //     setUsername(username);

  //     const req = await api.get(
  //       `/${username}?access_token=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`
  //     );
  //     const res = req;

  //     console.log(res);

  //     if (res.status === 200) {
  //       const dataUser = {
  //         login: res.data.login,
  //         name: res.data.name,
  //         email: res.data.email,
  //         location: res.data.location,
  //         company: res.data.company,
  //         bio: res.data.bio,
  //         avatar_url: res.data.avatar_url,
  //         followers_url: res.data.followers_url,
  //         following_url: res.data.following_url,
  //         organizations_url: res.data.organizations_url,
  //         starred_url: res.data.starred_url,
  //         public_repos: res.data.public_repos,
  //         public_gists: res.data.public_gists,
  //         followers: res.data.followers,
  //         following: res.data.following,
  //         html_url: res.data.html_url,
  //       };
  //       setUserData(dataUser);

  //       history.push("/dashboard");
  //     }
  //   } catch (e) {
  //     if (username === "") {
  //       setEmptyInput(true);
  //     } else {
  //       setEmptyInput(false);
  //       setError(true);
  //     }
  //   }
  // }

  return (
    <div className="container">
      <img className="logo" src={Logo} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={handleChange}
        />
        {emptyInput ? (
          <span className="required-field">Campo Obrigatório</span>
        ) : (
          <button type="submit" className="btn-login">
            Entrar
            <img src={ArrowRight} alt="Logo" />
          </button>
        )}
      </form>
      {error ? <span className="invalid-user">Usuário Invalido</span> : ""}
    </div>
  );
}
