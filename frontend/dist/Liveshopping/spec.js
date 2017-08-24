'use strict';

var _jsxFileName = 'frontend/src/Liveshopping/spec.jsx'; /**
                                                          * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                          *
                                                          * This source code is licensed under the Apache 2.0 license found in the
                                                          * LICENSE file in the root directory of this source tree.
                                                          */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Card = require('../../../../../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _PriceStriked = require('../../../../../components/PriceStriked');

var _PriceStriked2 = _interopRequireDefault(_PriceStriked);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mock the redux connect() method instead of providing a fake store.
jest.mock('Library/connectors/liveshopping', function () {
  return function (obj) {
    return obj;
  };
});

describe('<LiveshoppingWidget />', function () {
  /**
   * Mocks the liveshopping products pipeline request.
   */
  var getLiveshoppingProductsMock = function getLiveshoppingProductsMock() {};
  var settings = {};
  var products = [{
    id: '1234',
    name: 'First product',
    featuredImageUrl: 'http://placekitten.com/300/300',
    price: {
      currency: 'EUR',
      unitPriceStriked: 20,
      unitPriceMin: 0,
      unitPrice: 100
    },
    liveshoppings: [{
      from: 0,
      to: 123456789
    }]
  }, {
    id: '1235',
    name: 'Second product',
    featuredImageUrl: 'http://placekitten.com/300/300',
    price: {
      currency: 'EUR',
      unitPriceStriked: 20,
      unitPriceMin: 0,
      unitPrice: 100
    },
    liveshoppings: [{
      from: 0,
      to: 123456789
    }]
  }];

  it('should not render the widget without any data', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, {
      settings: settings,
      getLiveshoppingProducts: getLiveshoppingProductsMock,
      products: [],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_Card2.default).length).toBe(0);
  });

  it('should render the widget with no slider for one product', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, {
      settings: settings,
      getLiveshoppingProducts: getLiveshoppingProductsMock,
      products: [products[0]],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_Card2.default).length).toBe(1);
    expect(wrapper.find(_PriceStriked2.default).length).toBe(1);
  });

  it('should render the widget with a slider for multiple products', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, {
      settings: settings,
      getLiveshoppingProducts: getLiveshoppingProductsMock,
      products: products,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      }
    }));

    var expectedCards = products.length;

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_Card2.default).length).toBe(expectedCards);
    expect(wrapper.find(_PriceStriked2.default).length).toBe(expectedCards);
  });
});