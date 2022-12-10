import React, { createContext, useState, useCallback, useEffect, ReactNode } from "react";
import { useHistory } from "react-router-dom";

import { DataTypes } from "../interfaces/DataTypes";

import { api } from "../services/api";

interface UserContextProprs {
  data: DataTypes;
  login: (username: string) => void;
  error: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextProprs);

export function UserContextProvider({ children }: UserContextProviderProps) {
  const [data, setData] = useState<DataTypes>({
    avatar_url: "",
    bio: "",
    email: "",
    followers: 0,
    following: 0,
    location: "",
    login: "",
    name: "",
    public_repos: 0
  });
  const [error, setError] = useState(false);

  const login = useCallback(
    async function (username: string) {
      try {

        console.log({ username });
        const response = await api.get(`${username}`);
        const data: DataTypes = await response.data;

        localStorage.setItem('@username', data.login);
        setData(data);

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


