import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import '../styles/pages/Followers.css'
import ArrowRight from '../assets/arrow-right_2.svg';

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { UserContext } from "../contexts/UserContext";

export function Followers() {
  const { data } = useContext(UserContext);
  const { login } = data;
  const [followersList, setFollowersList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/users/${login}/followers`
      );
      const json = await response.json();
      setFollowersList(json);
    }
    fetchData();
  }, [login]);

  return (
    <>
      <Header type="143 Seguidores" />
      <ul>
        {followersList.map(follower => (
          <li key={follower.id} className="follow-container">
            <img className="avatar" src={follower.avatar_url} alt="Usuário" />
            <p>#{follower.login}</p>
            <Link to={`/profile/${follower.login}`}>
              <img src={ArrowRight} alt="" />
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}
