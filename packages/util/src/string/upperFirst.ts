// Copyright 2017-2021 @polkadot/util authors & contributors
// SPDX-License-Identifier: Apache-2.0

/**
 * @name stringUpperFirst
 * @summary Lowercase the first letter of a string
 * @description
 * Lowercase the first letter of a string
 * @example
 * <BR>
 *
 * ```javascript
 * import { stringUpperFirst } from '@dust-defi/util';
 *
 * stringUpperFirst('abc'); // => 'Abc'
 * ```
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function stringUpperFirst (value?: String | string | null): string {
  return value
    ? value.charAt(0).toUpperCase() + value.slice(1)
    : '';
}
