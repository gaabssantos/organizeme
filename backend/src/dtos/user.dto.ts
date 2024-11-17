import z from 'zod';

export type UserDTO = {
  name: string;
  email: string;
  password: string;
  active: boolean;
  verificationCode: string;
};

export const userSchema = {
  name: z
    .string()
    .trim()
    .min(3, { message: 'The name must have 3 characters.' }),
  email: z.string().email({ message: 'The email is incorrect.' }),
  password: z
    .string()
    .trim()
    .min(8, { message: 'The password must have 8 characters.' }),
};
