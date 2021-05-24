import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import Logo from "../assets/logo.svg";
import ArrowRight from "../assets/arrow-right.svg";

import "../styles/pages/Login.css";

import { UserContext } from "../contexts/UserContext";
import { api } from "../services/api";

export function Login() {
  const { username, setUsername } = useContext(UserContext);
  const { setUserData } = useContext(UserContext);

  const [error, setError] = useState(false);
  const [emptyInput, setEmptyInput] = useState(false);

  const history = useHistory();

  async function handleSubmit(e) {
    try {
      setError(false);
      e.preventDefault();
      setUsername(username);

      const req = await api.get(
        `/${username}?access_token=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`
      );
      const res = req;
      const reqFollowers = await api.get(
        `/${username}/followers?page=1&per_page=100&access_token=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`
      );
      
      const reqFollowing = await api.get(
        `/${username}/following?page=1&per_page=100&access_token=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`
      );
      const reqRepos = await api.get(
        `/${username}/repos?access_token=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`
      );

      const NumberFollowing = parseFloat(reqFollowing.data.length);
      const NumberFollowers = parseFloat(reqFollowers.data.length);
      const NumberRepos = parseFloat(reqRepos.data.length);

      const AllFollowers = (NumberFollowers);
      const AllFollowing = (NumberFollowing);
      const AllRepos = NumberRepos.data;
      console.log(AllRepos);

      if (res.status === 200) {
        const dataUser = {
          login: res.data.login,
          name: res.data.name,
          email: res.data.email,
          avatar_url: res.data.avatar_url,
          location: res.data.location,
          bio: res.data.bio,
          followers: {
            number: NumberFollowers,
            info: AllFollowers,
          },
          following: {
            number: NumberFollowing,
            info: AllFollowing,
          },
          repos: {
            number: NumberRepos,
            info: AllRepos,
          },
        };
        setUserData(dataUser);
        history.push("/dashboard");
      }
    } catch (e) {
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
