'use client'

import { redirect } from 'next/navigation';
import { User } from '../contexts/AuthContext';
import useAuthContext from '../hooks/useAuthContext'
import { SignInSchema } from "@/src/lib/user/schema";

function AuthProvider() {
  const { setUser } = useAuthContext();

  async function signin(email: string, password: string) {
    const result = SignInSchema.safeParse({
      email,
      password,
    });

    if (!result.success) return { errors: result.error.flatten().fieldErrors }

    const data = await fetch('http://localhost:9000/api/signin', {
      body: JSON.stringify({ email, password }),
      method: 'post',
      headers: {
        "Content-Type": 'application/json',
      },
      credentials: 'include'
    }).then((res) => res.json());

    if (data?.error) return { error: data?.error }

    redirect("/home");
  };

  const signup = () => {

  }

  const signout = () => {
    setUser({} as User)
  }

  return { signin, signup, signout }
}

export default AuthProvider