import { xml2json, Options } from 'xml-js';

const isDebug = process.env.NODE_ENV === 'development';

export const convertResponse = (value: any, parentElement: any) => {
  try {
    const keyNo = Object.keys(parentElement._parent).length;
    const keyName = Object.keys(parentElement._parent)[keyNo - 1];
    parentElement._parent[keyName] = nativeType(value);
  } catch (e) {
    console.log(e);
  }
};

export const formatResponse = (xml: string, options: Options.XML2JSON) => {
  xml = xml.replace('rapi-response', 'response');
  xml = xml.replace('rapi-response', 'response');
  xml = xml.replace('api-response', 'response');
  xml = xml.replace('api-response', 'response');
  xml = xml.replace('transaction-response', 'response');
  xml = xml.replace('transaction-response', 'response');

  const jsonResponse = JSON.parse(xml2json(xml, options));

  if (isDebug) {
    console.log('development mode');
    console.log(xml);
  } else {
    console.log('production mode');
    console.log(xml);
  }

  if (typeof jsonResponse.response !== 'undefined') {
    return jsonResponse.response;
  } else {
    return JSON.parse(xml2json(xml, options));
  }
};

function nativeType(value: any) {
  const nValue = Number(value);
  if (!isNaN(nValue)) {
    return nValue;
  }
  const bValue = value.toLowerCase();
  if (bValue === 'true') {
    return true;
  } else if (bValue === 'false') {
    return false;
  }
  return value;
}
