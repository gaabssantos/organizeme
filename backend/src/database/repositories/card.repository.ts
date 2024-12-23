import { CardEntity } from '../../entities/card.entity';
import Card from '../models/card.model';
import List from '../models/list.model';

export class CardRepository {
  create = async ({ id, name, list_id }: CardEntity): Promise<CardEntity> => {
    const cardCreated = { id, name, list_id };

    await Card.create(cardCreated);

    return cardCreated;
  };

  findListById = async (id: string) => {
    const list = await List.findByPk(id);

    return list;
  };

  index = async () => {
    const cards = await Card.findAll();

    return cards;
  };
}
