import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { BoardService } from '../services/board.service';

export class BoardController {
  constructor(private boardService: BoardService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, color } = req.body;
      const id_user = req.query.userId as string;

      const boardCreated = await this.boardService.create({
        id_user,
        name,
        color,
      });

      res.status(StatusCodes.CREATED).json(boardCreated);
    } catch (err) {
      next(err);
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;

      const boardDeleted = await this.boardService.delete(id);

      res.status(StatusCodes.OK).json(boardDeleted);
    } catch (err) {
      next(err);
    }
  };

  index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = req.query.userId as string;
      const boards = await this.boardService.index(id);

      res.status(StatusCodes.OK).json(boards);
    } catch (err) {
      next(err);
    }
  };

  indexById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const boards = await this.boardService.indexById(id);

      res.status(StatusCodes.OK).json(boards);
    } catch (err) {
      next(err);
    }
  };
}
