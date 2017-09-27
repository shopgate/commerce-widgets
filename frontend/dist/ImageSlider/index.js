'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Link = require('@shopgate/pwa-common/components/Router/components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Image = require('@shopgate/pwa-common/components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _ImageSlider = require('../../../../../../components/ImageSlider');

var _ImageSlider2 = _interopRequireDefault(_ImageSlider);

var _style = require('./style');

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageSliderWidget = function ImageSliderWidget(props) {
  var settings = props.settings;

  return _jsx(_ImageSlider2.default, {
    className: props.className,
    autoPlay: settings.autostart,
    indicators: settings.pagination,
    interval: settings.delay,
    loop: settings.loop
  }, void 0, settings.images.map(function (image, index) {
    var key = 'si' + index;
    var imageComponent = _jsx(_Image2.default, {
      src: image.image,
      alt: image.alt
    }, key);

    if (image.link) {
      imageComponent = _jsx(_Link2.default, {
        href: image.link,
        className: _style2.default.link
      }, key, imageComponent);
    }

    return imageComponent;
  }));
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

exports.default = ImageSliderWidget;