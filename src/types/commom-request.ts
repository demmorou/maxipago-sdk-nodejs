import { MaxiPagoAuth } from './auth';

export interface CommomRequest {
  verification: MaxiPagoAuth;
  command?:
    | 'add-consumer'
    | 'update-consumer'
    | 'delete-consumer'
    | 'add-card-onfile'
    | 'delete-card-onfile'
    | 'modify-recurring';
  request?: any;
}

export interface TransactionRequest {
  version: '3.1.1.15';
  verification: MaxiPagoAuth;
  order: any;
}
