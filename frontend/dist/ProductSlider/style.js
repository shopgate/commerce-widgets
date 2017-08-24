'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the Apache 2.0 license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   */

var _glamor = require('glamor');

var _glamor2 = _interopRequireDefault(_glamor);

var _colors = require('../../../../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _variables = require('../../../../../styles/variables');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sliderContainer = (0, _glamor2.default)({
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative',
  paddingBottom: 8
}).toString();

var slider = (0, _glamor2.default)({
  width: '100%',
  flex: 1,
  paddingTop: 16,
  paddingBottom: 16
}).toString();

var sliderItem = (0, _glamor2.default)({
  width: '50%'
}).toString();

var productInfo = (0, _glamor2.default)({
  padding: 15
}).toString();

var productName = (0, _glamor2.default)({
  fontWeight: 500
}).toString();

var priceGrid = (0, _glamor2.default)({
  alignItems: 'flex-end'
}).toString();

var priceStrikedItem = (0, _glamor2.default)({
  flexGrow: 1
}).toString();

var priceItem = (0, _glamor2.default)({
  flexGrow: 1,
  textAlign: 'right'
}).toString();

var priceBase = (0, _glamor2.default)({
  padding: '0 15px'
}).toString();

var priceStriked = (0, _glamor2.default)(_extends({}, priceBase, {
  fontSize: '0.875rem'
})).toString();

var price = (0, _glamor2.default)(_extends({}, priceBase, {
  color: _colors2.default.primary,
  fontSize: '1rem'
})).toString();

var card = (0, _glamor2.default)({
  background: '#FFF',
  height: '100%',
  margin: '0px 8px'
}).toString();

var headline = (0, _glamor2.default)({
  fontSize: 18,
  margin: '0 0 ' + _variables2.default.gap.big + 'px',
  textAlign: 'center'
}).toString();

exports.default = {
  card: card,
  headline: headline,
  sliderContainer: sliderContainer,
  slider: slider,
  sliderItem: sliderItem,
  productInfo: productInfo,
  productName: productName,
  priceGrid: priceGrid,
  priceStrikedItem: priceStrikedItem,
  priceItem: priceItem,
  priceBase: priceBase,
  priceStriked: priceStriked,
  price: price
};