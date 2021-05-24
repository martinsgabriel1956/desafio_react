import React, { useContext } from 'react';
import './style.css';

import { UserContext } from "../../contexts/UserContext";

export function Bio() {
  const { userData } = useContext(UserContext); 

  return (
    <main className="bio-container">
      <div className="user-info">
        <img src={userData.avatar_url} alt="avatar" />
        <h2>{userData.name}</h2>
        <p>{userData.email}</p>
        <p>{userData.location}</p>
      </div>
      <div className="statics">
        <div className="data">
          <h2>{userData.followers.number}</h2>
          <p>Seguidores</p>
        </div>
        <div className="data">
          <h2>{userData.followings.number}</h2>
          <p>Seguidores</p>
        </div>
        <div className="data">
          <h2>{userData.repos.number}</h2>
          <p>Repos</p>
        </div>
      </div>
      <div className="bio">
        <h2>Bio</h2>
        {userData.bio === "" ? (
          <p></p>
        ) : (
          <p>{userData.bio}</p>
        )}
      </div>
    </main>
  );
}