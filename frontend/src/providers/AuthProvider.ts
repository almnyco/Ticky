'use client'

import { redirect } from 'next/navigation';
import { User } from '../contexts/AuthContext';
import useAuthContext from '../hooks/useAuthContext'
import { CreateUserSchema, SignInSchema } from "@/src/lib/user/schema";
import { toast } from 'sonner';

function AuthProvider() {
  const { setUser } = useAuthContext();

  function handleError(error: string) {
    toast.error(error)
    return { error }
  }

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

    if (data?.error) return handleError(data?.error)

    redirect("/home");
  };

  const signup = async (formData) => {
    const result = CreateUserSchema.safeParse(formData);

    if (!result.success) return { errors: result.error.flatten().fieldErrors }

    const data = await fetch('http://localhost:9000/api/signup', {
      body: JSON.stringify(formData),
      method: 'post',
      headers: {
        "Content-Type": 'application/json',
      },
      credentials: 'include'
    }).then((res) => res.json());
    console.log(data)

    if (data?.error) return handleError(data?.error)

    redirect("/signin");
  }

  const signout = async () => {

    const data = await fetch('http://localhost:9000/api/signout', {
      method: 'post',
      credentials: 'include'
    }).then((res) => res.json());

    if (data?.error) return handleError(data?.error)

    setUser({} as User);
    redirect("/signin");
  }

  return { signin, signup, signout }
}

export default AuthProvider