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
    getProducts: function getProducts(type, value, sort) {
      return dispatch((0, _getProductsByQuery2.default)(type, value, sort));
    }
  };
};

var _default = (0, _routedConnect2.default)(mapStateToProps, mapDispatchToProps);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/Products/connector.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'src/Products/connector.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Products/connector.js');
}();

;