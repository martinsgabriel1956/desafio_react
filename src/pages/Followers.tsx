import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { api } from "../services/api";

import '../styles/pages/Followers.css'
import ArrowRight from '../assets/arrow-right_2.svg';

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import { UserContext } from "../contexts/UserContext";

type Follower = {
  id: number;
  login: string;
  avatar_url: string;
}

export function Followers() {
  const { data } = useContext(UserContext);
  const { login } = data;
  const [followersList, setFollowersList] = useState<Follower[]>([]);
  const [user] = useState(localStorage.getItem('@username'))

  useEffect(() => {
    async function getFollowers() {
      const res = await api.get(`${user}/followers`);
      setFollowersList(res.data);
    }
    getFollowers();
  }, [login]);

  return (
    <>
      <Header type={`${followersList.length} Seguidores`} />
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
