import { v4 } from 'uuid';

import { CardRepository } from '../database/repositories/card.repository';
import { CardDTO } from '../dtos/card.dto';

export class CardService {
  constructor(private cardRepository: CardRepository) {}

  create = async ({ name, list_id }: CardDTO) => {
    const cardCreated = await this.cardRepository.create({
      id: v4(),
      name,
      list_id,
    });

    return cardCreated;
  };

  findListById = async (id: string) => {
    const list = await this.cardRepository.findListById(id);

    return list;
  };

  index = async () => {
    const lists = await this.cardRepository.index();

    return lists;
  };
}
