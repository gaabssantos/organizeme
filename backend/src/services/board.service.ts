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
}
