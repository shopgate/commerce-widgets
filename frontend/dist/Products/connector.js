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

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    products: (0, _selectors.getProductsResult)(state, props.settings.queryType, {
      sort: props.settings.sortOrder,
      value: props.settings.queryParams
    }).products
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getProducts: function getProducts(type, value, options, id) {
      return dispatch((0, _getProductsByQuery2.default)(type, value, options, id));
    }
  };
};

exports.default = (0, _routedConnect2.default)(mapStateToProps, mapDispatchToProps);