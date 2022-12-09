import React, { createContext, useState, useContext, useCallback, useEffect, ReactNode} from "react";
import { useHistory } from "react-router-dom";

import { api } from "../services/api";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  
  const login = useCallback(
    async function(username: string) {
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
      
      if(username) await login(username);
    }
    
    userLoggedSection();
  }, [login])
  
  return (
    <UserContext.Provider
      value={{ login, data, error, setError}}
    >
      {children}
    </UserContext.Provider>
  );
}


