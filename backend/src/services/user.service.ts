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
      name,
      email,
      password,
      verificationCode,
      active,
    });

    return user;
  };
}
