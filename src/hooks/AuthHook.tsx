/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable camelcase */

import { useRouter } from "next/router";
import { setCookie } from "nookies";
import { createContext, useContext, useState } from "react";
import api from "../api/api";
import { User } from "../interfaces/User";

interface IAuthProvider {
  children: React.ReactNode;
}

interface SignInData {
  email: string;
  password: string;
}

interface SignInResponse {
  user: User;
  access_token: string;
}

type AuthContext = {
  isAuthenticate: boolean;
  signIn: ({ email, password }: SignInData) => Promise<void>;
  user: User | null;
};

export const AuthContext = createContext({} as AuthContext);

export function AuthProvider({ children }: IAuthProvider) {
  const router = useRouter();
  const [user, setUser] = useState<User>({} as User);

  const isAuthenticate = !!user;

  async function signIn({ email, password }: SignInData) {
    const { data } = await api.post("/login", {
      email,
      password,
    });

    // console.log(data);

    const { user, access_token: token } = data as SignInResponse;

    setCookie(undefined, "phisicaldash.token", token, {
      maxAge: 60 * 60 * 60, // 1 hour
    });
    setCookie(undefined, "phisicaldash.user", JSON.stringify(user), {
      maxAge: 60 * 60 * 60, // 1 hour
    });
    // console.log(document.cookie);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(user);

    router.push("/dashboard");
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticate, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("Not exist AuthProvider!");
  }
  return context;
}
