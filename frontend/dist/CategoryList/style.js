'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamor = require('glamor');

var _colors = require('../../../../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _variables = require('../../../../../styles/variables');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = (0, _glamor.css)({
  background: _colors2.default.light
}).toString(); /**
                * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                *
                * This source code is licensed under the Apache 2.0 license found in the
                * LICENSE file in the root directory of this source tree.
                */

var headline = (0, _glamor.css)({
  fontSize: 18,
  padding: _variables2.default.gap.big + 'px 0 0',
  marginTop: 0,
  textAlign: 'center'
}).toString();

var _default = {
  container: container,
  headline: headline
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(container, 'container', 'frontend/src/CategoryList/style.js');

  __REACT_HOT_LOADER__.register(headline, 'headline', 'frontend/src/CategoryList/style.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'frontend/src/CategoryList/style.js');
}();

;