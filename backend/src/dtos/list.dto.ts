type Card = {
  name: string;
  description: string;
};

export type ListDTO = {
  board_id: string;
  name: string;
  cards?: Card[];
};
