export interface ZeroDollarToken {
  processorID: number;
  referenceNum: string;
  transactionDetail: TransactionDetail;
  payment: Payment;
}

interface TransactionDetail {
  payType: PayType;
}

interface PayType {
  onFile: OnFile;
}

interface OnFile {
  customerId: number;
  token: string;
  cvvNumber: string;
}

interface Payment {
  chargeTotal: string;
}
