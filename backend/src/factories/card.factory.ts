import { CardRepository } from '../database/repositories/card.repository';
import { CardService } from '../services/card.service';

export class CardFactory {
  private static cardService: CardService;

  static getServiceInstance() {
    if (this.cardService) {
      return this.cardService;
    }

    const repository = new CardRepository();
    const service = new CardService(repository);

    this.cardService = service;

    return this.cardService;
  }
}
