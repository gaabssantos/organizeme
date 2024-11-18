type List = {
  id: string;
  board_id: string;
  name: string;
};

export class ListEntity {
  public id: string;
  public board_id: string;
  public name: string;

  constructor({ board_id, id, name }: List) {
    this.id = id;
    this.board_id = board_id;
    this.name = name;
  }
}
