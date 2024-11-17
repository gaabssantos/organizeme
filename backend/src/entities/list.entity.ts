type Card = {
  name: string;
  description: string;
};

type List = {
  id: string;
  board_id: string;
  name: string;
  cards?: Card[];
};

export class ListEntity {
  public id: string;
  public board_id: string;
  public name: string;
  public cards?: Card[];

  constructor({ board_id, id, name, cards }: List) {
    this.id = id;
    this.board_id = board_id;
    this.name = name;
    this.cards = cards;
  }
}
