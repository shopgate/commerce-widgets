'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _helpers = require('@shopgate/pwa-core/helpers');

var _cryptoJs = require('crypto-js');

var _cryptoJs2 = _interopRequireDefault(_cryptoJs);

var _decodeHTML = require('./decodeHTML');

var _decodeHTML2 = _interopRequireDefault(_decodeHTML);

var _handleDOM = require('./handleDOM');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parseHTML = function parseHTML(html, widgetSettings) {
  var widgetID = _cryptoJs2.default.MD5(JSON.stringify(widgetSettings)).toString();
  var container = (0, _handleDOM.getDOMContainer)('html-widget-' + widgetID);

  try {
    var parser = new DOMParser();

    var dom = parser.parseFromString((0, _decodeHTML2.default)(html), 'text/html');

    var onloads = 0;

    var inlineScripts = [];
    var externalScripts = [];

    var handleOnload = function handleOnload() {
      onloads += 1;

      if (!externalScripts.length || onloads === externalScripts.length) {
        inlineScripts.forEach(function (scriptTag) {
          container.appendChild(scriptTag);
        });
      }

      return externalScripts;
    };

    inlineScripts = (0, _handleDOM.getInlineScripts)(dom.childNodes);

    externalScripts = (0, _handleDOM.getExternalScripts)(dom.childNodes, handleOnload);

    externalScripts.forEach(function (scriptTag) {
      container.appendChild(scriptTag);
    });

    return (0, _handleDOM.getHTMLContent)(dom.body.childNodes).innerHTML;
  } catch (err) {
    _helpers.logger.error(err);
    return html;
  }
};

var _default = parseHTML;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(parseHTML, 'parseHTML', 'src/Html/helpers/parseHTML.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Html/helpers/parseHTML.js');
}();

;