'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = 'frontend/src/Liveshopping/index.jsx'; /**
                                                           * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                           *
                                                           * This source code is licensed under the Apache 2.0 license found in the
                                                           * LICENSE file in the root directory of this source tree.
                                                           */

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

var _ImageSlider = require('../../../../../components/ImageSlider');

var _ImageSlider2 = _interopRequireDefault(_ImageSlider);

var _Card = require('../../../../../components/Card');

var _Card2 = _interopRequireDefault(_Card);

var _DiscountBadge = require('../../../../../components/DiscountBadge');

var _DiscountBadge2 = _interopRequireDefault(_DiscountBadge);

var _Price = require('../../../../../components/Price');

var _Price2 = _interopRequireDefault(_Price);

var _PriceStriked = require('../../../../../components/PriceStriked');

var _PriceStriked2 = _interopRequireDefault(_PriceStriked);

var _ProductImage = require('../../../../../components/ProductImage');

var _ProductImage2 = _interopRequireDefault(_ProductImage);

var _connector = require('./connector');

var _connector2 = _interopRequireDefault(_connector);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Calculates the timeout from a set of live-shopping settings. The highest 'to' timestamp
 * with an active time period (that is a time span with from <= current time <= to) is
 * considered to represent the current timeout.
 * @param {Object} liveshoppings The live-shopping settings.
 * @returns {number} the unix timestamp for the timeout or null if there is no active timeout.
 */
var getLiveshoppingTimeout = function getLiveshoppingTimeout(liveshoppings) {
  var now = Date.now();

  var result = liveshoppings.reduce(function (best, item) {
    // Get the time span limits.
    var from = new Date(item.from).getTime();
    var to = new Date(item.to).getTime();

    if (from <= now && to >= now) {
      // This time span is currently active.
      return Math.max(best, to);
    }

    return best;
  }, null);

  // Cut milliseconds from the result to make it a unix compatible timestamp.
  return Math.floor(result / 1000);
};

/**
 * Creates a new product slider item.
 * @param {Object} product The product.
 * @param {string} product.id The product id.
 * @param {string} product.name The product name.
 * @param {string} product.featuredImageUrl The featured image url.
 * @param {Object} product.price The product price object.
 * @param {number} timeout The timeout of the live-shopping deal.
 * @returns {JSX}
 */
var createProductSliderItem = function createProductSliderItem(_ref, timeout) {
  var id = _ref.id,
      name = _ref.name,
      featuredImageUrl = _ref.featuredImageUrl,
      price = _ref.price;

  var priceStriked = price.unitPriceStriked > 0 ? price.unitPriceStriked : price.msrp;

  return _react2.default.createElement(
    'div',
    { key: id, className: _style2.default.card, __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      }
    },
    _react2.default.createElement(
      _Card2.default,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      },
      _react2.default.createElement(
        _Link2.default,
        { href: '/item/' + (0, _data.bin2hex)(id), __source: {
            fileName: _jsxFileName,
            lineNumber: 67
          }
        },
        _react2.default.createElement(
          _Grid2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          _react2.default.createElement(
            _Grid2.default.Item,
            { className: _style2.default.imagePane, __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            _react2.default.createElement(_ProductImage2.default, { src: featuredImageUrl, alt: name, __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            })
          ),
          _react2.default.createElement(
            _Grid2.default.Item,
            { className: _style2.default.infoPane, __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              }
            },
            price.discount > 0 ? _react2.default.createElement(_DiscountBadge2.default, {
              text: 'liveshopping.discount_badge',
              discount: price.discount,
              display: 'big',
              className: _style2.default.discountBadge,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            }) : null,
            _react2.default.createElement(
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
            timeout ? _react2.default.createElement(
              'span',
              { className: _style2.default.timer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                }
              },
              _react2.default.createElement(_CountdownTimer2.default, { timeout: timeout, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 90
                }
              })
            ) : null,
            _react2.default.createElement(
              'div',
              { className: _style2.default.priceWrapper, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 94
                }
              },
              _react2.default.createElement(
                _Grid2.default,
                { className: _style2.default.priceGrid, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                  }
                },
                priceStriked > 0 ? _react2.default.createElement(
                  _Grid2.default.Item,
                  { className: _style2.default.priceStrikedItem, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 97
                    }
                  },
                  _react2.default.createElement(_PriceStriked2.default, {
                    className: _style2.default.priceStriked,
                    value: priceStriked,
                    currency: price.currency,
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 98
                    }
                  })
                ) : null,
                _react2.default.createElement(
                  _Grid2.default.Item,
                  { className: _style2.default.priceItem, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106
                    }
                  },
                  _react2.default.createElement(_Price2.default, {
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

/**
 * The live shopping (deal of the day) widget.
 */

var LiveshoppingWidget = function (_React$Component) {
  _inherits(LiveshoppingWidget, _React$Component);

  function LiveshoppingWidget() {
    _classCallCheck(this, LiveshoppingWidget);

    return _possibleConstructorReturn(this, (LiveshoppingWidget.__proto__ || Object.getPrototypeOf(LiveshoppingWidget)).apply(this, arguments));
  }

  _createClass(LiveshoppingWidget, [{
    key: 'componentDidMount',

    /**
     * Requests the liveshopping product data when the component is mounted.
     */
    value: function componentDidMount() {
      this.props.getLiveshoppingProducts();
    }

    /**
     * Renders the component.
     * @return {JSX}
     */

  }, {
    key: 'render',
    value: function render() {
      var items = this.props.products.slice().map(function (product) {
        return createProductSliderItem(product, getLiveshoppingTimeout(product.liveshoppings));
      });

      if (!items.length) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        { className: _style2.default.cardsWrapper, __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        },
        _react2.default.createElement(
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
}(_react2.default.Component);

LiveshoppingWidget.propTypes = {
  getLiveshoppingProducts: _propTypes2.default.func.isRequired,
  products: _propTypes2.default.arrayOf(_propTypes2.default.shape()).isRequired
};

exports.default = (0, _connector2.default)(LiveshoppingWidget);