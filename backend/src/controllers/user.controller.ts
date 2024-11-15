import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { v4 } from 'uuid';

import { UserService } from '../services/user.service';

export class UserController {
  constructor(private userService: UserService) {}

  create = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const user = await this.userService.create({
      name,
      email,
      password,
      active: false,
      verificationCode: v4(),
    });
    return res.status(StatusCodes.CREATED).json(user);
  };
}
