import React, { createContext, useContext, useState, useEffect } from "react";

type AuthContextType = {
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  loggedIn: boolean;
  setLogIn: (b: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<any>(null);
  const [loggedIn, setLoggedIn] = useState<boolean>(() => {
    // Initialize from localStorage
    return localStorage.getItem("loggedIn") === "true";
  });

  const setLogIn = (b: boolean) => {
    setLoggedIn(b);
    localStorage.setItem("loggedIn", b.toString());
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loggedIn, setLogIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
