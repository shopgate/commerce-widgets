'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamor = require('glamor');

var _glamor2 = _interopRequireDefault(_glamor);

var _colors = require('../../../../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

var listView = (0, _glamor2.default)({
  background: _colors2.default.light,
  overflow: 'auto',
  '> ul > li:first-child': {
    paddingTop: 0
  },
  '> ul > li:last-child': {
    paddingBottom: 0
  }
}).toString();

exports.default = {
  listView: listView
};