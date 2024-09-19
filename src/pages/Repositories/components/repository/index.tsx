import "./style.scss";
import Star from "../../../../assets/star.svg";
import Private from "../../../../assets/lock.svg";
import Public from "../../../../assets/unlock.svg";
import { Repo } from "./types";

interface RepositoryProps {
  repository: Repo;
}

export function Repository({ repository }: RepositoryProps) {
  return (
    <li key={repository.id}>
      <h3>{repository.name}</h3>
      <p>{repository.description}</p>
      <div className="repository-info">
        <div className="stars">
          <img src={Star} alt="Icone de estrela para indicar quantos estrelas o repositório tem" />
          <p>{repository.stargazers_count}</p>
        </div>
        <div className="repository-status">
          {repository.private === false ? (
            <img src={Public} alt="" />
          ) : (
            <img src={Private} alt="" />
          )}
        </div>
      </div>
    </li>
  );
}
