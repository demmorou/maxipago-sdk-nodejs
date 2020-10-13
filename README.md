# maxipago-sdk-js

maxipago-sdk-js is a SDK Node.js for [maxiPago!](http://developers.maxipago.com/). Following the [documentation](http://developers.maxipago.com/apidocs/) available by maxiPago!, it's possible.

- Convert all responses from XML to JSON format.
- Can be used as a communication Gateway with the maxiPago!.
- Send and receive requests using only JSON format.

## :wrench: Instalação

```shell
npm install maxipago-sdk-js
```

## :heavy_check_mark: Como usar

```typescript
import { MaxiPagoSDK } from 'maxipago-gateway';

const maxipago = MaxiPagoSDK(
  { merchantId: 'your merchantId', merchantKey: 'your merchantKey' },
  'development',
);
```
