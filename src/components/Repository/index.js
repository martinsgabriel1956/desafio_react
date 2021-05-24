import React, { useContext, useEffect, useState} from "react"

import "./styles.css";
import { UserContext } from "../../contexts/UserContext";

import Star from "../../assets/star.svg";
import Private from "../../assets/lock.svg";
import Public from "../../assets/unlock.svg";

export function Repository() {
  const { data } = useContext(UserContext);
  const { repos_url } = data;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(repos_url);
      const json = await response.json();
      setRepos(json);
    }
    fetchData();
  }, [repos_url]);
  
  return (
    <ul className="repository-container">
      {repos.map((repo) => (
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
