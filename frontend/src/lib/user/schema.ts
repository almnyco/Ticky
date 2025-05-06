import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().trim().email({ message: 'Email is required' }),
  password: z.string().trim().min(6),
})

export const CreateUserBase = z.object({
  email: z.string().trim().email({ message: 'Email is required' }),
  name: z.string().trim().nonempty({ message: 'Name is required' }),
  lastname: z.string().trim().nonempty({ message: 'Lastname is required' }),
  password: z.string().trim().min(6, { message: "Password must be at least 6 characters long" }),
  password_repeat: z.string().trim().min(6, { message: "Password must be at least 6 characters long" }),
})

export const CreateUserSchema = CreateUserBase.refine(data => {

  // Verify if password and password repeat as same
  return data.password === data.password_repeat;
}, {
  message: 'Passwords do not match',
  path: ['password_repeat'] // Incorrect password field
}).transform(({ email, name, lastname, password }) => ({ email, name, lastname, password, }))

export const PublicUserSchema = z.object({
  email: z.string().trim().email({ message: 'Email is required' }),
  password: z.string().trim().min(6, { message: "Password must be at least 6 characters long" }),
})
