// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

const config = require('@reef-defi/dev/config/jest.cjs');

module.exports = Object.assign({}, config, {
  moduleNameMapper: {
    '@polkadot/util(.*)$': '<rootDir>/packages/util/src/$1',
    '@polkadot/x-(fetch|randomvalues|textdecoder|textencoder|ws)(.*)$': '<rootDir>/packages/x-$1/src/node',
    '@reef-defi/hw-ledger-transports(.*)$': '<rootDir>/packages/hw-ledger-transports/src/node',
    // eslint-disable-next-line sort-keys
    '@reef-defi/hw-ledger(.*)$': '<rootDir>/packages/hw-ledger/src/$1',
    '@reef-defi/keyring(.*)$': '<rootDir>/packages/keyring/src/$1',
    '@reef-defi/networks(.*)$': '<rootDir>/packages/networks/src/$1',
    '@reef-defi/util-(crypto)(.*)$': '<rootDir>/packages/util-$1/src/$2',
    // eslint-disable-next-line sort-keys
    '@reef-defi/util(.*)$': '<rootDir>/packages/util/src/$1',
    '@reef-defi/x-(fetch|randomvalues|textdecoder|textencoder|ws)(.*)$': '<rootDir>/packages/x-$1/src/node',
    '@reef-defi/x-global(.*)$': '<rootDir>/packages/x-global/src/$1',
    '@reef-defi/x-rxjs(.*)$': '<rootDir>/packages/x-rxjs/src/$1'
  }
});
