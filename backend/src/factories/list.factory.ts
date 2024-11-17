import { ListRepository } from '../database/repositories/list.repository';
import { ListService } from '../services/list.service';

export class ListFactory {
  private static listService: ListService;

  static getServiceInstance() {
    if (this.listService) {
      return this.listService;
    }

    const repository = new ListRepository();
    const service = new ListService(repository);

    this.listService = service;

    return this.listService;
  }
}
