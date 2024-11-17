import { BoardEntity } from '../../entities/board.entity';
import Board from '../models/boards.model';

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

  index = async (id: string) => {
    const boards = Board.findAll({ where: { id_user: id } });

    return boards;
  };
}
