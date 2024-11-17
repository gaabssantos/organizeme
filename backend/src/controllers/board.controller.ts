import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { BoardService } from '../services/board.service';

export class BoardController {
  constructor(private boardService: BoardService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, color } = req.body;
      const id_user = req.query.userId as string;

      console.log(id_user);

      const boardCreated = await this.boardService.create({
        id_user,
        name,
        color,
      });

      return res.status(StatusCodes.CREATED).json(boardCreated);
    } catch (err) {
      next(err);
    }
  };
}
