'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsResult = undefined;

var _reselect = require('reselect');

var _redux = require('@shopgate/pwa-common/helpers/redux');

var _data = require('@shopgate/pwa-common/helpers/data');

var _history = require('@shopgate/pwa-common/selectors/history');

var _product = require('@shopgate/pwa-common-commerce/product/selectors/product');

/**
 * Retrieves the result hash.
 * @param {Object} state The application state.
 * @param {number} type The query type.
 * @param {Object} params The query params.
 * @param {string} params.sort The sort order of the query.
 * @param {string} params.value The query parameters, depends on the query type.
 * @param {string} id A unique id for the component that is using this action.
 * @returns {string} The result hash.
 */
var getResultHash = function getResultHash(state, type, params, id) {
  var hashParams = {};
  var currentSort = (0, _history.getSortOrder)(state);
  var value = params.value,
      _params$sort = params.sort,
      sort = _params$sort === undefined ? currentSort : _params$sort;

  var transformedSort = (0, _data.transformDisplayOptions)(sort);

  // Create the hash parameters based on the query type and parameters.
  switch (type) {
    // Product highlights
    case 1:
      {
        hashParams = {
          pipeline: 'getHighlightProducts',
          id: id
        };
        break;
      }

    // Search phrase
    case 2:
    case 3:
      {
        hashParams = {
          searchPhrase: value,
          sort: transformedSort,
          id: id
        };

        break;
      }

    // Product ID's
    case 4:
      {
        hashParams = {
          productIds: value,
          sort: transformedSort,
          id: id
        };

        break;
      }

    // Category
    case 5:
      {
        hashParams = {
          categoryId: value,
          sort: transformedSort,
          id: id
        };

        break;
      }
    default:
  }

  // Generate the hash string.
  return (0, _redux.generateResultHash)(hashParams);
};

/**
 * Retrieves the result by hash.
 * @param {Object} state The application state.
 * @param {Object} props The component props.
 * @returns {Object} The result.
 */
/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

var getResultByHash = (0, _reselect.createSelector)(function (state) {
  return state.product;
}, getResultHash, function (productState, hash) {
  return productState.resultsByHash[hash];
});

/**
 * Retrieves the populated product result.
 * @param {Object} state The application state.
 * @param {Object} params The query parameters.
 * @returns {Object} The product result.
 */
var getProductsResult = exports.getProductsResult = (0, _reselect.createSelector)(function (state) {
  return state;
}, getResultHash, getResultByHash, _product.getPopulatedProductsResult);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getResultHash, 'getResultHash', 'frontend/src/selectors.js');

  __REACT_HOT_LOADER__.register(getResultByHash, 'getResultByHash', 'frontend/src/selectors.js');

  __REACT_HOT_LOADER__.register(getProductsResult, 'getProductsResult', 'frontend/src/selectors.js');
}();

;