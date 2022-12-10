import { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Footer, ProfileInfo } from "../components";
import { UserContext } from "../contexts/UserContext";
import { DataTypes } from "../interfaces/DataTypes";
import Save from "../assets/log-in.svg";
import ArrowLeft from "../assets/arrow-left.svg";

import "../styles/pages/Home.css";

export function UserProfile() {
  const [data, setData] = useState<DataTypes>({
    avatar_url: "",
    bio: "",
    email: "",
    followers: 0,
    following: 0,
    location: "",
    login: "",
    name: "",
    public_repos: 0
  });

  const { login } = useContext(UserContext);
  const params = useParams();
  const history = useHistory();

  const { username }: any = params;

  async function fetchData(username: string) {
    const response = await axios(`https://api.github.com/users/${username}`);
    const data = response.data;

    setData(data);
  }
  
  useEffect(() => {
    fetchData(username);
  }, [username]);

  function handleClick() {
    login(username);
    history.push("/dashboard");
  }

  return (
    <>
      <header className="navbar">
        <Link to="/dashboard">
          <img src={ArrowLeft} alt="" />
        </Link>
        <nav className="nickname">
          <p>#{username}</p>
        </nav>
        <button onClick={handleClick} className="logout">
          <p>Salvar</p>
          <img src={Save} alt="Sair" />
        </button>
      </header>
      <ProfileInfo data={data} />
      <Footer />
    </>
  );
}
