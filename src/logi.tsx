import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext<{
  loggedIn: boolean;
  setLogIn: (b: boolean) => void;
}>(null!); // Avoids TypeScript errors, but ensure `AuthProvider` wraps your app.

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loggedIn, setLoggedIn] = useState<boolean>(() => {
    // Initialize state from localStorage
    return localStorage.getItem("loggedIn") === "true";
  });

  const setLogIn = (b: boolean) => {
    setLoggedIn(b);
    localStorage.setItem("loggedIn", b.toString());
  };

  return (
    <AuthContext.Provider value={{ loggedIn, setLogIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
