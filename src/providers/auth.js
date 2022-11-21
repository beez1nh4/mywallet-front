import React, { useState } from "react";
import { createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [userLogged, setUserLogged] = useState("Fulano")
  const [token, setToken] = useState("")
  const [transactions, setTransactions] = useState([])
  return (
    <AuthContext.Provider value={
      { userLogged,
        setUserLogged,
        token,
        setToken,
        transactions,
        setTransactions,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);