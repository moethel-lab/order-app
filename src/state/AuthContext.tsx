import React, { createContext, useContext, useMemo, useState } from "react";

export type AuthRole = "user" | "admin" | null;

interface AuthState {
  role: AuthRole;
  name: string;
}

interface AuthContextValue extends AuthState {
  loginUser: (name: string) => void;
  loginAdmin: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<AuthRole>(null);
  const [name, setName] = useState("");

  const loginUser = (userName: string) => {
    setRole("user");
    setName(userName);
  };

  const loginAdmin = (username: string) => {
    setRole("admin");
    setName(username);
  };

  const logout = () => {
    setRole(null);
    setName("");
  };

  const value = useMemo(
    () => ({
      role,
      name,
      loginUser,
      loginAdmin,
      logout,
    }),
    [role, name]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
