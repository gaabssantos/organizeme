import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { AppError } from '../errors/app.error';
import { CardService } from '../services/card.service';

export class CardController {
  constructor(private cardService: CardService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, description, list_id } = req.body;

      const listFound = await this.cardService.findListById(list_id);

      if (!listFound) {
        throw new AppError(
          StatusCodes.BAD_REQUEST,
          'This List ID not exists.',
          'list_not_found',
        );
      }

      const card = await this.cardService.create({
        name,
        description,
        list_id,
      });

      return res.status(StatusCodes.CREATED).json(card);
    } catch (err) {
      next(err);
    }
  };
}
