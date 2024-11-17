import { ListEntity } from '../../entities/list.entity';
import List from '../models/list.model';

export class ListRepository {
  create = async ({ id, board_id, name, cards }: ListEntity) => {
    const listCreated = { id, board_id, name, cards };

    await List.create(listCreated);

    return listCreated;
  };
}
