import { BoardEntity } from '../../entities/board.entity';
import Board from '../models/board.model';
import Card from '../models/card.model';
import List from '../models/list.model';

export class BoardRepository {
  create = async ({
    id,
    id_user,
    name,
    color,
  }: BoardEntity): Promise<BoardEntity> => {
    const boardCreated = { id, id_user, name, color };

    await Board.create(boardCreated);

    return boardCreated;
  };

  delete = async (id: string) => {
    const list = await List.findOne({ where: { board_id: id } });
    await Card.destroy({
      where: { list_id: list?.getDataValue('id') },
    });
    await List.destroy({
      where: { board_id: id },
    });
    const boardDeleted = await Board.destroy({
      where: { id },
    });

    return boardDeleted;
  };

  index = async (id: string) => {
    const boards = Board.findAll({ where: { id_user: id } });

    return boards;
  };

  indexById = async (id: string) => {
    const boards = Board.findByPk(id);

    return boards;
  };
}
