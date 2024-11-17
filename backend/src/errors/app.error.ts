import { StatusCodes } from 'http-status-codes';

export class AppError {
  public statusCode: StatusCodes;
  public errorMessage: string | string[];
  public errorCode?: string;

  constructor(
    statusCode: StatusCodes,
    errorMessage: string | string[],
    errorCode?: string,
  ) {
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
  }
}
