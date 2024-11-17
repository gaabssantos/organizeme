import { BoardRepository } from '../database/repositories/board.repository';
import { BoardService } from '../services/board.service';

export class BoardFactory {
  private static boardService: BoardService;

  static getServiceInstance() {
    if (this.boardService) {
      return this.boardService;
    }

    const repository = new BoardRepository();
    const service = new BoardService(repository);

    this.boardService = service;

    return service;
  }
}
