export interface CreateCard {
  customerId: string;
  creditCardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  billingName: string;
  billingAddress1: string;
  billingAddress2: string;
  billingCity: string;
  billingState: string;
  billingZip: string;
  billingCountry: string;
  billingPhone: string;
  billingEmail: string;
  onFileEndDate?: string;
  onFilePermissions?: string;
  onFileMaxChargeAmount?: string;
}

export interface DeleteCard {
  token: string;
  customerId: number;
}
