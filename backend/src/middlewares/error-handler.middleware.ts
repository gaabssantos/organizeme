import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { AppError } from '../errors/app.error';

export function errorHandler(
  error: AppError | Error,
  _: Request,
  res: Response,
  __: NextFunction,
) {
  if (error instanceof AppError) {
    return res
      .status(error.statusCode)
      .json({ errorMessage: error.errorMessage, errorCode: error.errorCode });
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ error: error.message });
}
