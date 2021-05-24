import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import '../styles/pages/Followings.css'

import ArrowRight from "../assets/arrow-right_2.svg";

import { UserContext } from "../contexts/UserContext";

export function Followings() {
  const { data } = useContext(UserContext);
  const { login } = data;
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://api.github.com/users/${login}/following`);
      const json = await response.json();
      setFollowingList(json);
    }
    fetchData();
  }, [login]);

  return (
    <>
      <Header type="466 Seguindo" />
      <ul >
        {followingList.map(following => (
          <li key={following.id} className="follow-container">
            <img className="avatar" src={following.avatar_url} alt="Usuário" />
            <p>#{following.login}</p>
            <Link to={`/profile/${following.login}`}>
              <img src={ArrowRight} alt="" />
            </Link>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}
