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

var _CountdownTimer = require('@shopgate/pwa-common/components/CountdownTimer');

var _CountdownTimer2 = _interopRequireDefault(_CountdownTimer);

var _Ellipsis = require('@shopgate/pwa-common/components/Ellipsis');

var _Ellipsis2 = _interopRequireDefault(_Ellipsis);

var _Link = require('@shopgate/pwa-common/components/Router/components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Grid = require('@shopgate/pwa-common/components/Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _data = require('@shopgate/pwa-common/helpers/data');

var _ImageSlider = require('../../../../../../components/ImageSlider');

var _ImageSlider2 = _interopRequireDefault(_ImageSlider);

var _Card = require('../../../../../../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _DiscountBadge = require('../../../../../../components/DiscountBadge');

var _DiscountBadge2 = _interopRequireDefault(_DiscountBadge);

var _Price = require('../../../../../../components/Price');

var _Price2 = _interopRequireDefault(_Price);

var _PriceStriked = require('../../../../../../components/PriceStriked');

var _PriceStriked2 = _interopRequireDefault(_PriceStriked);

var _ProductImage = require('../../../../../../components/ProductImage');

var _ProductImage2 = _interopRequireDefault(_ProductImage);

var _connector = require('./connector');

var _connector2 = _interopRequireDefault(_connector);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getLiveshoppingTimeout = function getLiveshoppingTimeout(liveshoppings) {
  var now = Date.now();

  var result = liveshoppings.reduce(function (best, item) {
    var from = new Date(item.from).getTime();
    var to = new Date(item.to).getTime();

    if (from <= now && to >= now) {
      return Math.max(best, to);
    }

    return best;
  }, null);

  return Math.floor(result / 1000);
};

var createProductSliderItem = function createProductSliderItem(_ref, timeout) {
  var id = _ref.id,
      name = _ref.name,
      featuredImageUrl = _ref.featuredImageUrl,
      price = _ref.price;

  var priceStriked = price.unitPriceStriked > 0 ? price.unitPriceStriked : price.msrp;

  return _jsx('div', {
    className: _style2.default.card
  }, id, _jsx(_Card2.default, {}, void 0, _jsx(_Link2.default, {
    href: '/item/' + (0, _data.bin2hex)(id)
  }, void 0, _jsx(_Grid2.default, {}, void 0, _jsx(_Grid2.default.Item, {
    className: _style2.default.imagePane
  }, void 0, _jsx(_ProductImage2.default, {
    src: featuredImageUrl,
    alt: name
  })), _jsx(_Grid2.default.Item, {
    className: _style2.default.infoPane
  }, void 0, price.discount > 0 ? _jsx(_DiscountBadge2.default, {
    text: 'liveshopping.discount_badge',
    discount: price.discount,
    display: 'big',
    className: _style2.default.discountBadge
  }) : null, _jsx(_Ellipsis2.default, {
    rows: 2,
    className: _style2.default.cardTitle
  }, void 0, name), timeout ? _jsx('span', {
    className: _style2.default.timer
  }, void 0, _jsx(_CountdownTimer2.default, {
    timeout: timeout
  })) : null, _jsx('div', {
    className: _style2.default.priceWrapper
  }, void 0, _jsx(_Grid2.default, {
    className: _style2.default.priceGrid
  }, void 0, priceStriked > 0 ? _jsx(_Grid2.default.Item, {
    className: _style2.default.priceStrikedItem
  }, void 0, _jsx(_PriceStriked2.default, {
    className: _style2.default.priceStriked,
    value: priceStriked,
    currency: price.currency
  })) : null, _jsx(_Grid2.default.Item, {
    className: _style2.default.priceItem
  }, void 0, _jsx(_Price2.default, {
    className: priceStriked > 0 ? _style2.default.price : '',
    unitPrice: price.unitPrice,
    unitPriceMin: price.unitPriceMin,
    currency: price.currency
  })))))))));
};

createProductSliderItem.propTypes = {
  featuredImageUrl: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  price: _propTypes2.default.shape().isRequired
};

var LiveshoppingWidget = function (_React$Component) {
  _inherits(LiveshoppingWidget, _React$Component);

  function LiveshoppingWidget() {
    _classCallCheck(this, LiveshoppingWidget);

    return _possibleConstructorReturn(this, (LiveshoppingWidget.__proto__ || Object.getPrototypeOf(LiveshoppingWidget)).apply(this, arguments));
  }

  _createClass(LiveshoppingWidget, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.getLiveshoppingProducts();
    }
  }, {
    key: 'render',
    value: function render() {
      var items = this.props.products.slice().map(function (product) {
        return createProductSliderItem(product, getLiveshoppingTimeout(product.liveshoppings));
      });

      if (!items.length) {
        return null;
      }

      return _jsx('div', {
        className: _style2.default.cardsWrapper
      }, void 0, _jsx(_ImageSlider2.default, {
        indicators: true,
        loop: true,
        classNames: { indicator: _style2.default.indicator }
      }, void 0, items));
    }
  }]);

  return LiveshoppingWidget;
}(_react2.default.Component);

LiveshoppingWidget.propTypes = {
  getLiveshoppingProducts: _propTypes2.default.func.isRequired,
  products: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired
};

exports.default = (0, _connector2.default)(LiveshoppingWidget);