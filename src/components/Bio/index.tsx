import React, { useContext } from 'react';
import './style.css';

import { UserContext } from "../../contexts/UserContext";

export function Bio() {
  const { data }: any = useContext(UserContext); 

  const { name, avatar_url, email, location, followers, following, public_repos, bio } = data;

  return (
    <main className="bio-container">
      <div className="user-info">
        <img src={avatar_url} alt="avatar" />
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{location}</p>
      </div>
      <div className="statics">
        <div className="data">
          <h2>{followers}</h2>
          <p>Seguidores</p>
        </div>
        <div className="data">
          <h2>{following}</h2>
          <p>Seguindo</p>
        </div>
        <div className="data">
          <h2>{public_repos}</h2>
          <p>Repos</p>
        </div>
      </div>
      <div className="bio">
        <h2>Bio</h2>
        {bio === "" ? (
          <p></p>
        ) : (
          <p>{bio}</p>
        )}
      </div>
    </main>
  );
}