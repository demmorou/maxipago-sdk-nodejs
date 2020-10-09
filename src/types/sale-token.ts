export interface SaleWithToken {
  sale: Sale;
}

interface Sale {
  processorID: number;
  referenceNum: string;
  ipAddress: string;
  transactionDetail: TransactionDetail;
  payment: Payment;
}

interface Payment {
  currencyCode: 'BRL';
  chargeTotal: string;
}

interface TransactionDetail {
  payType: PayType;
}

interface PayType {
  onFile: OnFile;
}

interface OnFile {
  customerId: string;
  token: string;
  cvvNumber: string;
}
