'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'src/Products/components/ProductList/index.jsx';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _Iterator = require('../../../../../../../components/ProductList/components/Iterator');

var _Iterator2 = _interopRequireDefault(_Iterator);

var _Layout = require('../../../../../../../components/ProductList/components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductListWidget = (0, _pure2.default)(function (_ref) {
  var products = _ref.products,
      flags = _ref.flags;
  return _react2.default.createElement(
    _Layout2.default,
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    },
    products.map(function (product) {
      return _react2.default.createElement(_Iterator2.default, _extends({}, product, { display: flags, key: product.id, __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }));
    })
  );
});

ProductListWidget.propTypes = {
  products: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired,
  flags: _propTypes2.default.shape()
};

ProductListWidget.defaultProps = {
  flags: {}
};

var _default = ProductListWidget;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductListWidget, 'ProductListWidget', 'src/Products/components/ProductList/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Products/components/ProductList/index.jsx');
}();

;