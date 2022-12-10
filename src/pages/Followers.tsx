import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { api } from "../services/api";

import '../styles/pages/Followers.css'
import ArrowRight from '../assets/arrow-right_2.svg';

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { UserContext } from "../contexts/UserContext";
import { FollowTypes } from "../interfaces/FollowersTypes";

export function Followers() {
  const { data } = useContext(UserContext);
  const { login } = data!;
  const [followersList, setFollowersList] = useState<FollowTypes[]>([]);
  const [user, setUser] = useState(localStorage.getItem('@username'))

  async function getFollowers() {
    const response = await api.get(`${user}/followers`);
    const data: FollowTypes[] = response.data;
    setFollowersList(data);
  }

  useEffect(() => {
    getFollowers();
  }, [login]);

  return (
    <>
      <Header type={`${followersList.length} Seguidores`} />
      <ul>
        {followersList.map((follower: FollowTypes) => (
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
