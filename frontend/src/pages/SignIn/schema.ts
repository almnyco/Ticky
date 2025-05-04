import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().email({ message: 'Email is required' }),
  password: z.string().min(4),
})
