'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/ImageSlider/index.jsx';

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
  settings: _propTypes2.default.shape({
    autostart: _propTypes2.default.bool.isRequired,
    delay: _propTypes2.default.number.isRequired,
    pagination: _propTypes2.default.bool.isRequired,
    loop: _propTypes2.default.bool.isRequired,
    images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      image: _propTypes2.default.string.isRequired,
      link: _propTypes2.default.string,
      alt: _propTypes2.default.string })).isRequired
  }).isRequired,
  className: _propTypes2.default.string };

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

  __REACT_HOT_LOADER__.register(ImageSliderWidget, 'ImageSliderWidget', 'src/ImageSlider/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/ImageSlider/index.jsx');
}();

;