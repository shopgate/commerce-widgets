'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'frontend/src/Html/index.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _router = require('@shopgate/pwa-common/helpers/router');

var _parsedLink = require('@shopgate/pwa-common/helpers/parsed-link');

var _parsedLink2 = _interopRequireDefault(_parsedLink);

var _parseHTML = require('./helpers/parseHTML');

var _parseHTML2 = _interopRequireDefault(_parseHTML);

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
 * The custom HTML widget.
 */
var Html = function (_Component) {
  _inherits(Html, _Component);

  /**
   * Get the escaped HTML from the props, remove and execute the scripts (if any) and put
   * it unescaped in the state.
   * @param {Object} props The component props.
   * @param {Object} context The component context.
   */
  function Html(props, context) {
    _classCallCheck(this, Html);

    var _this = _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).call(this, props, context));

    _this.handleTap = function (event) {
      var aTag = event.target.closest('a');

      if (aTag && aTag.attributes.href) {
        var href = aTag.attributes.href.value;
        var link = new _parsedLink2.default(href);

        event.preventDefault();
        link.open(_router.history);
      }
    };

    _this.state = {
      html: (0, _parseHTML2.default)(props.settings.html, props.settings)
    };
    return _this;
  }

  /**
   * Registers the event handler for when the user taps inside the widget.
   */

  /**
   * The widget properties.
   * @type {Object}
   */


  _createClass(Html, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.htmlContainer.addEventListener('touchstart', this.handleTap, true);
      this.htmlContainer.addEventListener('click', this.handleTap, true);
    }

    /**
     * Only update if the HTML changed.
     * @param  {Object} nextProps The next props for the component.
     * @return {boolean}
     */

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.settings.html !== this.props.settings.html;
    }

    /**
     * Removes the event handler.
     */

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.htmlContainer.removeEventListener('touchstart', this.handleTap, true);
      this.htmlContainer.removeEventListener('click', this.handleTap, true);
    }

    /**
     * If the user tapped a link element, prevent the default behaviour
     * and handle them via ParsedLink.
     * @param {Object} event The touchstart event.
     */

  }, {
    key: 'render',


    /**
     * Renders the component.
     * @returns {JSX}
     */
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        dangerouslySetInnerHTML: { __html: this.state.html },
        ref: function ref(domElm) {
          _this2.htmlContainer = domElm;
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      });
    }
  }]);

  return Html;
}(_react.Component);

Html.propTypes = {
  settings: _propTypes2.default.shape({
    html: _propTypes2.default.string.isRequired
  }).isRequired
};
exports.default = Html;