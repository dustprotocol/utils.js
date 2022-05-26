# @dust-defi/x-global

A cross-environment global object. checks for global > self > window > this.

Install it via `yarn add @dust-defi/x-global`

```js
import { xglobal } from '@dust-defi/x-global';

console.log(typeof xglobal.TextEncoder);
```
