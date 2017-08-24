'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'frontend/src/Products/components/ProductGrid/index.jsx'; /**
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

var _ProductGridIterator = require('../../../../../../../components/ProductGridIterator');

var _ProductGridIterator2 = _interopRequireDefault(_ProductGridIterator);

var _ProductGridLayout = require('../../../../../../../components/ProductGridLayout');

var _ProductGridLayout2 = _interopRequireDefault(_ProductGridLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The product grid widget component.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
var ProductGridWidget = (0, _pure2.default)(function (_ref) {
  var products = _ref.products,
      flags = _ref.flags;
  return _react2.default.createElement(
    _ProductGridLayout2.default,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    products.map(function (product) {
      return _react2.default.createElement(_ProductGridIterator2.default, _extends({}, product, { display: flags, key: product.id, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }));
    })
  );
});

ProductGridWidget.propTypes = {
  products: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired,
  flags: _propTypes2.default.shape()
};

ProductGridWidget.defaultProps = {
  flags: {}
};

exports.default = ProductGridWidget;