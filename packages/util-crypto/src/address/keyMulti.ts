// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { BN } from '@reef-defi/util';
import type { HexString } from '@reef-defi/util/types';

import { bnToU8a, compactToU8a, stringToU8a, u8aConcat, u8aSorted } from '@reef-defi/util';

import { blake2AsU8a } from '../blake2/asU8a';
import { addressToU8a } from './util';

const PREFIX = stringToU8a('modlpy/utilisuba');

export function createKeyMulti (who: (HexString | Uint8Array | string)[], threshold: bigint | BN | number): Uint8Array {
  return blake2AsU8a(
    u8aConcat(
      PREFIX,
      compactToU8a(who.length),
      ...u8aSorted(who.map(addressToU8a)),
      bnToU8a(threshold, { bitLength: 16, isLe: true })
    )
  );
}
