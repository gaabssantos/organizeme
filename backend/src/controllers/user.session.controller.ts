import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { UserDTO } from '../dtos/user.dto';
import { AppError } from '../errors/app.error';
import { UserService } from '../services/user.service';

export class SessionController {
  constructor(private userService: UserService) {}

  create = async (
    req: Request<unknown, unknown, UserDTO>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { email, password } = req.body;

      const user = await this.userService.findByEmail(email);

      const emailOrPasswordIncorrect = () => {
        throw new AppError(
          StatusCodes.UNAUTHORIZED,
          'Email or password is incorrect.',
          'email_password_incorrect',
        );
      };

      if (!user) {
        emailOrPasswordIncorrect();
      }

      if (!user?.active) {
        throw new AppError(
          StatusCodes.UNAUTHORIZED,
          'This account is not activated.',
          'account_not_actived',
        );
      }

      const passwordUnhashed = await bcrypt.compare(
        password,
        user?.password as string,
      );

      if (!passwordUnhashed) {
        emailOrPasswordIncorrect();
      }

      const userSession = {
        name: user?.name,
        token: jwt.sign(
          { id: user?.id, email: user?.email },
          process.env.JWT_SECRET as string,
          { expiresIn: process.env.JWT_EXPIRESIN },
        ),
      };

      return res.status(StatusCodes.OK).json(userSession);
    } catch (err) {
      next(err);
    }
  };
}
