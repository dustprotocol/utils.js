// Copyright 2017-2021 @polkadot/networks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { knownGenesis, knownIcon, knownLedger, knownTestnet } from './defaults';
import { availableNetworks, selectableNetworks } from '.';

describe('selectableNetworks', (): void => {
  it('has the correct starting order', (): void => {
    expect(selectableNetworks.slice(0, 2).map(({ prefix }) => prefix)).toEqual([42, 42]);
  });

  it('has no ignored networks', (): void => {
    expect(availableNetworks.some(({ isIgnored }) => isIgnored)).toEqual(false);
  });

  it('has no reserved networks', (): void => {
    expect(availableNetworks.some(({ prefix }) => prefix === 47)).toEqual(false);
  });

  it('has allNetworks genesis information', (): void => {
    expect(
      Object.entries(knownGenesis).filter(([network, genesisHash]) =>
        availableNetworks.some((a) =>
          a.network === network &&
          genesisHash.some((g, index) => a.genesisHash[index] !== g)
        )
      )
    ).toEqual([]);
  });

  it('has allNetworks ledger details', (): void => {
    expect(
      Object.entries(knownLedger).filter(([network, slip44]) =>
        availableNetworks.some((a) =>
          a.network === network && (
            a.slip44 !== slip44 ||
            !a.hasLedgerSupport ||
            !a.genesisHash.length
          )
        )
      )
    ).toEqual([]);
  });

  it('has no testnets exposed', (): void => {
    expect(
      Object.keys(knownTestnet).filter((network) =>
        availableNetworks.some((a) =>
          a.network === network
        )
      )
    ).toEqual([]);
  });

  it('has allNetworks icons, except for overrides', (): void => {
    expect(
      availableNetworks.filter(({ icon, network }) =>
        icon !== 'substrate' &&
        knownIcon[network] !== icon
      )
    ).toEqual([]);
  });
});
