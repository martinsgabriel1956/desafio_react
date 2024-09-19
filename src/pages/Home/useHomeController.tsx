import { useNavigate } from "react-router-dom";
import { useUser } from "../../@hooks/useUser";

export function useHomeController() {
  const { logout, data, isFetching } = useUser();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  return {
    handleLogout,
    data,
    isFetching
  }
}