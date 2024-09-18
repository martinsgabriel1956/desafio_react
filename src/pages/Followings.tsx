import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { api } from "../services/api";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import '../styles/pages/Followings.css';
import ArrowRight from "../assets/arrow-right_2.svg";

import { useUser } from "../@hooks/useUser";

type Following = {
  id: number;
  login: string;
  avatar_url: string;
}

export function Followings() {
  const { data } = useUser();
  const { login } = data;
  const [followingList, setFollowingList] = useState<Following[]>([]);

  useEffect(() => {
    async function getFollowing() {
      const res = await api.get(`${login}/following`);
      setFollowingList(res.data);
    }
    getFollowing();
  }, [login]);

  return (
    <>
      <Header type={`${followingList.length} Seguindo`} />
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
