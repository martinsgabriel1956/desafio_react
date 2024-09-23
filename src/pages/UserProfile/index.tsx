import { Link } from "react-router-dom";

import "../../../src/pages/Home/style.scss";

import Save from "../../assets/log-in.svg";
import ArrowLeft from "../../assets/arrow-left.svg";
import { useUserProfile } from "./useUserProfile";

export function UserProfile() {
  const { data, handleClick } = useUserProfile();

  return (
    <>
      <header className="navbar">
        <Link to="/dashboard">
          <img src={ArrowLeft} alt="" />
        </Link>
        <button onClick={handleClick} className="logout">
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
