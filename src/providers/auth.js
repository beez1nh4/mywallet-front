import React, { useState } from "react";
import { createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [userLogged, setUserLogged] = useState("Fulano")
  const [token, setToken] = useState("")
  const [transactions, setTransactions] = useState([])
  const [balance, setBalance] = useState(0)
  const [isPositive, setIsPositive] = useState(true)
  return (
    <AuthContext.Provider value={
      { userLogged,
        setUserLogged,
        token,
        setToken,
        transactions,
        setTransactions,
        balance,
        setBalance,
        isPositive,
        setIsPositive
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);