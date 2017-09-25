'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _glamor = require('glamor');

var _colors = require('../../../../../../styles/colors');

var _colors2 = _interopRequireDefault(_colors);

var _variables = require('../../../../../../styles/variables');

var _variables2 = _interopRequireDefault(_variables);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sliderContainer = (0, _glamor.css)({
  marginLeft: 'auto',
  marginRight: 'auto',
  position: 'relative',
  paddingBottom: 8
}).toString();

var slider = (0, _glamor.css)({
  width: '100%',
  flex: 1,
  paddingTop: 16,
  paddingBottom: 16
}).toString();

var sliderItem = (0, _glamor.css)({
  width: '50%'
}).toString();

var productInfo = (0, _glamor.css)({
  padding: 15
}).toString();

var productName = (0, _glamor.css)({
  fontWeight: 500
}).toString();

var priceGrid = (0, _glamor.css)({
  alignItems: 'flex-end'
}).toString();

var priceStrikedItem = (0, _glamor.css)({
  flexGrow: 1
}).toString();

var priceItem = (0, _glamor.css)({
  flexGrow: 1,
  textAlign: 'right'
}).toString();

var priceBase = (0, _glamor.css)({
  padding: '0 15px'
}).toString();

var priceStriked = (0, _glamor.css)((0, _extends3.default)({}, priceBase, {
  fontSize: '0.875rem'
})).toString();

var price = (0, _glamor.css)((0, _extends3.default)({}, priceBase, {
  color: _colors2.default.primary,
  fontSize: '1rem'
})).toString();

var card = (0, _glamor.css)({
  background: '#FFF',
  height: '100%',
  margin: '0px 8px'
}).toString();

var headline = (0, _glamor.css)({
  fontSize: 18,
  margin: '0 0 ' + _variables2.default.gap.big + 'px',
  textAlign: 'center'
}).toString();

var _default = {
  card: card,
  headline: headline,
  sliderContainer: sliderContainer,
  slider: slider,
  sliderItem: sliderItem,
  productInfo: productInfo,
  productName: productName,
  priceGrid: priceGrid,
  priceStrikedItem: priceStrikedItem,
  priceItem: priceItem,
  priceBase: priceBase,
  priceStriked: priceStriked,
  price: price
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(sliderContainer, 'sliderContainer', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(slider, 'slider', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(sliderItem, 'sliderItem', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(productInfo, 'productInfo', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(productName, 'productName', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(priceGrid, 'priceGrid', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(priceStrikedItem, 'priceStrikedItem', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(priceItem, 'priceItem', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(priceBase, 'priceBase', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(priceStriked, 'priceStriked', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(price, 'price', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(card, 'card', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(headline, 'headline', 'src/ProductSlider/style.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/ProductSlider/style.js');
}();

;