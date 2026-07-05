import {
  createContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { authApi } from "@/api/auth";

import type { AuthContextType, LoginPayload, User } from "@/types/auth";

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

const STORAGE_KEY = "schoolpay-auth";

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const [token, setToken] = useState<string | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      const parsed = JSON.parse(stored);

      setUser(parsed.user);

      setToken(parsed.token);
    }

    setLoading(false);
  }, []);

  const login = async (payload: LoginPayload) => {
    const response = await authApi.login(payload);

    setUser(response.user);

    setToken(response.token);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(response));
  };

  const logout = () => {
    setUser(null);

    setToken(null);

    localStorage.removeItem(STORAGE_KEY);
  };

  const value = useMemo<AuthContextType>(
    () => ({
      user,

      token,

      loading,

      login,

      logout,

      isAuthenticated: !!token,
    }),
    [user, token, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
