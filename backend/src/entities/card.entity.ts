export type Card = {
  id: string;
  name: string;
  description: string;
  list_id: string;
};

export class CardEntity {
  public id: string;
  public name: string;
  public description: string;
  public list_id: string;

  constructor({ id, name, description, list_id }: Card) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.list_id = list_id;
  }
}
