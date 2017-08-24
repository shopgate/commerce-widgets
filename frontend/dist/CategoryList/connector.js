'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routedConnect = require('@shopgate/pwa-common/helpers/routedConnect');

var _routedConnect2 = _interopRequireDefault(_routedConnect);

var _getCategory2 = require('@shopgate/pwa-common-commerce/category/actions/getCategory');

var _getCategory3 = _interopRequireDefault(_getCategory2);

var _selectors = require('@shopgate/pwa-common-commerce/category/selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Connects the dispatch function to a calleble function in the props.
 * @param  {Function} dispatch The redux dispatch function.
 * @return {Object} The extended component props.
 */
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getCategory: function getCategory(categoryId) {
      dispatch((0, _getCategory3.default)(categoryId));
    }
  };
};

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props The component props.
 * @return {Object} The extended component props.
 */
/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    items: (0, _selectors.getCurrentCategories)(state, props)
  };
};

exports.default = (0, _routedConnect2.default)(mapStateToProps, mapDispatchToProps);