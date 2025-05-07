import { z } from 'zod';

export const SignInSchema = z.object({
  email: z.string().trim().email({ message: 'Email is required' }),
  password: z.string().trim().min(6, { message: 'Password must be at least 6 characters long' }),
})

export const CreateUserBase = z.object({
  email: z.string().trim().email({ message: 'Email is required' }),
  firstName: z.string().trim().nonempty({ message: 'Name is required' }),
  lastName: z.string().trim().nonempty({ message: 'LastName is required' }),
  password: z.string().trim().min(6, { message: "Password must be at least 6 characters long" }),
  password_repeat: z.string().trim().min(6, { message: "Password must be at least 6 characters long" }),
})

export const CreateUserSchema = CreateUserBase.refine(data => {

  // Verify if password and password repeat as same
  return data.password === data.password_repeat;
}, {
  message: 'Passwords do not match',
  path: ['password_repeat'] // Incorrect password field
}).transform(({ email, firstName, lastName, password }) => ({ email, firstName, lastName, password, }))

export const PublicUserSchema = z.object({
  email: z.string().trim().email({ message: 'Email is required' }),
  password: z.string().trim().min(6, { message: "Password must be at least 6 characters long" }),
})
