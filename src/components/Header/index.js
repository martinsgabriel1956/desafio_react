import { Link } from "react-router-dom";

import "./style.css";
import ArrowLeft from "../../assets/arrow-left.svg";

export function Header(props) {
  return (
    <div className="repositories-container">
      <Link to="/dashboard">
        <img src={ArrowLeft} alt="" />
      </Link>
      <p>{props.type}</p>
      <div />
    </div>
  );
}
