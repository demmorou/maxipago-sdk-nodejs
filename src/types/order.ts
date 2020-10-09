export interface Order {
  auth: Auth;
}

interface Auth {
  ipAddress?: string;
  processorID: number;
  referenceNum: string;
  fraudCheck?: string;
  customerIdExt?: string;
  billing?: Billing;
  shipping?: Shipping;
  transactionDetail: TransactionDetail;
  payment: Payment;
  saveOnFile?: SaveOnFile;
  recurring?: Recurring;
}

interface SaveOnFile {
  customerToken: string;
}

interface Billing {
  name: string;
  address: string;
  address2?: string;
  district: string;
  city: string;
  state: string;
  postalcode: string;
  country: string;
  phone: string;
  email: string;
  companyName: string;
}

interface Shipping {
  name: string;
  address: string;
  address2?: string;
  district: string;
  city: string;
  state: string;
  postalcode: string;
  country: string;
  phone: string;
  email: string;
}

interface TransactionDetail {
  payType: PayType;
}

interface PayType {
  creditCard?: CreditCard;
  onFile?: OnFile;
}

interface CreditCard {
  number: string;
  expMonth: string;
  expYear: string;
  cvvNumber: string;
}

interface OnFile {
  customerId: string;
  token: string;
  cvvNumber: string;
}

interface Payment {
  chargeTotal: string;
  currencyCode?: string;
  creditInstallment?: CreditInstallment;
}

interface CreditInstallment {
  numberOfInstallments?: number;
  chargeInterest?: string;
}

interface Recurring {
  action: string;
  startDate: string;
  period: string;
  frequency: number;
  installments: number;
  firstAmount: string;
  lastAmount: string;
  lastDate: string;
  failureThreshold: number;
}
