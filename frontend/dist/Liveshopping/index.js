'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _jsxFileName = 'src/Liveshopping/index.jsx';

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

var _components = {
  LiveshoppingWidget: {
    displayName: 'LiveshoppingWidget'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Liveshopping/index.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

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

  return _react3.default.createElement(
    'div',
    { key: id, className: _style2.default.card, __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    },
    _react3.default.createElement(
      _Card2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      },
      _react3.default.createElement(
        _Link2.default,
        { href: '/item/' + (0, _data.bin2hex)(id), __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        },
        _react3.default.createElement(
          _Grid2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          _react3.default.createElement(
            _Grid2.default.Item,
            { className: _style2.default.imagePane, __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            _react3.default.createElement(_ProductImage2.default, { src: featuredImageUrl, alt: name, __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            })
          ),
          _react3.default.createElement(
            _Grid2.default.Item,
            { className: _style2.default.infoPane, __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            },
            price.discount > 0 ? _react3.default.createElement(_DiscountBadge2.default, {
              text: 'liveshopping.discount_badge',
              discount: price.discount,
              display: 'big',
              className: _style2.default.discountBadge,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            }) : null,
            _react3.default.createElement(
              _Ellipsis2.default,
              {
                rows: 2,
                className: _style2.default.cardTitle,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                }
              },
              name
            ),
            timeout ? _react3.default.createElement(
              'span',
              { className: _style2.default.timer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                }
              },
              _react3.default.createElement(_CountdownTimer2.default, { timeout: timeout, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
                }
              })
            ) : null,
            _react3.default.createElement(
              'div',
              { className: _style2.default.priceWrapper, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                }
              },
              _react3.default.createElement(
                _Grid2.default,
                { className: _style2.default.priceGrid, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  }
                },
                priceStriked > 0 ? _react3.default.createElement(
                  _Grid2.default.Item,
                  { className: _style2.default.priceStrikedItem, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 97
                    }
                  },
                  _react3.default.createElement(_PriceStriked2.default, {
                    className: _style2.default.priceStriked,
                    value: priceStriked,
                    currency: price.currency,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 98
                    }
                  })
                ) : null,
                _react3.default.createElement(
                  _Grid2.default.Item,
                  { className: _style2.default.priceItem, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106
                    }
                  },
                  _react3.default.createElement(_Price2.default, {
                    className: priceStriked > 0 ? _style2.default.price : '',
                    unitPrice: price.unitPrice,
                    unitPriceMin: price.unitPriceMin,
                    currency: price.currency,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 107
                    }
                  })
                )
              )
            )
          )
        )
      )
    )
  );
};

createProductSliderItem.propTypes = {
  featuredImageUrl: _propTypes2.default.string.isRequired,
  id: _propTypes2.default.string.isRequired,
  name: _propTypes2.default.string.isRequired,
  price: _propTypes2.default.shape().isRequired
};

var LiveshoppingWidget = _wrapComponent('LiveshoppingWidget')(function (_React$Component) {
  (0, _inherits3.default)(LiveshoppingWidget, _React$Component);

  function LiveshoppingWidget() {
    (0, _classCallCheck3.default)(this, LiveshoppingWidget);
    return (0, _possibleConstructorReturn3.default)(this, (LiveshoppingWidget.__proto__ || (0, _getPrototypeOf2.default)(LiveshoppingWidget)).apply(this, arguments));
  }

  (0, _createClass3.default)(LiveshoppingWidget, [{
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

      return _react3.default.createElement(
        'div',
        { className: _style2.default.cardsWrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        },
        _react3.default.createElement(
          _ImageSlider2.default,
          { indicators: true, loop: true, classNames: { indicator: _style2.default.indicator }, __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            }
          },
          items
        )
      );
    }
  }]);
  return LiveshoppingWidget;
}(_react3.default.Component));

LiveshoppingWidget.propTypes = {
  getLiveshoppingProducts: _propTypes2.default.func.isRequired,
  products: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired
};

var _default = (0, _connector2.default)(LiveshoppingWidget);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(getLiveshoppingTimeout, 'getLiveshoppingTimeout', 'src/Liveshopping/index.jsx');

  __REACT_HOT_LOADER__.register(createProductSliderItem, 'createProductSliderItem', 'src/Liveshopping/index.jsx');

  __REACT_HOT_LOADER__.register(LiveshoppingWidget, 'LiveshoppingWidget', 'src/Liveshopping/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Liveshopping/index.jsx');
}();

;