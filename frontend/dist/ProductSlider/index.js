'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = 'frontend/src/ProductSlider/index.jsx',
    _class,
    _temp2;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Slider = require('@shopgate/pwa-common/components/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _Card = require('../../../../../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _ProductCard = require('../../../../../components/ProductCard');

var _ProductCard2 = _interopRequireDefault(_ProductCard);

var _data = require('@shopgate/pwa-common/helpers/data');

var _connector = require('./connector');

var _connector2 = _interopRequireDefault(_connector);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ProductSlider: {
    displayName: 'ProductSlider'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'frontend/src/ProductSlider/index.jsx',
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
 * Creates an item for a single product.
 * @param {Object} product The product data.
 * @param {boolean} settings.showName Show the product name?
 * @param {boolean} settings.showPrice Show the product price?
 * @param {boolean} settings.showReviews Show the product reviews?
 * @return {JSX} The rendered product card.
 */
var createSliderItem = function createSliderItem(product, _ref) {
  var showName = _ref.showName,
      showPrice = _ref.showPrice,
      showReviews = _ref.showReviews;

  var key = 's' + product.id;

  return _react3.default.createElement(
    _Slider2.default.Item,
    { key: key, className: _style2.default.sliderItem, __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      }
    },
    _react3.default.createElement(
      _Card2.default,
      { className: _style2.default.card, __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        }
      },
      _react3.default.createElement(_ProductCard2.default, {
        product: product,
        hideName: !showName,
        hidePrice: !showPrice,
        hideRating: !showReviews,
        titleRows: 2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      })
    )
  );
};

/**
 * The core product slider widget.
 */

var ProductSlider = _wrapComponent('ProductSlider')((_temp2 = _class = function (_React$Component) {
  _inherits(ProductSlider, _React$Component);

  function ProductSlider() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ProductSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ProductSlider.__proto__ || Object.getPrototypeOf(ProductSlider)).call.apply(_ref2, [this].concat(args))), _this), _this.renderHeadline = function () {
      var _this2;

      return (_this2 = _this).__renderHeadline__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProductSlider, [{
    key: 'componentDidMount',


    /**
     * Called when the component is mounted, requests the products.
     */
    value: function componentDidMount() {
      var getProducts = this.props.getProducts;
      var _props$settings = this.props.settings,
          queryType = _props$settings.queryType,
          queryParams = _props$settings.queryParams;


      getProducts(queryType, queryParams, {
        sort: (0, _data.transformDisplayOptions)(this.props.settings.sortOrder)
      });
    }

    /**
     * Renders a headline if we have one.
     * @returns {JSX}
     */

  }, {
    key: '__renderHeadline__REACT_HOT_LOADER__',


    /**
     * Renders the widget.
     * @return {JSX}
     */
    value: function __renderHeadline__REACT_HOT_LOADER__() {
      if (this.props.settings.headline) {
        return _react3.default.createElement(
          'h3',
          { className: _style2.default.headline, __source: {
              fileName: _jsxFileName,
              lineNumber: 101
            }
          },
          this.props.settings.headline
        );
      }

      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var settings = this.props.settings;
      var sliderSettings = settings.sliderSettings;

      // Create the slides for each product, only displays the first 30 products.
      var items = this.props.products.slice(0, 30).map(function (product) {
        return createSliderItem(product, settings);
      });

      if (!items.length) {
        return null;
      }

      // Finally, build the slider.
      return _react3.default.createElement(
        'div',
        { className: _style2.default.slider, __source: {
            fileName: _jsxFileName,
            lineNumber: 129
          }
        },
        this.renderHeadline(),
        _react3.default.createElement(
          _Slider2.default,
          {
            autoPlay: sliderSettings.autoPlay,
            loop: false,
            indicators: false,
            controls: false,
            interval: Number.parseInt(sliderSettings.delay, 10),
            snapItems: false,
            slidesPerView: 2.3,
            classNames: { container: _style2.default.sliderContainer },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 131
            }
          },
          items
        )
      );
    }
  }]);

  return ProductSlider;
}(_react3.default.Component), _class.propTypes = {
  getProducts: _propTypes2.default.func.isRequired,
  // The settings as received by the pipeline request
  settings: _propTypes2.default.shape({
    headline: _propTypes2.default.string.isRequired, // The headline of the product slider.
    layout: _propTypes2.default.string.isRequired, // The layout of the product slider.
    queryParams: _propTypes2.default.oneOfType([// The query parameters for this slider.
    _propTypes2.default.string, _propTypes2.default.array]),
    queryType: _propTypes2.default.number.isRequired, // The query type ID.
    showName: _propTypes2.default.bool.isRequired, // Should the product name be displayed?
    showPrice: _propTypes2.default.bool.isRequired, // Should the product price be displayed?
    showReviews: _propTypes2.default.bool.isRequired, // Should the user ratings be displayed?
    sortOrder: _propTypes2.default.string.isRequired, // The sort order.
    sliderSettings: _propTypes2.default.shape({
      autostart: _propTypes2.default.bool.isRequired, // Should the slider start automatically?
      delay: _propTypes2.default.oneOfType([// The delay between the automatic slides loops
      _propTypes2.default.string, _propTypes2.default.number]).isRequired
    }).isRequired
  }).isRequired,
  products: _propTypes2.default.arrayOf(_propTypes2.default.shape())
}, _class.defaultProps = {
  products: []
}, _temp2));

var _default = (0, _connector2.default)(ProductSlider);

exports.default = _default;
;

var _temp3 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createSliderItem, 'createSliderItem', 'frontend/src/ProductSlider/index.jsx');

  __REACT_HOT_LOADER__.register(ProductSlider, 'ProductSlider', 'frontend/src/ProductSlider/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'frontend/src/ProductSlider/index.jsx');
}();

;