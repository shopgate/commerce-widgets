'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connect = require('@shopgate/pwa-common/components/Router/helpers/connect');

var _connect2 = _interopRequireDefault(_connect);

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

exports.default = (0, _connect2.default)(mapStateToProps, mapDispatchToProps);