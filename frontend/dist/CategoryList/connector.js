'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connect = require('@shopgate/pwa-common/components/Router/helpers/connect');

var _connect2 = _interopRequireDefault(_connect);

var _getCategory2 = require('@shopgate/pwa-common-commerce/category/actions/getCategory');

var _getCategory3 = _interopRequireDefault(_getCategory2);

var _selectors = require('@shopgate/pwa-common-commerce/category/selectors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getCategory: function getCategory(categoryId) {
      dispatch((0, _getCategory3.default)(categoryId));
    }
  };
};

var mapStateToProps = function mapStateToProps(state, props) {
  return {
    items: (0, _selectors.getCurrentCategories)(state, props)
  };
};

exports.default = (0, _connect2.default)(mapStateToProps, mapDispatchToProps);