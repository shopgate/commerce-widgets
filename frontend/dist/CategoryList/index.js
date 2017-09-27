'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Unwrapped = undefined;

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _data = require('@shopgate/pwa-common/helpers/data');

var _Image = require('@shopgate/pwa-common/components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _List = require('../../../../../../components/List');

var _List2 = _interopRequireDefault(_List);

var _isEqual = require('lodash/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _connector = require('./connector');

var _connector2 = _interopRequireDefault(_connector);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CategoryListWidget = function (_Component) {
  _inherits(CategoryListWidget, _Component);

  function CategoryListWidget() {
    _classCallCheck(this, CategoryListWidget);

    return _possibleConstructorReturn(this, (CategoryListWidget.__proto__ || Object.getPrototypeOf(CategoryListWidget)).apply(this, arguments));
  }

  _createClass(CategoryListWidget, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.items) {
        this.props.getCategory(this.props.settings.categoryNumber);
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.items && !(0, _isEqual2.default)(this.props.items, nextProps.items);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          items = _props.items,
          settings = _props.settings;


      if (!items) {
        return null;
      }

      return _jsx('div', {
        className: _style2.default.container
      }, void 0, settings.headline ? _jsx('h3', {
        className: _style2.default.headline
      }, void 0, settings.headline) : null, _jsx(_List2.default, {}, void 0, items.map(function (item) {
        var link = '/category/' + (0, _data.bin2hex)(item.id);

        var Avatar = settings.showImages ? _jsx(_Image2.default, {
          src: item.imageUrl
        }) : null;

        return _jsx(_List2.default.Item, {
          image: Avatar,
          link: link,
          title: item.name
        }, item.id);
      })));
    }
  }]);

  return CategoryListWidget;
}(_react.Component);

CategoryListWidget.propTypes = {
  settings: _propTypes2.default.shape().isRequired,
  getCategory: _propTypes2.default.func,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape())
};
CategoryListWidget.defaultProps = {
  getCategory: function getCategory() {},
  items: null
};
exports.default = (0, _connector2.default)(CategoryListWidget);
exports.Unwrapped = CategoryListWidget;