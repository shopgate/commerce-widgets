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

var mapStateToProps = function mapStateToProps(state) {
  return {
    products: (0, _selectors.getProductsResult)(state).products
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getLiveshoppingProducts: function getLiveshoppingProducts() {
      return dispatch((0, _getLiveshoppingProducts3.default)());
    }
  };
};

exports.default = (0, _routedConnect2.default)(mapStateToProps, mapDispatchToProps);