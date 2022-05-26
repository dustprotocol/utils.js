// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { detectPackage } from './versionDetect';

describe('detectPackage', (): void => {
  const PKG = '@dust-defi/util';
  const VER1 = '9.8.0-beta.45';
  const VER2 = '9.7.1';
  const VER3 = '9.6.1';
  const PATH = '/Users/jaco/Projects/polkadot-js/api/node_modules/@dust-defi/util';

  const MISMATCH = `@dust-defi/util has multiple versions, ensure that there is only one installed.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
\t${VER1}\t${PATH}/01
\t${VER2}        \t${PATH}/02`;

  it('should not log the first time', (): void => {
    const spy = jest.spyOn(console, 'warn');

    detectPackage({ name: PKG, version: VER1 }, `${PATH}/01`);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should log the second time', (): void => {
    const spy = jest.spyOn(console, 'warn');

    detectPackage({ name: PKG, version: VER2 }, `${PATH}/02`);
    expect(spy).toHaveBeenCalledWith(MISMATCH);
    spy.mockRestore();
  });

  it('should allow for function use', (): void => {
    const spy = jest.spyOn(console, 'warn');

    detectPackage({ name: PKG, version: VER3 }, () => `${PATH}/03`);
    expect(spy).toHaveBeenCalledWith(`${MISMATCH}
\t${VER3}        \t${PATH}/03`);
    spy.mockRestore();
  });
});

describe('detectPackageDeps', (): void => {
  const DEP0 = { name: '@dust-defi/keyring', version: '1.1.1' };
  const DEP1 = { name: '@dust-defi/util', version: '1.1.2' };
  const DEP2 = { name: '@dust-defi/util-crypto', version: '1.1.3' };
  const DEP3 = { name: '@dust-defi/networks', version: '1.1.1' };

  it('should not log when no mismatches are found', (): void => {
    const spy = jest.spyOn(console, 'warn');

    detectPackage({ name: '@dust-defi/one', version: '1.1.1' }, false, [DEP0, DEP3]);
    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
  });

  it('should log when mismatches are found', (): void => {
    const spy = jest.spyOn(console, 'warn');

    detectPackage({ name: '@dust-defi/two', version: '1.1.1' }, false, [DEP0, DEP1, DEP2, DEP3]);
    expect(spy).toHaveBeenCalledWith(`@dust-defi/two requires direct dependencies exactly matching version 1.1.1.
Either remove and explicitly install matching versions or dedupe using your package manager.
The following conflicting packages were found:
\t1.1.2\t@dust-defi/util
\t1.1.3\t@dust-defi/util-crypto`);
    spy.mockRestore();
  });
});
