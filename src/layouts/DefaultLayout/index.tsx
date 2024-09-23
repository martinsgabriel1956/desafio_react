import { Outlet, useNavigate } from "react-router-dom";
import './style.scss';
import { useUser } from "../../@hooks/useUser";
import { Footer } from "../../components/Footer";

export function DefaultLayout() {
  const navigate = useNavigate();
  const { getUsername } = useUser();
  const username = getUsername();

  if (!username) {
    navigate("/");
  }

  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}