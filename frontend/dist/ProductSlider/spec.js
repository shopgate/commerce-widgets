'use strict';

var _jsxFileName = 'frontend/src/ProductSlider/spec.jsx'; /**
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

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Mock the redux connect() method instead of providing a fake store.
jest.mock('Library/connectors/widgets/productSlider', function () {
  return function (obj) {
    return obj;
  };
});

describe('<ProductSlider />', function () {
  /**
   * Mocks the products pipeline request.
   */
  var getProductsMock = function getProductsMock() {};

  /**
   * Creates some fake settings.
   * @param {boolean} withHeadline Whether the headline argument should be provided.
   * @param {boolean} withName Whether the product names should be enabled.
   * @param {boolean} withPrice Whether the product prive should be enabled.
   * @param {boolean} withReviews Whether the product reviews should be enabled.
   * @return {Object} The settings object.
   */
  var getSettings = function getSettings() {
    var withHeadline = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    var withName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var withPrice = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var withReviews = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    var settings = {
      headline: '',
      layout: '',
      queryType: 1,
      queryParams: '',
      showName: withName,
      showPrice: withPrice,
      showReviews: withReviews,
      sortOrder: 'asc',
      sliderSettings: {
        autostart: false,
        delay: '1000',
        loop: false
      }
    };

    if (withHeadline) {
      // Add a headline parameter.
      settings.headline = 'Lorem ipsum';
    }

    return settings;
  };

  /**
   * Creates a set of fake products.
   * @param {number} amount The number of products to create.
   * @param {Array} products An array to append the generated products to.
   * @returns {Array} The created products.
   */
  var createProducts = function createProducts() {
    var amount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    var products = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (amount <= 0) {
      return products;
    }

    products.push({
      id: '1234',
      name: 'First product',
      featuredImageUrl: 'http://placekitten.com/300/300',
      rating: {
        count: 100,
        average: 0.5
      },
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
    });

    return createProducts(amount - 1, products);
  };

  it('should call the products callback on mount', function () {
    var getProducts = jest.fn();

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, {
      settings: getSettings(),
      getProducts: getProducts,
      products: [],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      }
    }));

    wrapper.instance().componentDidMount();

    expect(wrapper).toMatchSnapshot();
    expect(getProducts.mock.calls.length).toBe(1);
  });

  it('should not render the widget without any data', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, {
      settings: getSettings(),
      getProducts: getProductsMock,
      products: createProducts(0),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_Card2.default).length).toBe(0);
  });

  it('should render the widget with data', function () {
    var products = createProducts();

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, {
      settings: getSettings(),
      getProducts: getProductsMock,
      products: products,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_Card2.default).length).toBe(products.length);
  });

  it('should not render an empty headline', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, {
      settings: getSettings(false),
      getProducts: getProductsMock,
      products: createProducts(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h3').length).toBe(0);
  });

  it('should render the headline', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, {
      settings: getSettings(true),
      getProducts: getProductsMock,
      products: createProducts(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h3').length).toBe(1);
  });

  it('should limit output to a maximum of 30 products', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, {
      settings: getSettings(true),
      getProducts: getProductsMock,
      products: createProducts(40),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_Card2.default).length).toBe(30);
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;