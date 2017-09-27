'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var decodeHTML = function decodeHTML(input) {
  var e = document.createElement('div');

  e.innerHTML = input;

  return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
};

exports.default = decodeHTML;