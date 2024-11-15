import { UserEntity } from '../../entities/user.entity';

export class UserRepository {
  create = async ({
    name,
    email,
    password,
    verificationCode,
    active,
  }: UserEntity) => {
    const userCreated = { name, email, password, verificationCode, active };

    return userCreated;
  };
}
