'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'frontend/src/Products/spec.jsx'; /**
                                                      * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                      *
                                                      * This source code is licensed under the Apache 2.0 license found in the
                                                      * LICENSE file in the root directory of this source tree.
                                                      */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

var _ProductGrid = require('./components/ProductGrid');

var _ProductGrid2 = _interopRequireDefault(_ProductGrid);

var _ProductList = require('./components/ProductList');

var _ProductList2 = _interopRequireDefault(_ProductList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ProductsWidget />', function () {
  var props = {
    id: 'someid',
    products: [],
    totalProductCount: null,
    settings: {
      headline: '',
      layout: 'grid',
      productLimit: 6,
      queryParams: 'Blue',
      queryType: 2
    }
  };

  it('should render the grid only when products are received', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index.ProductsWidget, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      }
    })));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_ProductGrid2.default).length).toBe(0);

    // Now give it a product...
    wrapper.setProps({
      products: [{}],
      totalProductCount: 1
    });

    expect(wrapper.find(_ProductGrid2.default).length).toBe(1);
  });

  it('should render the products in the list view', function () {
    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index.ProductsWidget, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      }
    })));

    // Change the layout to a list.
    wrapper.setProps({
      products: [{}],
      settings: {
        headline: '',
        layout: 'list'
      },
      totalProductCount: 1
    });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_ProductList2.default).length).toBe(1);
  });
});