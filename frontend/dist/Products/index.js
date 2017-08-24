'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsWidget = undefined;
var _jsxFileName = 'frontend/src/Products/index.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _I18n = require('@shopgate/pwa-common/components/I18n');

var _I18n2 = _interopRequireDefault(_I18n);

var _data = require('@shopgate/pwa-common/helpers/data');

var _DisplayOptions = require('@shopgate/pwa-common/constants/DisplayOptions');

var _ActionButton = require('../../../../../components/ActionButton');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _Headline = require('../../../../../components/Headline');

var _Headline2 = _interopRequireDefault(_Headline);

var _ProductGrid = require('./components/ProductGrid');

var _ProductGrid2 = _interopRequireDefault(_ProductGrid);

var _ProductList = require('./components/ProductList');

var _ProductList2 = _interopRequireDefault(_ProductList);

var _connector = require('./connector');

var _connector2 = _interopRequireDefault(_connector);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is licensed under the Apache 2.0 license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * The product widget component.
 */
var ProductsWidget = exports.ProductsWidget = function (_Component) {
  _inherits(ProductsWidget, _Component);

  /**
   * The constructor.
   * @param {Object} props The component props.
   */
  function ProductsWidget(props) {
    _classCallCheck(this, ProductsWidget);

    var _this = _possibleConstructorReturn(this, (ProductsWidget.__proto__ || Object.getPrototypeOf(ProductsWidget)).call(this, props));

    _this.getProducts = function () {
      var _this$props = _this.props,
          getProducts = _this$props.getProducts,
          id = _this$props.id;
      var _this$props$settings = _this.props.settings,
          productLimit = _this$props$settings.productLimit,
          queryParams = _this$props$settings.queryParams,
          queryType = _this$props$settings.queryType;


      var sort = (0, _data.transformDisplayOptions)(_this.props.settings.sortOrder);

      var options = {
        limit: productLimit,
        offset: _this.productCount,
        sort: sort
      };

      getProducts(queryType, queryParams, options, id);
    };

    _this.loadProducts = function () {
      _this.setState({
        fetching: true
      }, _this.getProducts);
    };

    _this.hasAllProducts = function () {
      return _this.props.totalProductCount !== null && _this.props.products.length >= _this.props.totalProductCount;
    };

    _this.renderMoreButton = function () {
      if (!_this.props.settings.showLoadMore || _this.hasAllProducts()) {
        return null;
      }

      return _react2.default.createElement(
        _ActionButton2.default,
        {
          loading: _this.state.fetching,
          onClick: _this.loadProducts,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        },
        _react2.default.createElement(_I18n2.default.Text, { string: 'product.load_more', __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        })
      );
    };

    _this.productCount = props.products.length;

    _this.state = {
      fetching: false
    };
    return _this;
  }

  /**
   * Request the products when the component mounts.
   */


  _createClass(ProductsWidget, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.products.length === 0) {
        this.loadProducts();
      }
    }

    /**
     * When we receive new products then we can adjust the state.
     * @param {Object} nextProps The next set of component props.
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // Set the total product count.
      this.totalProductCount = nextProps.totalProductCount;

      /**
       * Only update to stop 'fetching' when we receive new products or
       * if we have received all expected products.
       */
      if (this.props.products.length !== nextProps.products.length || nextProps.products.length === this.totalProductCount) {
        this.productCount = Math.min(nextProps.products.length, this.totalProductCount);

        this.setState({
          fetching: false
        });
      }
    }

    /**
     * Only update when we are fetching products or we have new products.
     * @param {Object} nextProps The next set of component props.
     * @param {Object} nextState The next component state..
     * @returns {boolean}
     */

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.state.fetching !== nextState.fetching || nextProps.products && !(0, _isEqual2.default)(this.props.products, nextProps.products);
    }

    /**
     * Build the params for requesting products and then make the request.
     */


    /**
     * Set the state accordingly and then call getProducts().
     */


    /**
     * Determines whether or not we already have all products.
     * @returns {boolean}
     */


    /**
     * Renders a 'Load More' button if there are more products to load.
     * @returns {JSX}
     */

  }, {
    key: 'render',


    /**
     * The render function.
     * @returns {JSX}
     */
    value: function render() {
      var products = this.props.products;

      // Don't render if we don't have any products.

      if (!products || !products.length) {
        return null;
      }

      // Only show the number of products that we want, not everything coming via props.
      var productSlice = products.slice(0, this.productCount);
      var _props$settings = this.props.settings,
          headline = _props$settings.headline,
          layout = _props$settings.layout,
          showName = _props$settings.showName,
          showPrice = _props$settings.showPrice,
          showReviews = _props$settings.showReviews;

      var flags = {
        name: showName,
        price: showPrice,
        reviews: showReviews
      };

      if (layout === _DisplayOptions.GRID_VIEW) {
        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            }
          },
          _react2.default.createElement(_Headline2.default, { text: headline, __source: {
              fileName: _jsxFileName,
              lineNumber: 190
            }
          }),
          _react2.default.createElement(_ProductGrid2.default, { products: productSlice, flags: flags, __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            }
          }),
          this.renderMoreButton()
        );
      } else if (layout === _DisplayOptions.LIST_VIEW) {
        // We have to overwrite some flags here because of the design of the Product List.
        flags.name = true;
        flags.manufacturer = false;

        return _react2.default.createElement(
          'div',
          { className: _style2.default.listView, __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            }
          },
          _react2.default.createElement(_Headline2.default, { text: headline, __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            }
          }),
          _react2.default.createElement(_ProductList2.default, { products: productSlice, flags: flags, __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            }
          }),
          this.renderMoreButton()
        );
      }

      return null;
    }
  }]);

  return ProductsWidget;
}(_react.Component);

ProductsWidget.propTypes = {
  getProducts: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired,
  settings: _propTypes2.default.shape().isRequired,
  products: _propTypes2.default.arrayOf(_propTypes2.default.shape()),
  totalProductCount: _propTypes2.default.number
};
ProductsWidget.defaultProps = {
  getProducts: function getProducts() {},
  products: null,
  totalProductCount: null };
exports.default = (0, _connector2.default)(ProductsWidget);