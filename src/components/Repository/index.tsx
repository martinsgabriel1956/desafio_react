import { useEffect, useState } from "react"

import "./styles.css";

import Star from "../../assets/star.svg";
import Private from "../../assets/lock.svg";
import Public from "../../assets/unlock.svg";

import { api } from "../../services/api";
import { useUser } from "../../@hooks/useUser";

type Repo = {
  id: string;
  name: string;
  description: string;
  stargazers_count: number;
}

export function Repository() {
  const { data } = useUser();
  const { login } = data;
  const [repos, setRepos] = useState<Repo[]>([]);
  const [user] = useState(localStorage.getItem("@username"));

  useEffect(() => {
    async function getRepos() {
      const res = await api.get<Repo[]>(`${user}/repos`);
      setRepos(res.data);
    }
    getRepos();
  }, [login]);

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
