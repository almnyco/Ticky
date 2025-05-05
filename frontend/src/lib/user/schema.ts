import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(4),
})

export const PublicUserSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(4, { message: "Password must be at least 4 characters long" }),
})
