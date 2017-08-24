'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'frontend/src/ImageSlider/index.jsx'; /**
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

var _ImageSlider = require('../../../../../components/ImageSlider');

var _ImageSlider2 = _interopRequireDefault(_ImageSlider);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Core image slider widget.
 * @param {Object} props The widget properties
 * @returns {JSX}
 */
var ImageSliderWidget = function ImageSliderWidget(props) {
  var settings = props.settings;

  return _react2.default.createElement(
    _ImageSlider2.default,
    {
      className: props.className,
      autoPlay: settings.autostart,
      indicators: settings.pagination,
      interval: settings.delay,
      loop: settings.loop,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      }
    },
    settings.images.map(function (image, index) {
      /**
       * Create an array of images, each one with a unique key
       * (to prevent conflicts when using the exact same image).
       */
      var key = 'si' + index;
      var imageComponent = _react2.default.createElement(_Image2.default, { key: key, src: image.image, alt: image.alt, __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      });

      if (image.link) {
        imageComponent = _react2.default.createElement(
          _Link2.default,
          { key: key, href: image.link, className: _style2.default.link, __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            }
          },
          imageComponent
        );
      }

      return imageComponent;
    })
  );
};

ImageSliderWidget.propTypes = {
  // The settings as received by the pipeline request
  settings: _propTypes2.default.shape({
    autostart: _propTypes2.default.bool.isRequired, // Should the slider start automatically?
    delay: _propTypes2.default.number.isRequired, // The delay between the automatic slides
    pagination: _propTypes2.default.bool.isRequired, // Show the pagination (dots)?
    loop: _propTypes2.default.bool.isRequired, // Wrap the slider content when it reached the last image?
    images: _propTypes2.default.arrayOf( // An array of images to display
    _propTypes2.default.shape({
      image: _propTypes2.default.string.isRequired, // The image URL
      link: _propTypes2.default.string, // The link to the image
      alt: _propTypes2.default.string // The alternative title for images that could not be loaded.
    })).isRequired
  }).isRequired,
  className: _propTypes2.default.string // Additional styles to append to the image slider.
};

ImageSliderWidget.defaultProps = {
  className: ''
};

var _default = ImageSliderWidget;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ImageSliderWidget, 'ImageSliderWidget', 'frontend/src/ImageSlider/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'frontend/src/ImageSlider/index.jsx');
}();

;