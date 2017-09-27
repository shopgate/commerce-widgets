'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sortBy = require('lodash/sortBy');

var _sortBy2 = _interopRequireDefault(_sortBy);

var _ = require('../../../../..');

var _2 = _interopRequireDefault(_);

var _Widget = require('../../../../../../components/Widgets/components/Widget');

var _Widget2 = _interopRequireDefault(_Widget);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GRID_COLUMNS = 12;

var getMaxHeight = function getMaxHeight(widgets) {
  return widgets.reduce(function (max, widget) {
    return Math.max(widget.row + widget.height, max);
  }, 0);
};

var WidgetGrid = function WidgetGrid(props) {
  var rowCount = getMaxHeight(props.config);

  var cellSize = Math.floor(window.innerWidth / GRID_COLUMNS);

  if (!props.config || !rowCount) {
    return null;
  }

  var widgets = (0, _sortBy2.default)(props.config, ['row']);

  var height = rowCount * cellSize + 'px';

  return _jsx('div', {
    className: _style2.default.container,
    style: { height: height }
  }, void 0, Object.keys(widgets).map(function (key) {
    var widget = widgets[key];
    var widgetKey = 'w' + key;

    var WidgetComponent = _2.default[widget.type];

    return _jsx(_Widget2.default, {
      cellSize: cellSize,
      config: widget,
      component: WidgetComponent
    }, widgetKey);
  }));
};

WidgetGrid.propTypes = {
  config: _propTypes2.default.arrayOf(_propTypes2.default.shape())
};

WidgetGrid.defaultProps = {
  config: []
};

exports.default = WidgetGrid;