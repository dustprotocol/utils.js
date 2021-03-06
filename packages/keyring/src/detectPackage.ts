// Copyright 2017-2021 @polkadot/keyring authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { detectPackage, packageInfo as utilInfo } from '@dust-defi/util';
import { packageInfo as cryptoInfo } from '@dust-defi/util-crypto/packageInfo';

import { packageInfo } from './packageInfo';

detectPackage(packageInfo, typeof __dirname !== 'undefined' && __dirname, [utilInfo, cryptoInfo]);
