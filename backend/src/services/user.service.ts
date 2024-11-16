import { v4 } from 'uuid';

import { UserRepository } from '../database/repositories/user.repository';
import { UserDTO } from '../dtos/user.dto';

export class UserService {
  constructor(private userRepository: UserRepository) {}

  create = async ({
    name,
    email,
    password,
    active,
    verificationCode,
  }: UserDTO) => {
    const user = await this.userRepository.create({
      id: v4(),
      name,
      email,
      password,
      verificationCode,
      active,
    });

    return user;
  };

  findByEmail = async (email: string) => {
    const accountFound = await this.userRepository.findByEmail(email);

    return accountFound;
  };

  accountVerification = async (verificationCode: string) => {
    const accountFound =
      await this.userRepository.accountVerification(verificationCode);

    return accountFound;
  };
}
