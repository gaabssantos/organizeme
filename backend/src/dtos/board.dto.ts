import z from 'zod';

export type BoardDTO = {
  id_user: string;
  name: string;
  color: string;
};

export const boardSchema = {
  name: z
    .string()
    .trim()
    .min(5, { message: 'The name must have 5 characters.' }),
  color: z
    .string()
    .refine(
      (value) => /^#(([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})$/.test(value ?? ''),
      'The color should be a hex color.',
    ),
};
