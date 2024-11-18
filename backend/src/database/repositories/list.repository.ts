import { ListEntity } from '../../entities/list.entity';
import Board from '../models/board.model';
import List from '../models/list.model';

export class ListRepository {
  create = async ({ id, board_id, name }: ListEntity): Promise<ListEntity> => {
    const listCreated = { id, board_id, name };

    await List.create(listCreated);

    return listCreated;
  };

  findBoardById = async (id: string) => {
    const board = await Board.findByPk(id);

    return board;
  };
}
