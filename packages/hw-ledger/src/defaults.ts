// Copyright 2017-2021 @polkadot/hw-ledger authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type Transport from '@ledgerhq/hw-transport';
import type { SubstrateApp } from '@zondax/ledger-substrate';

import { newReefApp } from '@zondax/ledger-substrate';

// These match up with the keys of the knownLedger object in the @reef-defi/networks/defaults.ts
export const ledgerApps: Record<string, (transport: Transport) => SubstrateApp> = {
  'reef-mainnet': newReefApp,
  'reef-testnet': newReefApp
};
