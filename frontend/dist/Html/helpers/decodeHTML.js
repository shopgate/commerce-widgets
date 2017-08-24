'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Unescape HTML entities.
 * @param {string} input The escaped HTML.
 * @returns {string} The unescaped HTML.
 */
var decodeHTML = function decodeHTML(input) {
  var e = document.createElement('div');

  e.innerHTML = input;

  return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
};

var _default = decodeHTML;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(decodeHTML, 'decodeHTML', 'frontend/src/Html/helpers/decodeHTML.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'frontend/src/Html/helpers/decodeHTML.js');
}();

;