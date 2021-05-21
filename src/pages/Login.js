import Logo from '../assets/logo.svg';
import ArrowRight from '../assets/arrow-right.svg';
import { Link } from 'react-router-dom';

import '../styles/pages/Login.css';

export function Login() {
  return (
    <div className="container">
     <img className="logo" src={Logo} alt="Logo" />
     <input type="text" placeholder="Usuário" required />
     <Link to="/dashboard" className="btn-login">
        Entrar
        <img src={ArrowRight} alt="Logo" />
     </Link>
    </div>
  );
}