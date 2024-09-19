import { Link } from "react-router-dom";
import { useHeaderController } from "./useHeaderController";
import "./style.scss";
import { getHeaderType } from "./utils/get-header-type";
import ArrowLeft from "../../assets/arrow-left.svg";

export function Header() {
  const { type, typeValues } = useHeaderController();

  return (
    <div className="header-container">
      <Link to="/home">
        <img src={ArrowLeft} alt="Ícone para voltar para a tela inicial" />
      </Link>
      <p>{getHeaderType({ type, typeValues })}</p>
      <div />
    </div>
  );
}
