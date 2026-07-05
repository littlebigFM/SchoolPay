export interface LoginPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;

  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;

  isAuthenticated: boolean;
}
