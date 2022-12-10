import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import "../styles/pages/Home.css";

import { Footer, ProfileInfo } from '../components';
import Logout from '../assets/log-out.svg';

import { UserContext } from "../contexts/UserContext";

export function Home() {
  const { data } = useContext(UserContext);
  const history = useHistory();

  const { login } = data;

  const logout = async () => {
    localStorage.removeItem('@username');
    history.push("/");
  }

  return (
    <>
      <header className="navbar">
        <nav className="nickname">
          <p>#{login}</p>
        </nav>
        <Link to="/" className="logout" onClick={logout}>
          <p>Sair</p>
          <img src={Logout} alt="Sair" />
        </Link>
      </header>
      <ProfileInfo data={data} />
      <Footer />
    </>
  );
}
