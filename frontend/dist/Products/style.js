'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _glamor = require('glamor');

var _colors = require('../../../../../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var listView = (0, _glamor.css)({
  background: _colors2.default.light,
  overflow: 'auto',
  '> ul > li:first-child': {
    paddingTop: 0
  },
  '> ul > li:last-child': {
    paddingBottom: 0
  }
}).toString();

var _default = {
  listView: listView
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(listView, 'listView', 'src/Products/style.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Products/style.js');
}();

;