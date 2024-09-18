import { useNavigate } from "react-router-dom";
import { useUser } from "../../@hooks/useUser";

export function useHomeController() {
  const { data, logout } = useUser();
  const navigate = useNavigate();
  const { login } = data;

  function handleLogout() {
    logout();
    navigate("/");
  }

  return {
    login,
    handleLogout
  }
}