'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'frontend/src/Products/components/ProductList/index.jsx'; /**
                                                                              * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                                              *
                                                                              * This source code is licensed under the Apache 2.0 license found in the
                                                                              * LICENSE file in the root directory of this source tree.
                                                                              */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _ProductListIterator = require('../../../../../../../components/ProductListIterator');

var _ProductListIterator2 = _interopRequireDefault(_ProductListIterator);

var _ProductListLayout = require('../../../../../../../components/ProductListLayout');

var _ProductListLayout2 = _interopRequireDefault(_ProductListLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The product list widget component.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
var ProductListWidget = (0, _pure2.default)(function (_ref) {
  var products = _ref.products,
      flags = _ref.flags;
  return _react2.default.createElement(
    _ProductListLayout2.default,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    products.map(function (product) {
      return _react2.default.createElement(_ProductListIterator2.default, _extends({}, product, { display: flags, key: product.id, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }));
    })
  );
});

ProductListWidget.propTypes = {
  products: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired,
  flags: _propTypes2.default.shape()
};

ProductListWidget.defaultProps = {
  flags: {}
};

exports.default = ProductListWidget;