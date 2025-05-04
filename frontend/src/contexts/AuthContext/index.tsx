"use client";

import React, { createContext, useMemo, useState } from "react";

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  photo: string;
  role: string;
};

type AuthContextProps = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as User);

  const contextValue = useMemo<AuthContextProps>(
    () => ({ user, setUser }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user?.id]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthContextProvider;
