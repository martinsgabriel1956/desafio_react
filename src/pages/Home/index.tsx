import { Suspense } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import "./style.scss";
import { useHomeController } from './useHomeController';
import { Bio } from "../../components/Bio";
import { Loading } from "../../components/Loading";
import Logout from '../../assets/log-out.svg';

export function Home() {
  const { handleLogout, data } = useHomeController();

  return (
    <QueryErrorResetBoundary>
      <Suspense fallback={<Loading />}>
        <header className="navbar">
          <nav className="nickname">
            <p>#{data?.login}</p>
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
      </Suspense>
    </QueryErrorResetBoundary>
  );
}
