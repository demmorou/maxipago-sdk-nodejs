export interface OrderCapture {
  capture: Capture;
}

interface Capture {
  orderID: string;
  referenceNum: string;
  payment: Payment;
}

interface Payment {
  chargeTotal: number;
}
