import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useUser } from "../@hooks/useUser";

import "../../src/pages/Home/style.scss";

import Save from "../assets/log-in.svg";
import ArrowLeft from "../assets/arrow-left.svg";

type User = {
  name: string;
  email: string;
  location: string;
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  bio: string;
}

export function UserProfile() {
  const [data, setData] = useState({} as User);
  const { login } = useUser();

  const params = useParams();
  const { username } = params;

  useEffect(() => {
    async function fetchData(username: string) {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData(username!);
  }, [username]);

  function handleClick() {
    login();
  }

  return (
    <>
      <header className="navbar">
        <Link to="/dashboard">
          <img src={ArrowLeft} alt="" />
        </Link>
        <button onChange={handleClick} className="logout">
          <p>Salvar</p>
          <img src={Save} alt="Sair" />
        </button>
      </header>
      {data && (
        <main className="bio-container">
          <div className="user-info">
            <img src={data.avatar_url} alt="avatar" />
            <h2>{data.name}</h2>
            <p>{data.email}</p>
            <p>{data.location}</p>
          </div>
          <div className="statics">
            <div className="data">
              <h2>{data.followers}</h2>
              <p>Seguidores</p>
            </div>
            <div className="data">
              <h2>{data.following}</h2>
              <p>Seguindo</p>
            </div>
            <div className="data">
              <h2>{data.public_repos}</h2>
              <p>Repos</p>
            </div>
          </div>
          <div className="bio">
            <h2>Bio</h2>
            {data.bio === "" ? <p></p> : <p>{data.bio}</p>}
          </div>
        </main>
      )}
    </>
  );
}
