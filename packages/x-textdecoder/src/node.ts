// Copyright 2017-2021 @polkadot/x-textencoder authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { xglobal } from '@reef-defi/x-global';
import util from 'util';

export { packageInfo } from './packageInfo';

export const TextDecoder = (
  typeof xglobal.TextDecoder === 'undefined'
    ? util.TextDecoder as unknown as typeof xglobal.TextDecoder
    : xglobal.TextDecoder
);
