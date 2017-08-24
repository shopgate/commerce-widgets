'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsResult = undefined;

var _reselect = require('reselect');

var _redux = require('@shopgate/pwa-common/helpers/redux');

var _history = require('@shopgate/pwa-common/selectors/history');

var _product = require('@shopgate/pwa-common-commerce/product/selectors/product');

/**
 * Retrieves the result hash.
 * @param {Object} state The application state.
 * @returns {string} The result hash.
 */
/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

var getResultHash = function getResultHash(state) {
  return (0, _redux.generateResultHash)({
    pipeline: 'getLiveshoppingProducts',
    sort: (0, _history.getSortOrder)(state)
  });
};

/**
 * Retrieves the result by hash.
 * @param {Object} state The application state.
 * @param {Object} props The component props.
 * @returns {Object} The result.
 */
var getResultByHash = (0, _reselect.createSelector)(function (state) {
  return state.product;
}, getResultHash, function (productState, hash) {
  return productState.resultsByHash[hash];
});

/**
 * Retrieves the populated product result.
 * @param {Object} state The application state.
 * @param {Object} props The component props.
 * @returns {Object} The product result.
 */
var getProductsResult = exports.getProductsResult = (0, _reselect.createSelector)(function (state) {
  return state;
}, getResultHash, getResultByHash, _product.getPopulatedProductsResult);