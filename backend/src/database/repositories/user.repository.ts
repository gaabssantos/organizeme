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
  }: UserEntity): Promise<UserEntity> => {
    const userCreated = { id, name, email, password, verificationCode, active };

    await User.create(userCreated);

    return userCreated;
  };

  findByEmail = async (email: string): Promise<UserEntity | undefined> => {
    const accountFound = await User.findOne({ where: { email } });

    return accountFound?.toJSON<UserEntity>();
  };

  accountVerification = async (verificationCode: string) => {
    const accountFound = await User.findOne({ where: { verificationCode } });

    if (accountFound) {
      if (!accountFound.getDataValue('active')) {
        accountFound?.update({ active: true });

        return true;
      }
      return true;
    } else {
      return false;
    }
  };
}
