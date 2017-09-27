'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Slider = require('@shopgate/pwa-common/components/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _Card = require('../../../../../../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _ProductCard = require('../../../../../../components/ProductCard');

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

var createSliderItem = function createSliderItem(product, _ref) {
  var showName = _ref.showName,
      showPrice = _ref.showPrice,
      showReviews = _ref.showReviews;

  var key = 's' + product.id;

  return _jsx(_Slider2.default.Item, {
    className: _style2.default.sliderItem
  }, key, _jsx(_Card2.default, {
    className: _style2.default.card
  }, void 0, _jsx(_ProductCard2.default, {
    product: product,
    hideName: !showName,
    hidePrice: !showPrice,
    hideRating: !showReviews,
    titleRows: 2
  })));
};

var ProductSlider = function (_React$Component) {
  _inherits(ProductSlider, _React$Component);

  function ProductSlider() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, ProductSlider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = ProductSlider.__proto__ || Object.getPrototypeOf(ProductSlider)).call.apply(_ref2, [this].concat(args))), _this), _this.renderHeadline = function () {
      if (_this.props.settings.headline) {
        return _jsx('h3', {
          className: _style2.default.headline
        }, void 0, _this.props.settings.headline);
      }

      return null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ProductSlider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var getProducts = this.props.getProducts;
      var _props$settings = this.props.settings,
          queryType = _props$settings.queryType,
          queryParams = _props$settings.queryParams;


      getProducts(queryType, queryParams, {
        sort: (0, _data.transformDisplayOptions)(this.props.settings.sortOrder)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var settings = this.props.settings;
      var sliderSettings = settings.sliderSettings;

      var items = this.props.products.slice(0, 30).map(function (product) {
        return createSliderItem(product, settings);
      });

      if (!items.length) {
        return null;
      }

      return _jsx('div', {
        className: _style2.default.slider
      }, void 0, this.renderHeadline(), _jsx(_Slider2.default, {
        autoPlay: sliderSettings.autoPlay,
        loop: false,
        indicators: false,
        controls: false,
        interval: Number.parseInt(sliderSettings.delay, 10),
        snapItems: false,
        slidesPerView: 2.3,
        classNames: { container: _style2.default.sliderContainer }
      }, void 0, items));
    }
  }]);

  return ProductSlider;
}(_react2.default.Component);

ProductSlider.propTypes = {
  getProducts: _propTypes2.default.func.isRequired,

  settings: _propTypes2.default.shape({
    headline: _propTypes2.default.string.isRequired,
    layout: _propTypes2.default.string.isRequired,
    queryParams: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
    queryType: _propTypes2.default.number.isRequired,
    showName: _propTypes2.default.bool.isRequired,
    showPrice: _propTypes2.default.bool.isRequired,
    showReviews: _propTypes2.default.bool.isRequired,
    sortOrder: _propTypes2.default.string.isRequired,
    sliderSettings: _propTypes2.default.shape({
      autostart: _propTypes2.default.bool.isRequired,
      delay: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]).isRequired
    }).isRequired
  }).isRequired,
  products: _propTypes2.default.arrayOf(_propTypes2.default.shape())
};
ProductSlider.defaultProps = {
  products: []
};
exports.default = (0, _connector2.default)(ProductSlider);