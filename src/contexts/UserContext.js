import React, { createContext, useState, useContext, useCallback} from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  
  const login = useCallback(
    async function(username) {
      try {
        const res = await fetch(`https://api.github.com/users/${username}?access_token=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`);

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
 
  return (
    <UserContext.Provider
      value={{ login, data, error}}
    >
      {children}
    </UserContext.Provider>
  );
}

export const DataContext = () => {
  return useContext(UserContext);
};
