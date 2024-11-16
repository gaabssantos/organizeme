import { sequelize } from '..';

import { UserEntity } from '../../entities/user.entity';
import User from '../models/user.model';

export class UserRepository {
  create = async ({
    id,
    name,
    email,
    password,
    verificationCode,
    active,
  }: UserEntity) => {
    const userCreated = { id, name, email, password, verificationCode, active };

    await User.create(userCreated);

    return userCreated;
  };

  findByEmail = async (email: string) => {
    const accountFound = await User.findOne({ where: { email } });

    return accountFound;
  };
}
