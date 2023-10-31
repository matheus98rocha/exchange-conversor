import { BadRequestException, Injectable } from '@nestjs/common';

export class CurrenciesService {
  async getCurrency(currency: string): Promise<any> {
    return currency;
  }
}

@Injectable()
export class ExchangeService {
  constructor(private currenciesServices: CurrenciesService) {}
  async convertAmount({ from, to, amount }): Promise<any> {
    if (!from || !to || !amount) {
      throw new BadRequestException();
    }
    try {
      const currencyFrom = await this.currenciesServices.getCurrency(from);
      const currencyTo = await this.currenciesServices.getCurrency(to);
    } catch (error) {
      throw new Error(error);
    }
  }
}
