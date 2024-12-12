import { v4 } from 'uuid';

import { BoardRepository } from '../database/repositories/board.repository';
import { BoardDTO } from '../dtos/board.dto';

export class BoardService {
  constructor(private boardRepository: BoardRepository) {}

  create = async ({ id_user, name, color }: BoardDTO) => {
    const boardCreated = await this.boardRepository.create({
      id: v4(),
      id_user,
      name,
      color,
    });

    return boardCreated;
  };

  delete = async (id: string) => {
    const boardDeleted = await this.boardRepository.delete(id);

    return boardDeleted;
  };

  index = async (id: string) => {
    const boards = await this.boardRepository.index(id);

    return boards;
  };

  indexById = async (id: string) => {
    const boards = await this.boardRepository.indexById(id);

    return boards;
  };
}
