import { createContext, useState, ReactNode } from "react";


const AuthContext = createContext(null);

export function AuthContextProvider({ children, ReactNode }) {
  // const Test=({})=>
  const [isAuth, setAuth] = useState(false);

  function login() {
    setAuth(true);
  }

  function logout() {
    setAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
