'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

  __REACT_HOT_LOADER__.register(decodeHTML, 'decodeHTML', 'src/Html/helpers/decodeHTML.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Html/helpers/decodeHTML.js');
}();

;