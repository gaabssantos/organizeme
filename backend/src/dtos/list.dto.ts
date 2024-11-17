import z from 'zod';

type Card = {
  name: string;
  description: string;
};

export type ListDTO = {
  board_id: string;
  name: string;
  cards?: Card[];
};

export const listSchema = {
  name: z
    .string()
    .trim()
    .min(3, { message: 'The name must have 3 or more characters.' }),
  board_id: z.string(),
};
