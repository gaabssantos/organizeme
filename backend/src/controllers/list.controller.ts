import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { ListService } from '../services/list.service';

export class ListController {
  constructor(private listService: ListService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { board_id, name } = req.body;

      const listCreated = await this.listService.create({ board_id, name });

      return res.status(StatusCodes.CREATED).json(listCreated);
    } catch (err) {
      next(err);
    }
  };
}
