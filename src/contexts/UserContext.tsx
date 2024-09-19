import { createContext, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import { queryClient } from "../services/query-client";
import { User, UserContextProviderTypes, UserContextType } from "./types";

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProviderTypes) {
  const [error, setError] = useState(false);

  const alternativeLogin = async () => {
    const username = getUsername();
    const response = await api.get(`${username}`);
    return response.data;
  }

  const { data, refetch, isFetching } = useSuspenseQuery<User>({
    queryKey: ["user"],
    queryFn: alternativeLogin,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60 * 24,
  })

  function login() {
    refetch();
  }

  function logout() {
    localStorage.removeItem('@username');
    queryClient.removeQueries({ 'queryKey': ['user', 'repos'] })
    localStorage.removeItem('REACT_QUERY_OFFLINE_CACHE');
  }

  function getUsername() {
    return localStorage.getItem('@username');
  }

  function setUsername(username: string) {
    return localStorage.setItem('@username', username);
  }

  return (
    <UserContext.Provider
      value={{ error, setError, logout, getUsername, setUsername, data, login, isFetching }}
    >
      {children}
    </UserContext.Provider>
  );
}


