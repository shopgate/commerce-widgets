'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = 'src/Image/index.jsx';

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

var _default = ImageWidget;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ImageWidget, 'ImageWidget', 'src/Image/index.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Image/index.jsx');
}();

;