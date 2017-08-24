'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductsWidget = undefined;

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = 'frontend/src/Products/index.jsx';

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ProductsWidget: {
    displayName: 'ProductsWidget'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'frontend/src/Products/index.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
} /**
   * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
   *
   * This source code is licensed under the Apache 2.0 license found in the
   * LICENSE file in the root directory of this source tree.
   */

/**
 * The product widget component.
 */
var ProductsWidget = exports.ProductsWidget = _wrapComponent('ProductsWidget')((_temp = _class = function (_Component) {
  _inherits(ProductsWidget, _Component);

  /**
   * The constructor.
   * @param {Object} props The component props.
   */
  function ProductsWidget(props) {
    _classCallCheck(this, ProductsWidget);

    var _this = _possibleConstructorReturn(this, (ProductsWidget.__proto__ || Object.getPrototypeOf(ProductsWidget)).call(this, props));

    _this.getProducts = function () {
      return _this.__getProducts__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.loadProducts = function () {
      return _this.__loadProducts__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.hasAllProducts = function () {
      return _this.__hasAllProducts__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.renderMoreButton = function () {
      return _this.__renderMoreButton__REACT_HOT_LOADER__.apply(_this, arguments);
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

  }, {
    key: '__getProducts__REACT_HOT_LOADER__',


    /**
     * Set the state accordingly and then call getProducts().
     */
    value: function __getProducts__REACT_HOT_LOADER__() {
      var _props = this.props,
          getProducts = _props.getProducts,
          id = _props.id;
      var _props$settings = this.props.settings,
          productLimit = _props$settings.productLimit,
          queryParams = _props$settings.queryParams,
          queryType = _props$settings.queryType;


      var sort = (0, _data.transformDisplayOptions)(this.props.settings.sortOrder);

      var options = {
        limit: productLimit,
        offset: this.productCount,
        sort: sort
      };

      getProducts(queryType, queryParams, options, id);
    }
  }, {
    key: '__loadProducts__REACT_HOT_LOADER__',


    /**
     * Determines whether or not we already have all products.
     * @returns {boolean}
     */
    value: function __loadProducts__REACT_HOT_LOADER__() {
      this.setState({
        fetching: true
      }, this.getProducts);
    }
  }, {
    key: '__hasAllProducts__REACT_HOT_LOADER__',


    /**
     * Renders a 'Load More' button if there are more products to load.
     * @returns {JSX}
     */
    value: function __hasAllProducts__REACT_HOT_LOADER__() {
      return this.props.totalProductCount !== null && this.props.products.length >= this.props.totalProductCount;
    }
  }, {
    key: '__renderMoreButton__REACT_HOT_LOADER__',


    /**
     * The render function.
     * @returns {JSX}
     */
    value: function __renderMoreButton__REACT_HOT_LOADER__() {
      if (!this.props.settings.showLoadMore || this.hasAllProducts()) {
        return null;
      }

      return _react3.default.createElement(
        _ActionButton2.default,
        {
          loading: this.state.fetching,
          onClick: this.loadProducts,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          }
        },
        _react3.default.createElement(_I18n2.default.Text, { string: 'product.load_more', __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          }
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var products = this.props.products;

      // Don't render if we don't have any products.

      if (!products || !products.length) {
        return null;
      }

      // Only show the number of products that we want, not everything coming via props.
      var productSlice = products.slice(0, this.productCount);
      var _props$settings2 = this.props.settings,
          headline = _props$settings2.headline,
          layout = _props$settings2.layout,
          showName = _props$settings2.showName,
          showPrice = _props$settings2.showPrice,
          showReviews = _props$settings2.showReviews;

      var flags = {
        name: showName,
        price: showPrice,
        reviews: showReviews
      };

      if (layout === _DisplayOptions.GRID_VIEW) {
        return _react3.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            }
          },
          _react3.default.createElement(_Headline2.default, { text: headline, __source: {
              fileName: _jsxFileName,
              lineNumber: 190
            }
          }),
          _react3.default.createElement(_ProductGrid2.default, { products: productSlice, flags: flags, __source: {
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

        return _react3.default.createElement(
          'div',
          { className: _style2.default.listView, __source: {
              fileName: _jsxFileName,
              lineNumber: 201
            }
          },
          _react3.default.createElement(_Headline2.default, { text: headline, __source: {
              fileName: _jsxFileName,
              lineNumber: 202
            }
          }),
          _react3.default.createElement(_ProductList2.default, { products: productSlice, flags: flags, __source: {
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
}(_react2.Component), _class.propTypes = {
  getProducts: _propTypes2.default.func.isRequired,
  id: _propTypes2.default.string.isRequired,
  settings: _propTypes2.default.shape().isRequired,
  products: _propTypes2.default.arrayOf(_propTypes2.default.shape()),
  totalProductCount: _propTypes2.default.number
}, _class.defaultProps = {
  getProducts: function getProducts() {},
  products: null,
  totalProductCount: null }, _temp));

var _default = (0, _connector2.default)(ProductsWidget);

exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ProductsWidget, 'ProductsWidget', 'frontend/src/Products/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'frontend/src/Products/index.jsx');
}();

;