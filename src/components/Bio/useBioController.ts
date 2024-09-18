import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export function useBioController() {
  const { data } = useContext(UserContext);

  return {
    data
  }
}