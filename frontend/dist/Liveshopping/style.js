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

var cardsWrapper = (0, _glamor.css)({
  padding: '16px 0px 0px'
}).toString();

var card = (0, _glamor.css)({
  padding: '0px 10px'
}).toString();

var pane = {
  width: '50%',
  position: 'relative',
  background: _colors2.default.light
};

var discountBadge = (0, _glamor.css)({
  width: 'auto',
  fontWeight: 400,
  marginBottom: _variables2.default.gap.small,
  borderRadius: 3
}).toString();

var imagePane = (0, _glamor.css)((0, _extends3.default)({}, pane)).toString();

var infoPane = (0, _glamor.css)((0, _extends3.default)({}, pane, {
  padding: 16
})).toString();

var priceWrapper = (0, _glamor.css)({
  position: 'absolute',
  left: 15,
  bottom: 15,
  right: 15
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
  fontSize: '1.25rem'
})).toString();

var cardTitle = (0, _glamor.css)({
  fontWeight: 500,
  lineHeight: 1.25,
  marginBottom: _variables2.default.gap.small * 0.5
}).toString();

var timer = (0, _glamor.css)({
  fontSize: '0.875rem',
  color: _colors2.default.primary,
  fontStyle: 'italic',
  fontWeight: 500
}).toString();

var indicator = {
  position: 'relative',
  left: 0,
  bottom: 0,
  transform: 'translateX(0)',
  textAlign: 'center'
};

var _default = {
  card: card,
  discountBadge: discountBadge,
  imagePane: imagePane,
  infoPane: infoPane,
  indicator: indicator,
  priceWrapper: priceWrapper,
  priceGrid: priceGrid,
  priceStrikedItem: priceStrikedItem,
  priceItem: priceItem,
  priceStriked: priceStriked,
  price: price,
  cardsWrapper: cardsWrapper,
  cardTitle: cardTitle,
  timer: timer
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(cardsWrapper, 'cardsWrapper', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(card, 'card', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(pane, 'pane', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(discountBadge, 'discountBadge', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(imagePane, 'imagePane', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(infoPane, 'infoPane', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(priceWrapper, 'priceWrapper', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(priceGrid, 'priceGrid', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(priceStrikedItem, 'priceStrikedItem', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(priceItem, 'priceItem', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(priceBase, 'priceBase', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(priceStriked, 'priceStriked', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(price, 'price', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(cardTitle, 'cardTitle', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(timer, 'timer', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(indicator, 'indicator', 'src/Liveshopping/style.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/Liveshopping/style.js');
}();

;