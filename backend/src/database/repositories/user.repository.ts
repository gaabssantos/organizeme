import { sequelize } from '..';

import { UserEntity } from '../../entities/user.entity';

export class UserRepository {
  create = async ({
    name,
    email,
    password,
    verificationCode,
    active,
  }: UserEntity) => {
    const queryInterface = sequelize.getQueryInterface();
    const userCreated = { name, email, password, verificationCode, active };

    await queryInterface.bulkInsert('Users', [userCreated]);

    return userCreated;
  };
}
