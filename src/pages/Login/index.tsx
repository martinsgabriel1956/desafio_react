import { useLoginController } from "./useLoginController";
import "./style.scss";
import Logo from "../../assets/logo.svg";
import ArrowRight from "../../assets/arrow-right.svg";

export function Login() {
  const { handleSubmit, username, setUsername, error } = useLoginController();

  return (
    <div className="container">
      <img className="logo" src={Logo} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {error && <p className="required-field">Campo obrigatório</p>}
        </div>
        <button type="submit" className="btn-login">
          Entrar
          <img src={ArrowRight} alt="Logo" />
        </button>
      </form>
    </div>
  );
}
