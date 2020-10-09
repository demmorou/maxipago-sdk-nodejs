export interface ZeroDollar {
  processorID: number;
  referenceNum: string;
  transactionDetail: TransactionDetail;
  payment: Payment;
}

interface TransactionDetail {
  payType: PayType;
}

interface PayType {
  creditCard: CreditCard;
}

interface CreditCard {
  number: string;
  expMonth: string;
  expYear: string;
  cvvNumber: string;
}

interface Payment {
  chargeTotal: string;
}
