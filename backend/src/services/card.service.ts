import { v4 } from 'uuid';

import { CardRepository } from '../database/repositories/card.repository';
import { CardDTO } from '../dtos/card.dto';

export class CardService {
  constructor(private cardRepository: CardRepository) {}

  create = async ({ name, description, list_id }: CardDTO) => {
    const cardCreated = await this.cardRepository.create({
      id: v4(),
      name,
      description,
      list_id,
    });

    return cardCreated;
  };

  findListById = async (id: string) => {
    const list = await this.cardRepository.findListById(id);

    return list;
  };
}
