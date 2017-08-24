'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Logger = require('@shopgate/pwa-core/classes/Logger');

var _Logger2 = _interopRequireDefault(_Logger);

var _cryptoJs = require('crypto-js');

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

var _decodeHTML = require('./decodeHTML');

var _decodeHTML2 = _interopRequireDefault(_decodeHTML);

var _handleDOM = require('./handleDOM');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Receives custom HTML from a widget configuration, parses possible
 * script tags and executes them after loading external scripts.
 * @param {string} html The HTML string. It might contain script tags.
 * @param {Object} widgetSettings The widget settings are used to create a unique widget ID.
 * @returns {string} The HTML without any script tags.
 */
/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

var parseHTML = function parseHTML(html, widgetSettings) {
  var widgetID = _cryptoJs2.default.MD5(JSON.stringify(widgetSettings)).toString();
  var container = (0, _handleDOM.getDOMContainer)('html-widget-' + widgetID);

  try {
    var parser = new DOMParser();
    // Parse the html string to a DOM object.
    var dom = parser.parseFromString((0, _decodeHTML2.default)(html), 'text/html');
    // How many onloads have been processed.
    var onloads = 0;

    var inlineScripts = [];
    var externalScripts = [];

    /**
     * Handles the onload events for external scripts.
     * @return {Array} The collection of external sripts.
     */
    var handleOnload = function handleOnload() {
      onloads += 1;

      /**
       * If there are no external scripts or all external
       * scripts are loaded, handle the inline scripts.
       */
      if (!externalScripts.length || onloads === externalScripts.length) {
        inlineScripts.forEach(function (scriptTag) {
          container.appendChild(scriptTag);
        });
      }

      return externalScripts;
    };

    // A collection of all the inline script tags.
    inlineScripts = (0, _handleDOM.getInlineScripts)(dom.childNodes);
    // A collection of all the external script tags.
    externalScripts = (0, _handleDOM.getExternalScripts)(dom.childNodes, handleOnload);

    // Append the external scripts.
    externalScripts.forEach(function (scriptTag) {
      container.appendChild(scriptTag);
    });

    return (0, _handleDOM.getHTMLContent)(dom.body.childNodes).innerHTML;
  } catch (err) {
    _Logger2.default.error(err);
    return html;
  }
};

exports.default = parseHTML;