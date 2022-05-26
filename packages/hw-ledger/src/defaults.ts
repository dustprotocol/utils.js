// Copyright 2017-2021 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type Transport from '@ledgerhq/hw-transport';
import type { SubstrateApp } from '@dust-defi/ledger-substrate';

import { newDustApp } from '@dust-defi/ledger-substrate';

// These match up with the keys of the knownLedger object in the @dust-defi/networks/defaults.ts
export const ledgerApps: Record<string, (transport: Transport) => SubstrateApp> = {
  'dust-mainnet': newDustApp,
  'dust-testnet': newDustApp
};
