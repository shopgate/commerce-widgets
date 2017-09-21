'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductsResult = undefined;

var _reselect = require('reselect');

var _redux = require('@shopgate/pwa-common/helpers/redux');

var _history = require('@shopgate/pwa-common/selectors/history');

var _product = require('@shopgate/pwa-common-commerce/product/selectors/product');

var getResultHash = function getResultHash(state) {
  return (0, _redux.generateResultHash)({
    pipeline: 'getLiveshoppingProducts',
    sort: (0, _history.getSortOrder)(state)
  });
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

  __REACT_HOT_LOADER__.register(getResultHash, 'getResultHash', 'src/Liveshopping/selectors.js');

  __REACT_HOT_LOADER__.register(getResultByHash, 'getResultByHash', 'src/Liveshopping/selectors.js');

  __REACT_HOT_LOADER__.register(getProductsResult, 'getProductsResult', 'src/Liveshopping/selectors.js');
}();

;