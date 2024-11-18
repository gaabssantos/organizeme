import z from 'zod';

export type ListDTO = {
  board_id: string;
  name: string;
};

export const listSchema = {
  name: z
    .string()
    .trim()
    .min(3, { message: 'The name must have 3 or more characters.' }),
  board_id: z.string(),
};
