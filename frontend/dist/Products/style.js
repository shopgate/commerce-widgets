'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamor = require('glamor');

var _colors = require('../../../../../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listView = (0, _glamor.css)({
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