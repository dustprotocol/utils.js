// Copyright 2017-2021 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { isU8a } from '@dust-defi/util';

import { randomAsU8a } from '.';

describe('randomAsU8a', (): void => {
  it('generates a Uint8Array', (): void => {
    expect(
      isU8a(randomAsU8a())
    ).toEqual(true);
  });

  it('generated results does not match', (): void => {
    expect(
      randomAsU8a()
    ).not.toEqual(
      randomAsU8a()
    );
  });

  it('generates 32 bytes by default', (): void => {
    expect(
      randomAsU8a()
    ).toHaveLength(32);
  });

  it('generates with the suuplied length', (): void => {
    expect(
      randomAsU8a(66)
    ).toHaveLength(66);
  });
});
