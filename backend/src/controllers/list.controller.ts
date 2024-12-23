import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { AppError } from '../errors/app.error';
import { ListService } from '../services/list.service';

export class ListController {
  constructor(private listService: ListService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { board_id, name } = req.body;

      const boardFound = await this.listService.findBoardById(board_id);

      if (!boardFound) {
        throw new AppError(
          StatusCodes.BAD_REQUEST,
          'This board does not exist.',
          'board_not_exist',
        );
      }

      const listCreated = await this.listService.create({ board_id, name });

      res.status(StatusCodes.CREATED).json(listCreated);

      return;
    } catch (err) {
      next(err);
    }
  };
}
