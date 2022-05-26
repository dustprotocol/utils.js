// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@dust-defi/util/types';

import { u8aToU8a } from '@dust-defi/util';

import { isReady, twox } from '@polkadot/wasm-crypto';

import xxhash64AsBn from './xxhash64/asBn';

/**
 * @name xxhashAsU8a
 * @summary Creates a xxhash64 u8a from the input.
 * @description
 * From either a `string`, `Uint8Array` or a `Buffer` input, create the xxhash64 and return the result as a `Uint8Array` with the specified `bitLength`.
 * @example
 * <BR>
 *
 * ```javascript
 * import { xxhashAsU8a } from '@dust-defi/util-crypto';
 *
 * xxhashAsU8a('abc'); // => 0x44bc2cf5ad770999
 * ```
 */
export function xxhashAsU8a (data: HexString | Buffer | Uint8Array | string, bitLength = 64, onlyJs = false): Uint8Array {
  const iterations = Math.ceil(bitLength / 64);
  const u8a = u8aToU8a(data);

  if (isReady() && !onlyJs) {
    return twox(u8a, iterations);
  }

  const result = new Uint8Array(Math.ceil(bitLength / 8));

  for (let seed = 0; seed < iterations; seed++) {
    result.set(xxhash64AsBn(u8a, seed).toArray('le', 8), seed * 8);
  }

  return result;
}
