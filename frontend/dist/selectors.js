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

var getResultHash = function getResultHash(state, type, params, id) {
  var hashParams = {};
  var currentSort = (0, _history.getSortOrder)(state);
  var value = params.value,
      _params$sort = params.sort,
      sort = _params$sort === undefined ? currentSort : _params$sort;

  var transformedSort = (0, _data.transformDisplayOptions)(sort);

  switch (type) {
    case 1:
      {
        hashParams = {
          pipeline: 'getHighlightProducts',
          id: id
        };
        break;
      }

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

    case 4:
      {
        hashParams = {
          productIds: value,
          sort: transformedSort,
          id: id
        };

        break;
      }

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

  return (0, _redux.generateResultHash)(hashParams);
};

var getResultByHash = (0, _reselect.createSelector)(function (state) {
  return state.product;
}, getResultHash, function (productState, hash) {
  return productState.resultsByHash[hash];
});

var getProductsResult = exports.getProductsResult = (0, _reselect.createSelector)(function (state) {
  return state;
}, getResultHash, getResultByHash, _product.getPopulatedProductsResult);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getResultHash, 'getResultHash', 'src/selectors.js');

  __REACT_HOT_LOADER__.register(getResultByHash, 'getResultByHash', 'src/selectors.js');

  __REACT_HOT_LOADER__.register(getProductsResult, 'getProductsResult', 'src/selectors.js');
}();

;