'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'frontend/src/Image/index.jsx'; /**
                                                    * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                    *
                                                    * This source code is licensed under the Apache 2.0 license found in the
                                                    * LICENSE file in the root directory of this source tree.
                                                    */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = require('@shopgate/pwa-common/components/Router/components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Image = require('@shopgate/pwa-common/components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The image widget.
 * @param {Object} props Props of the component
 * @returns {JSX}
 */
var ImageWidget = function ImageWidget(props) {
  var content = _react2.default.createElement(_Image2.default, {
    ratio: props.ratio,
    src: props.settings.image,
    alt: props.settings.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  });

  // Wrap a Link around the Image if needed.
  if (props.settings.link) {
    content = _react2.default.createElement(
      _Link2.default,
      { href: props.settings.link, className: _style2.default, __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      },
      content
    );
  }

  return content;
};

ImageWidget.propTypes = {
  settings: _propTypes2.default.shape({
    alt: _propTypes2.default.string,
    image: _propTypes2.default.string,
    link: _propTypes2.default.string
  }).isRequired
};

exports.default = ImageWidget;