/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cxs from 'cxs';
import colors from 'Styles/colors';
import variables from 'Styles/variables';

const container = cxs({
  background: colors.light,
});

const headline = cxs({
  fontSize: 18,
  padding: `${variables.gap.big}px 0 0`,
  marginTop: 0,
  textAlign: 'center',
});

export default {
  container,
  headline,
};
