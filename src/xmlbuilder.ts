import { Builder, Options } from 'xml2js';

import * as types from './types';

const xmlBuilder = (options: Options) => new Builder(options);

export const buildCreateCustomer = (
  customer: Omit<types.Customer, 'customerId'>,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data: types.CommomRequest = {
    verification: MPAuth,
    command: 'add-consumer',
    request: customer,
  };

  return xmlBuilder(XMLOptions).buildObject({
    'api-request': data,
  });
};

export const buildUpdateCustomer = (
  customer: types.Customer,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data: types.CommomRequest = {
    verification: MPAuth,
    command: 'update-consumer',
    request: customer,
  };

  return xmlBuilder(XMLOptions).buildObject({
    'api-request': data,
  });
};

export const buildDeleteCustomer = (
  customer: types.Customer,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data: types.CommomRequest = {
    verification: MPAuth,
    command: 'delete-consumer',
    request: customer,
  };

  return xmlBuilder(XMLOptions).buildObject({
    'api-request': data,
  });
};

export const buildAddCard = (
  card: types.CreateCard,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data: types.CommomRequest = {
    verification: MPAuth,
    command: 'add-card-onfile',
    request: card,
  };

  return xmlBuilder(XMLOptions).buildObject({
    'api-request': data,
  });
};

export const buildDeleteCard = (
  card: types.DeleteCard,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data: types.CommomRequest = {
    verification: MPAuth,
    command: 'delete-card-onfile',
    request: { ...card },
  };

  return xmlBuilder(XMLOptions).buildObject({
    'api-request': data,
  });
};

export const buildAuthorization = (
  order: types.Order,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data: types.TransactionRequest = {
    version: '3.1.1.15',
    verification: MPAuth,
    order,
  };

  return xmlBuilder(XMLOptions).buildObject({
    'transaction-request': data,
  });
};

export const buildCapture = (
  capture: types.OrderCapture,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data: types.TransactionRequest = {
    version: '3.1.1.15',
    verification: MPAuth,
    order: capture,
  };

  return xmlBuilder(XMLOptions).buildObject({
    'transaction-request': data,
  });
};

export const buildSale = (
  sale: types.Order,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data: types.TransactionRequest = {
    version: '3.1.1.15',
    verification: MPAuth,
    order: {
      sale: sale.auth,
    },
  };

  return xmlBuilder(XMLOptions).buildObject({
    'transaction-request': data,
  });
};

export const buildVoid = (
  _void: types.Void,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data: types.TransactionRequest = {
    version: '3.1.1.15',
    verification: MPAuth,
    order: {
      void: { ..._void },
    },
  };

  return xmlBuilder(XMLOptions).buildObject({
    'transaction-request': data,
  });
};

export const buildChargeback = (
  chargeback: types.ChargebackModel,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data: types.TransactionRequest = {
    version: '3.1.1.15',
    verification: MPAuth,
    order: {
      return: { ...chargeback },
    },
  };

  return xmlBuilder(XMLOptions).buildObject({
    'transaction-request': data,
  });
};

export const buildCreateRecurrence = (
  recurrence: types.Order,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data: types.TransactionRequest = {
    version: '3.1.1.15',
    verification: MPAuth,
    order: {
      recurringPayment: { ...recurrence.auth },
    },
  };

  return xmlBuilder(XMLOptions).buildObject({
    'transaction-request': data,
  });
};

export const buildUpdateRecorrence = (
  recurrence: types.Recurrence,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data = {
    version: '3.1.1.15',
    verification: MPAuth,
    command: 'modify-recurring',
    request: recurrence,
  };

  return xmlBuilder(XMLOptions).buildObject({
    'api-request': data,
  });
};

export const buildCancelRecurrence = (
  recurrence: types.DeleteRecurrence,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data = {
    version: '3.1.1.15',
    verification: MPAuth,
    command: 'cancel-recurring',
    request: recurrence,
  };

  return xmlBuilder(XMLOptions).buildObject({
    'api-request': data,
  });
};

export const buildGetTransaction = (
  transaction: types.TransactionQuery,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data = {
    verification: MPAuth,
    command: 'transactionDetailReport',
    request: transaction,
  };

  return xmlBuilder(XMLOptions).buildObject({
    'api-request': data,
  });
};

export const buildZeroDollar = (
  zeroDollar: types.ZeroDollar,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data = {
    version: '3.1.1.15',
    verification: MPAuth,
    order: {
      zeroDollar: { ...zeroDollar },
    },
  };

  return xmlBuilder(XMLOptions).buildObject({
    'transaction-request': data,
  });
};

export const buildZeroDollarToken = (
  zeroDollarToken: types.ZeroDollarToken,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data = {
    version: '3.1.1.15',
    verification: MPAuth,
    order: {
      zeroDollar: { ...zeroDollarToken },
    },
  };

  return xmlBuilder(XMLOptions).buildObject({
    'transaction-request': data,
  });
};

export const buildSaleWithToken = (
  sale: types.SaleWithToken,
  MPAuth: types.MaxiPagoAuth,
  XMLOptions: Options,
) => {
  const data = {
    version: '3.1.1.15',
    verification: MPAuth,
    order: sale,
  };

  return xmlBuilder(XMLOptions).buildObject({
    'transaction-request': data,
  });
};
