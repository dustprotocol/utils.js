// Copyright 2017-2021 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KeypairType } from '@reef-defi/util-crypto/types';
import type { KeyringPair$Json, KeyringPair$Meta } from '../types';

import { objectSpread } from '@reef-defi/util';
import { jsonEncryptFormat } from '@reef-defi/util-crypto';

interface PairStateJson {
  address: string;
  meta: KeyringPair$Meta;
}

export function pairToJson (type: KeypairType, { address, meta }: PairStateJson, encoded: Uint8Array, isEncrypted: boolean): KeyringPair$Json {
  return objectSpread({}, jsonEncryptFormat(encoded, ['pkcs8', type], isEncrypted), {
    address,
    meta
  });
}
