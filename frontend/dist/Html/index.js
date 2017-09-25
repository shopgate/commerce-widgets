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

var _class,
    _temp,
    _jsxFileName = 'src/Html/index.jsx';

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _router = require('@shopgate/pwa-common/helpers/router');

var _parsedLink = require('@shopgate/pwa-common/helpers/parsed-link');

var _parsedLink2 = _interopRequireDefault(_parsedLink);

var _parseHTML = require('./helpers/parseHTML');

var _parseHTML2 = _interopRequireDefault(_parseHTML);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  Html: {
    displayName: 'Html'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Html/index.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var Html = _wrapComponent('Html')((_temp = _class = function (_Component) {
  (0, _inherits3.default)(Html, _Component);

  function Html(props, context) {
    (0, _classCallCheck3.default)(this, Html);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Html.__proto__ || (0, _getPrototypeOf2.default)(Html)).call(this, props, context));

    _this.handleTap = function () {
      return _this.__handleTap__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      html: (0, _parseHTML2.default)(props.settings.html, props.settings)
    };
    return _this;
  }

  (0, _createClass3.default)(Html, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.htmlContainer.addEventListener('touchstart', this.handleTap, true);
      this.htmlContainer.addEventListener('click', this.handleTap, true);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.settings.html !== this.props.settings.html;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.htmlContainer.removeEventListener('touchstart', this.handleTap, true);
      this.htmlContainer.removeEventListener('click', this.handleTap, true);
    }
  }, {
    key: '__handleTap__REACT_HOT_LOADER__',
    value: function __handleTap__REACT_HOT_LOADER__(event) {
      var aTag = event.target.closest('a');

      if (aTag && aTag.attributes.href) {
        var href = aTag.attributes.href.value;
        var link = new _parsedLink2.default(href);

        event.preventDefault();
        link.open(_router.history);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react3.default.createElement('div', {
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
}(_react2.Component), _class.propTypes = {
  settings: _propTypes2.default.shape({
    html: _propTypes2.default.string.isRequired
  }).isRequired
}, _temp));

var _default = Html;
exports.default = _default;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Html, 'Html', 'src/Html/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Html/index.jsx');
}();

;