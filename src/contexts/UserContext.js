import React, { createContext, useState, useContext, useCallback, useEffect} from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  
  const login = useCallback(
    async function(username) {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);

        const dataUser = await res.json();

        localStorage.setItem('@username', dataUser.login);
        setData(dataUser);
        console.log(res);

      } catch (err) {
        setError(false);
      }
    },
    []
  )

  useEffect(() => {
    async function userLoggedSection() {
      const username = localStorage.getItem('@username');

      if(username) {
        await login(username);
      }
    }

    userLoggedSection();
  }, [ login])
 
  return (
    <UserContext.Provider
      value={{ login, data, error, setError}}
    >
      {children}
    </UserContext.Provider>
  );
}

export const DataContext = () => {
  return useContext(UserContext);
};
