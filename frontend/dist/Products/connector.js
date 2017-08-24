'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routedConnect = require('@shopgate/pwa-common/helpers/routedConnect');

var _routedConnect2 = _interopRequireDefault(_routedConnect);

var _getProductsByQuery = require('@shopgate/pwa-common-commerce/product/actions/getProductsByQuery');

var _getProductsByQuery2 = _interopRequireDefault(_getProductsByQuery);

var _selectors = require('../selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The component properties.
 * @return {Object} The extended component props.
 */
var mapStateToProps = function mapStateToProps(state, props) {
  return {
    products: (0, _selectors.getProductsResult)(state, props.settings.queryType, {
      sort: props.settings.sortOrder,
      value: props.settings.queryParams
    }).products
  };
};

/**
 * Maps the contents of the state to the component props.
 * @param  {Function} dispatch The redux dispatch function.
 * @return {Object} The extended component props.
 */
/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProducts: function getProducts(type, value, sort) {
      return dispatch((0, _getProductsByQuery2.default)(type, value, sort));
    }
  };
};

exports.default = (0, _routedConnect2.default)(mapStateToProps, mapDispatchToProps);