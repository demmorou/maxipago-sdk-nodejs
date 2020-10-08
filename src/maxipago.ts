import { MaxiPagoConfig } from './types';

class MaxiPagoSDK {
  private secret_key: string;
  private secret_id: string;

  constructor({ secret_key, secret_id }: MaxiPagoConfig) {
    this.secret_key = secret_key;
    this.secret_id = secret_id;
  }

  public sayHello(): string {
    return 'Hello!';
  }
}

export const buildSDK = (secrets: MaxiPagoConfig): MaxiPagoSDK => {
  return new MaxiPagoSDK(secrets);
};
