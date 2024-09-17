import { Link } from "react-router-dom";

import "./style.css";
import ArrowLeft from "../../assets/arrow-left.svg";

export function Header(props: { type: string }) {
  return (
    <div className="header-container">
      <Link to="/dashboard">
        <img src={ArrowLeft} alt="" />
      </Link>
      <p>{props.type}</p>
      <div />
    </div>
  );
}
