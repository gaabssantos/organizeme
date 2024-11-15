import { UserRepository } from '../database/repositories/user.repository';
import { UserService } from '../services/user.service';

export class UserFactory {
  private static userService: UserService;

  static getServiceInstance() {
    if (this.userService) {
      return this.userService;
    }

    const repository = new UserRepository();
    const service = new UserService(repository);

    this.userService = service;

    return service;
  }
}
