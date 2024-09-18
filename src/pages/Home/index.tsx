import "./style.scss";
import { useHomeController } from './useHomeController';
import { Bio } from "../../components/Bio";
import Logout from '../../assets/log-out.svg';

export function Home() {
  const { handleLogout, login } = useHomeController();

  return (
    <>
      <header className="navbar">
        <nav className="nickname">
          <p>#{login}</p>
        </nav>
        <button
          onClick={handleLogout}
          className="logout"
          type="button"
        >
          <p>Sair</p>
          <img src={Logout} alt="Sair" />
        </button>
      </header>
      <Bio />
    </>
  );
}
