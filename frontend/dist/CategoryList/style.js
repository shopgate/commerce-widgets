'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamor = require('glamor');

var _colors = require('../../../../../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _variables = require('../../../../../../styles/variables');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var container = (0, _glamor.css)({
  background: _colors2.default.light
}).toString();

var headline = (0, _glamor.css)({
  fontSize: 18,
  padding: _variables2.default.gap.big + 'px 0 0',
  marginTop: 0,
  textAlign: 'center'
}).toString();

exports.default = {
  container: container,
  headline: headline
};