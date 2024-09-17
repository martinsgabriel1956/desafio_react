import { createContext, useState, useCallback, useEffect } from "react";

import { api } from "../services/api";
import { User, UserContextProviderTypes, UserContextType } from "./types";

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProviderTypes) {

  const [data, setData] = useState({} as User);
  const [error, setError] = useState(false);

  const login = useCallback(
    async function (username: string) {
      try {
        const res = await api.get(`${username}`);

        localStorage.setItem('@username', res.data.login);

        setData(res.data);
      } catch (err) {
        setError(true);
      }
    },
    []
  )
  useEffect(() => {
    async function userLoggedSection() {
      const username = localStorage.getItem('@username');

      if (username) await login(username);
    }

    userLoggedSection();
  }, [login])

  return (
    <UserContext.Provider
      value={{ login, data, error, setError }}
    >
      {children}
    </UserContext.Provider>
  );
}


