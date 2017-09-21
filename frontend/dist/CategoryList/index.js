'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Unwrapped = undefined;

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class,
    _temp,
    _jsxFileName = 'src/CategoryList/index.jsx';

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

var _components = {
  CategoryListWidget: {
    displayName: 'CategoryListWidget'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/CategoryList/index.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var CategoryListWidget = _wrapComponent('CategoryListWidget')((_temp = _class = function (_Component) {
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

      return _react3.default.createElement(
        'div',
        { className: _style2.default.container, __source: {
            fileName: _jsxFileName,
            lineNumber: 66
          }
        },
        settings.headline ? _react3.default.createElement(
          'h3',
          { className: _style2.default.headline, __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          },
          settings.headline
        ) : null,
        _react3.default.createElement(
          _List2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            }
          },
          items.map(function (item) {
            var link = '/category/' + (0, _data.bin2hex)(item.id);

            var Avatar = settings.showImages ? _react3.default.createElement(_Image2.default, { src: item.imageUrl, __source: {
                fileName: _jsxFileName,
                lineNumber: 74
              }
            }) : null;

            return _react3.default.createElement(_List2.default.Item, {
              image: Avatar,
              link: link,
              key: item.id,
              title: item.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            });
          })
        )
      );
    }
  }]);

  return CategoryListWidget;
}(_react2.Component), _class.propTypes = {
  settings: _propTypes2.default.shape().isRequired,
  getCategory: _propTypes2.default.func,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape())
}, _class.defaultProps = {
  getCategory: function getCategory() {},
  items: null
}, _temp));

var _default = (0, _connector2.default)(CategoryListWidget);

exports.default = _default;
exports.Unwrapped = CategoryListWidget;
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CategoryListWidget, 'CategoryListWidget', 'src/CategoryList/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/CategoryList/index.jsx');
}();

;