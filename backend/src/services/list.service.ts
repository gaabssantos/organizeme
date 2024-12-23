import { v4 } from 'uuid';

import { ListRepository } from '../database/repositories/list.repository';
import { ListDTO } from '../dtos/list.dto';

export class ListService {
  constructor(private listRespository: ListRepository) {}

  create = async ({ board_id, name }: ListDTO) => {
    const listCreated = await this.listRespository.create({
      id: v4(),
      board_id,
      name,
    });

    return listCreated;
  };

  findBoardById = async (id: string) => {
    const board = await this.listRespository.findBoardById(id);

    return board;
  };

  indexByBoardId = async (boardId: string) => {
    const lists = await this.listRespository.indexByBoardId(boardId);

    return lists;
  };
}
