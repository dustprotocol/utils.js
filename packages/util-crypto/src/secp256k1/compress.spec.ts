// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { hexToU8a } from '@dust-defi/util';

import { secp256k1Compress } from './';

describe('secp256k1Compress', (): void => {
  it('compresses a known key', (): void => {
    expect(
      secp256k1Compress(
        hexToU8a('0x04b9dc646dd71118e5f7fda681ad9eca36eb3ee96f344f582fbe7b5bcdebb1307763fe926c273235fd979a134076d00fd1683cbd35868cb485d4a3a640e52184af')
      )
    ).toEqual(
      hexToU8a('0x03b9dc646dd71118e5f7fda681ad9eca36eb3ee96f344f582fbe7b5bcdebb13077')
    );
  });
});
