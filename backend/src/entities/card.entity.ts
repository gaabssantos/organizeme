export type Card = {
  id: string;
  name: string;
  list_id: string;
};

export class CardEntity {
  public id: string;
  public name: string;
  public list_id: string;

  constructor({ id, name, list_id }: Card) {
    this.id = id;
    this.name = name;
    this.list_id = list_id;
  }
}
