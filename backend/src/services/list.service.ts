import { v4 } from 'uuid';

import { ListRepository } from '../database/repositories/list.repository';
import { ListDTO } from '../dtos/list.dto';

export class ListService {
  constructor(private listRespository: ListRepository) {}

  create = async ({ board_id, name, cards }: ListDTO) => {
    const listCreated = await this.listRespository.create({
      id: v4(),
      board_id,
      name,
      cards,
    });

    return listCreated;
  };

  findBoardById = async (id: string) => {
    const board = await this.listRespository.findBoardById(id);

    return board;
  };
}
