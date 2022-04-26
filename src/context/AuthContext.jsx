import React, { createContext } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const isLoggedIn = (whoid) => {
    if (localStorage.getItem(whoid) !== null) {
      return localStorage.getItem(whoid);
    } else {
      return false;
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};
