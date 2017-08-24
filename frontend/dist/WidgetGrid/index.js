'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'frontend/src/WidgetGrid/index.jsx'; /**
                                                         * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                         *
                                                         * This source code is licensed under the Apache 2.0 license found in the
                                                         * LICENSE file in the root directory of this source tree.
                                                         */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sortBy = require('lodash/sortBy');

var _sortBy2 = _interopRequireDefault(_sortBy);

var _Extensions = require('Extensions');

var _Extensions2 = _interopRequireDefault(_Extensions);

var _Widget = require('../../../../../components/Widgets/components/Widget');

var _Widget2 = _interopRequireDefault(_Widget);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// One grid row has 12 columns.
var GRID_COLUMNS = 12;

/**
 * Iterate through all widgets and return the maxium
 * height based on row and height information.
 * @param {Array} widgets Array of widgets.
 * @returns {number} Height of the widget grid.
 */
var getMaxHeight = function getMaxHeight(widgets) {
  return widgets.reduce(function (max, widget) {
    return Math.max(widget.row + widget.height, max);
  }, 0);
};

/**
 * The widget grid widget component.
 * @param {Object} props The component properties.
 * @returns {JSX} The widget grid.
 */
var WidgetGrid = function WidgetGrid(props) {
  var rowCount = getMaxHeight(props.config);

  // The cell size is 1/12 of the viewport width.
  var cellSize = Math.floor(window.innerWidth / GRID_COLUMNS);

  if (!props.config || !rowCount) {
    return null;
  }

  // Sort the widgets by row. This has to happen to take care of the z-index flow.
  var widgets = (0, _sortBy2.default)(props.config, ['row']);

  // The height of the widget area.
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
      // Map to the correct widget component using the `type` key inside the widget.
      var WidgetComponent = _Extensions2.default[widget.type];

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

exports.default = WidgetGrid;