type Board = {
  id: string;
  id_user: string;
  name: string;
  color: string;
};

export class BoardEntity {
  public id: string;
  public id_user: string;
  public name: string;
  public color: string;

  constructor({ id, id_user, name, color }: Board) {
    this.id = id;
    this.id_user = id_user;
    this.name = name;
    this.color = color;
  }
}
