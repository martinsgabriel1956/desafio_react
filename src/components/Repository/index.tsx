import React, { useContext, useEffect, useState} from "react"

import "./styles.css";
import { UserContext } from "../../contexts/UserContext";

import Star from "../../assets/star.svg";
import Private from "../../assets/lock.svg";
import Public from "../../assets/unlock.svg";

import { api } from "../../services/api";
import { RepoTypes } from "../../interfaces/RepoTypes";

export function Repository() {
  const { data } = useContext(UserContext);
  const { login } = data!;
  const [repos, setRepos] = useState<RepoTypes[]>([]);
  const [user, setUser] = useState(localStorage.getItem("@username"));

  useEffect(() => {
    (async function getRepos() {
      const response = await api.get(`${user}/repos`);
      const data: RepoTypes[] = response.data;

      setRepos(data);
    })();
  }, [login]);
  
  return (
    <ul className="repository-container">
      {repos.map((repo: any) => (
        <li key={repo.id}>
          <h3>{repo.name}</h3>
          <p>{repo.description}</p>
          <div className="repository-info">
            <div className="stars">
              <img src={Star} alt="estrelas" />
              <p>{repo.stargazers_count}</p>
            </div>
            <div className="repository-status">
              <img src={Public} alt="" />
              <img src={Private} alt="" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
