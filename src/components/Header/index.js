import { Link } from "react-router-dom";

import "./style.css";
import ArrowLeft from "../../assets/arrow-left.svg";

export function Header() {
  return (
    <div className="repositories-container">
      <Link to="/dashboard">
        <img src={ArrowLeft} alt="" />
      </Link>
      <p>4 repositórios</p>
      <div />
    </div>
  );
}
