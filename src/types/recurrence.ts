export interface DeleteRecurrence {
  orderID: string;
}

export interface Recurrence {
  orderID: string;
  paymentInfo: PaymentInfo;
  recurring: Recurring;
  billingInfo: BillingInfo;
  shippingInfo: ShippingInfo;
}

interface PaymentInfo {
  cardInfo: string;
  creditCardNumber: string;
  expirationMonth: string;
  expirationYear: string;
  chargeTotal: string;
}

interface Recurring {
  processorID: string;
  action: string;
  installments: string;
  nextFireDate?: string;
  fireDay?: string;
  period: string;
  lastDate?: string;
  lastAmount?: string;
}

interface BillingInfo {
  name: string;
  address1: string;
  address2?: string;
  city: string;
  zip: string;
  country: string;
  email: string;
  phone: string;
}

interface ShippingInfo {
  name: string;
  address1: string;
  address2?: string;
  city: string;
  zip: string;
  country: string;
  email: string;
  phone: string;
}
