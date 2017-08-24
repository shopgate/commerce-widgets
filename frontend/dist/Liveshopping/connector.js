'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routedConnect = require('@shopgate/pwa-common/helpers/routedConnect');

var _routedConnect2 = _interopRequireDefault(_routedConnect);

var _getLiveshoppingProducts2 = require('@shopgate/pwa-common-commerce/product/actions/getLiveshoppingProducts');

var _getLiveshoppingProducts3 = _interopRequireDefault(_getLiveshoppingProducts2);

var _selectors = require('./selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @return {Object} The extended component props.
 */
var mapStateToProps = function mapStateToProps(state) {
  return {
    products: (0, _selectors.getProductsResult)(state).products
  };
};

/**
 * Connects the dispatch function to a callable function in the props.
 * @param {Function} dispatch The redux dispatch function.
 * @param {Object} props The component props.
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
    getLiveshoppingProducts: function getLiveshoppingProducts() {
      return dispatch((0, _getLiveshoppingProducts3.default)());
    }
  };
};

exports.default = (0, _routedConnect2.default)(mapStateToProps, mapDispatchToProps);