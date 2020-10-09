export interface ChargebackModel {
  orderID: string;
  referenceNum: string;
  payment: Payment;
}

interface Payment {
  chargeTotal: number;
}
