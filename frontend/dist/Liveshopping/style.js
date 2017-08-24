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

var cardsWrapper = (0, _glamor2.default)({
  padding: '16px 0px 0px'
}).toString();

var card = (0, _glamor2.default)({
  padding: '0px 10px'
}).toString();

var pane = {
  width: '50%',
  position: 'relative',
  background: _colors2.default.light
};

var discountBadge = (0, _glamor2.default)({
  width: 'auto',
  fontWeight: 400,
  marginBottom: _variables2.default.gap.small,
  borderRadius: 3
}).toString();

var imagePane = (0, _glamor2.default)(_extends({}, pane)).toString();

var infoPane = (0, _glamor2.default)(_extends({}, pane, {
  padding: 16
})).toString();

var priceWrapper = (0, _glamor2.default)({
  position: 'absolute',
  left: 15,
  bottom: 15,
  right: 15
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
  fontSize: '1.25rem'
})).toString();

var cardTitle = (0, _glamor2.default)({
  fontWeight: 500,
  lineHeight: 1.25,
  marginBottom: _variables2.default.gap.small * 0.5
}).toString();

var timer = (0, _glamor2.default)({
  fontSize: '0.875rem',
  color: _colors2.default.primary,
  fontStyle: 'italic',
  fontWeight: 500
}).toString();

var indicator = {
  position: 'relative',
  left: 0,
  bottom: 0,
  transform: 'translateX(0)',
  textAlign: 'center'
};

exports.default = {
  card: card,
  discountBadge: discountBadge,
  imagePane: imagePane,
  infoPane: infoPane,
  indicator: indicator,
  priceWrapper: priceWrapper,
  priceGrid: priceGrid,
  priceStrikedItem: priceStrikedItem,
  priceItem: priceItem,
  priceStriked: priceStriked,
  price: price,
  cardsWrapper: cardsWrapper,
  cardTitle: cardTitle,
  timer: timer
};