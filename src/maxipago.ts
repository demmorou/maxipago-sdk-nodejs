import { Options } from 'xml2js';
import { Options as OptionsXML } from 'xml-js';

import * as types from './types';
import * as builder from './xmlbuilder';

import { convertResponse, formatResponse } from './utils/utils';

import api from './api';

class MaxiPagoSDK {
  constructor(
    private readonly auth: types.MaxiPagoAuth,
    private readonly env: string,
  ) {}

  private readonly POST_API =
    this.env === 'development'
      ? 'https://testapi.maxipago.net/UniversalAPI/postAPI'
      : 'https://api.maxipago.net/UniversalAPI/postAPI';

  private readonly POST_XML =
    this.env === 'development'
      ? 'https://testapi.maxipago.net/UniversalAPI/postXML'
      : 'https://api.maxipago.net/UniversalAPI/postXML';

  private readonly REPORTS_API =
    this.env === 'development'
      ? 'https://testapi.maxipago.net/ReportsAPI/servlet/ReportsAPI'
      : 'https://api.maxipago.net/ReportsAPI/servlet/ReportsAPI';

  private readonly XML_OPTIONS: Options = {
    explicitRoot: false,
    ignoreAttrs: false,
    mergeAttrs: true,
    explicitArray: true,
  };

  private readonly XML_CONVERT_OPTIONS: OptionsXML.XML2JSON = {
    compact: true,
    trim: true,
    ignoreDeclaration: true,
    ignoreInstruction: true,
    ignoreAttributes: true,
    ignoreComment: true,
    ignoreCdata: false,
    ignoreDoctype: true,
    textFn: convertResponse,
  };

  /**
   * This method save a new customer on MaxiPago to use in others operations.
   * @param customer object to create a new customer on MaxiPago.
   */
  public async createCustomer(customer: Omit<types.Customer, 'customerId'>) {
    const customerXML = builder.buildCreateCustomer(
      customer,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_API, customerXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  /**
   * This method update a customer on MaxiPago.
   * @param customer object to update a customer on MaxiPago.
   */
  async updateCustomer(customer: types.Customer): Promise<any> {
    const customerXML = builder.buildUpdateCustomer(
      customer,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_API, customerXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  /**
   * This method delete a customer on MaxiPago.
   * @param customer object with customer id to delete on MaxiPago
   */
  async deleteCustomer(customer: types.Customer): Promise<any> {
    const customerXML = builder.buildDeleteCustomer(
      customer,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_API, customerXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async addCard(card: types.CreateCard): Promise<any> {
    const cardXML = builder.buildAddCard(card, this.auth, this.XML_OPTIONS);

    const responseMP = await api.post(this.POST_API, cardXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async deleteCard(card: types.DeleteCard): Promise<any> {
    const cardXML = builder.buildDeleteCard(card, this.auth, this.XML_OPTIONS);

    const responseMP = await api.post(this.POST_API, cardXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async createAuthorization(order: types.Order): Promise<any> {
    const orderXML = builder.buildAuthorization(
      order,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_XML, orderXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async capture(capture: types.OrderCapture): Promise<any> {
    const captureXML = builder.buildCapture(
      capture,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_XML, captureXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async sale(sale: types.Order): Promise<any> {
    const saleXML = builder.buildSale(sale, this.auth, this.XML_OPTIONS);

    const responseMP = await api.post(this.POST_XML, saleXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async void(_void: types.Void): Promise<any> {
    const voidXML = builder.buildVoid(_void, this.auth, this.XML_OPTIONS);

    const responseMP = await api.post(this.POST_XML, voidXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async chargeBack(chargeback: types.ChargebackModel): Promise<any> {
    const chargebackXML = builder.buildChargeback(
      chargeback,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_XML, chargebackXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async createRecurrence(recurrence: types.Order) {
    const recurrenceXML = builder.buildCreateRecurrence(
      recurrence,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_XML, recurrenceXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async updateRecurrence(recurrence: types.Recurrence): Promise<any> {
    const recurrenceXML = builder.buildUpdateRecorrence(
      recurrence,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_XML, recurrenceXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async deleteRecurrence(recurrence: types.DeleteRecurrence): Promise<any> {
    const recurrenceXML = builder.buildCancelRecurrence(
      recurrence,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_XML, recurrenceXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async findTransaction(transaction: types.TransactionQuery): Promise<any> {
    const transactionXML = builder.buildGetTransaction(
      transaction,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.REPORTS_API, transactionXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async zeroDollar(zeroDollar: types.ZeroDollar): Promise<any> {
    const zeroDollarXML = builder.buildZeroDollar(
      zeroDollar,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_XML, zeroDollarXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async zeroDollarWithTokenCard(
    zeroDollar: types.ZeroDollarToken,
  ): Promise<any> {
    const zeroDollarXML = builder.buildZeroDollarToken(
      zeroDollar,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_XML, zeroDollarXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }

  async saleWithToken(sale: types.SaleWithToken): Promise<any> {
    const saleXML = builder.buildSaleWithToken(
      sale,
      this.auth,
      this.XML_OPTIONS,
    );

    const responseMP = await api.post(this.POST_XML, saleXML);

    const response = formatResponse(responseMP.data, this.XML_CONVERT_OPTIONS);

    return response;
  }
}

export const buildSDK = (
  auth: types.MaxiPagoAuth,
  env: string,
): MaxiPagoSDK => {
  return new MaxiPagoSDK(auth, env);
};
