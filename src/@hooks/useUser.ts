import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export function useUser() {
  const { data, login, logout, error, setError} = useContext(UserContext);
  return { data, login, logout, error, setError };
}