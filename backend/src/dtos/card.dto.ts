import z from 'zod';

export type CardDTO = {
  name: string;
  list_id: string;
};

export const cardSchema = {
  name: z
    .string()
    .trim()
    .min(5, { message: 'The name must have 5 or more characters.' }),
  list_id: z.string(),
};
