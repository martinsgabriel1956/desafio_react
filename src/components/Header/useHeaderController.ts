import { useLocation } from "react-router-dom";
import { useUser } from "../../@hooks/useUser";

export function useHeaderController() {
  const { pathname } = useLocation();
  const { data } = useUser();

  const typeValues = {
    public_repos: data.public_repos,
    followers: data.followers,
    following: data.following
  };

  return {
    type: pathname,
    typeValues
  }
}