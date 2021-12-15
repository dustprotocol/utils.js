// Copyright 2017-2021 @polkadot/networks authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { KnownSubstrate, Network, SubstrateNetwork } from './types';

import { knownGenesis, knownLedger } from './defaults';
import { knownSubstrate } from './substrate';

// These are known prefixes that are not sorted
const UNSORTED = [42];

function toExpanded (o: KnownSubstrate): Network {
  const network = o.network || '';
  const n = o as Network;

  // ledger additions
  n.slip44 = knownLedger[network];
  n.hasLedgerSupport = !!n.slip44;

  // general items
  n.genesisHash = knownGenesis[network] || [];
  n.icon = 'substrate';

  // filtering
  n.isTestnet = false;
  n.isIgnored = false;

  return n;
}

function filterSelectable ({ genesisHash, prefix }: Network): boolean {
  return !!genesisHash.length || prefix === 42;
}

function filterAvailable (n: SubstrateNetwork): n is Network {
  return !n.isIgnored && !!n.network;
}

function sortNetworks (a: Network, b: Network): number {
  const isUnSortedA = UNSORTED.includes(a.prefix);
  const isUnSortedB = UNSORTED.includes(b.prefix);

  return isUnSortedA === isUnSortedB
    ? 0
    : isUnSortedA
      ? -1
      : isUnSortedB
        ? 1
        : a.displayName.localeCompare(b.displayName);
}

// This is all the Substrate networks with our additional information
export const allNetworks = knownSubstrate.map(toExpanded);

// The list of available/claimed prefixes
//   - no testnets
//   - we only include those where we have a standardAccount
//   - sort by name, however we keep 0, 2, 42 first in the list
export const availableNetworks = allNetworks.filter(filterAvailable).sort(sortNetworks);

// A filtered list of those chains we have details about (genesisHashes)
export const selectableNetworks = availableNetworks.filter(filterSelectable);
