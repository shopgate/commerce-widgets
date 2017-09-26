'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/WidgetGrid/index.jsx';

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

  return _react2.default.createElement(
    'div',
    { className: _style2.default.container, style: { height: height }, __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      }
    },
    Object.keys(widgets).map(function (key) {
      var widget = widgets[key];
      var widgetKey = 'w' + key;

      var WidgetComponent = _2.default[widget.type];

      return _react2.default.createElement(_Widget2.default, {
        cellSize: cellSize,
        config: widget,
        component: WidgetComponent,
        key: widgetKey,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      });
    })
  );
};

WidgetGrid.propTypes = {
  config: _propTypes2.default.arrayOf(_propTypes2.default.shape())
};

WidgetGrid.defaultProps = {
  config: []
};

var _default = WidgetGrid;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(GRID_COLUMNS, 'GRID_COLUMNS', 'src/WidgetGrid/index.jsx');

  __REACT_HOT_LOADER__.register(getMaxHeight, 'getMaxHeight', 'src/WidgetGrid/index.jsx');

  __REACT_HOT_LOADER__.register(WidgetGrid, 'WidgetGrid', 'src/WidgetGrid/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/WidgetGrid/index.jsx');
}();

;