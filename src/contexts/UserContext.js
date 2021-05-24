import React, { createContext, useState, useContext} from "react";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);

  return (
    <UserContext.Provider
      value={{ username, setUsername, userData, setUserData }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const DataContext = () => {
  return useContext(UserContext);
};
