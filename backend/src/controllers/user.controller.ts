import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { v4 } from 'uuid';

import { UserService } from '../services/user.service';

export class UserController {
  constructor(private userService: UserService) {}

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, email, password } = req.body;

      const accountFound = await this.userService.findByEmail(email);

      if (accountFound) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
          errMessage: 'This email already exists..',
          errCode: 'email_exists',
        });
      }

      const passwordHashed = await bcrypt.hash(password, 10);

      const user = await this.userService.create({
        name,
        email,
        password: passwordHashed,
        active: false,
        verificationCode: v4(),
      });

      return res.status(StatusCodes.CREATED).json(user);
    } catch (err) {
      next(err);
    }
  };

  accountVerification = async (req: Request, res: Response) => {
    const { code } = req.params;

    const accountFound = await this.userService.accountVerification(code);

    if (accountFound) {
      return res.status(StatusCodes.OK).json({
        message: 'Your account was verified.',
        messageCode: 'account_verified',
      });
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).json({
        errMessage: 'This code is incorrect or expired.',
        errCode: 'code_incorrect',
      });
    }
  };
}
