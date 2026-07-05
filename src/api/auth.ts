import type { LoginPayload, LoginResponse } from "@/types/auth";

const MOCK_USER: LoginResponse = {
  token: "mock-jwt-token",

  user: {
    id: "1",
    name: "School Administrator",
    email: "admin@schoolpay.com",
    role: "ADMIN",
  },
};

export const authApi = {
  login: async (payload: LoginPayload): Promise<LoginResponse> => {
    await new Promise((resolve) => setTimeout(resolve, 800));

    if (
      payload.email !== "admin@schoolpay.com" ||
      payload.password !== "password123"
    ) {
      throw new Error("Invalid email or password");
    }

    return MOCK_USER;
  },
};
