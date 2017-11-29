'use strict';Object.defineProperty(exports,'__esModule',{value:true});exports.Unwrapped=undefined;var _jsxFileName='src/Products/index.jsx';var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}return target};var _jsx=function(){var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol.for&&Symbol.for('react.element')||60103;return function createRawReactElement(type,props,key,children){var defaultProps=type&&type.defaultProps;var childrenLength=arguments.length-3;if(!props&&childrenLength!==0){props={}}if(props&&defaultProps){for(var propName in defaultProps){if(props[propName]===void 0){props[propName]=defaultProps[propName]}}}else if(!props){props=defaultProps||{}}if(childrenLength===1){props.children=children}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+3]}props.children=childArray}return{$$typeof:REACT_ELEMENT_TYPE,type:type,key:key===undefined?null:''+key,ref:null,props:props,_owner:null}}}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _I18n=require('@shopgate/pwa-common/components/I18n');var _I18n2=_interopRequireDefault(_I18n);var _data=require('@shopgate/pwa-common/helpers/data');var _constants=require('../../../../../../pages/Category/constants');var _ActionButton=require('../../../../../../components/ActionButton');var _ActionButton2=_interopRequireDefault(_ActionButton);var _Headline=require('../../../../../../components/Headline');var _Headline2=_interopRequireDefault(_Headline);var _ProductGrid=require('../../../../../../components/ProductGrid');var _ProductGrid2=_interopRequireDefault(_ProductGrid);var _ProductList=require('../../../../../../components/ProductList');var _ProductList2=_interopRequireDefault(_ProductList);var _connector=require('./connector');var _connector2=_interopRequireDefault(_connector);var _style=require('./style');var _style2=_interopRequireDefault(_style);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called')}return call&&(typeof call==='object'||typeof call==='function')?call:self}function _inherits(subClass,superClass){if(typeof superClass!=='function'&&superClass!==null){throw new TypeError('Super expression must either be null or a function, not '+typeof superClass)}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass}var ProductsWidget=function(_Component){_inherits(ProductsWidget,_Component);function ProductsWidget(props){_classCallCheck(this,ProductsWidget);var _this=_possibleConstructorReturn(this,(ProductsWidget.__proto__||Object.getPrototypeOf(ProductsWidget)).call(this,props));_this.getProducts=function(){var _this$props=_this.props,getProducts=_this$props.getProducts,id=_this$props.id;var _this$props$settings=_this.props.settings,productLimit=_this$props$settings.productLimit,queryParams=_this$props$settings.queryParams,queryType=_this$props$settings.queryType;var sort=(0,_data.transformDisplayOptions)(_this.props.settings.sortOrder);var options={limit:productLimit,offset:_this.productCount,sort:sort};getProducts(queryType,queryParams,options,id)};_this.hasAllProducts=function(){return _this.props.totalProductCount!==null&&_this.props.products.length>=_this.props.totalProductCount};_this.renderMoreButton=function(){if(!_this.props.settings.showLoadMore||_this.hasAllProducts()){return null}return _jsx(_ActionButton2.default,{loading:_this.props.isFetching,onClick:_this.getProducts},void 0,_jsx(_I18n2.default.Text,{string:'common.load_more'}))};_this.productCount=props.products.length;return _this}_createClass(ProductsWidget,[{key:'componentDidMount',value:function componentDidMount(){if(this.props.products.length===0){this.getProducts()}}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){this.totalProductCount=nextProps.totalProductCount;if(this.props.products.length!==nextProps.products.length||nextProps.products.length===this.totalProductCount){this.productCount=Math.min(nextProps.products.length,this.totalProductCount)}}},{key:'shouldComponentUpdate',value:function shouldComponentUpdate(nextProps){return this.props.isFetching!==nextProps.isFetching||this.props.products.length!==nextProps.products.length}},{key:'render',value:function render(){var products=this.props.products;if(!products||!products.length){return null}var productSlice=products.slice(0,this.productCount);var _props$settings=this.props.settings,headline=_props$settings.headline,layout=_props$settings.layout,showName=_props$settings.showName,showPrice=_props$settings.showPrice,showReviews=_props$settings.showReviews;var isList=layout===_constants.LIST_VIEW;var flags=_extends({name:isList?true:showName,price:showPrice,reviews:showReviews},isList&&{manufacturer:false});var ProductComponent=isList?_ProductList2.default:_ProductGrid2.default;return _react2.default.createElement('div',_extends({},isList?{className:_style2.default.listView}:{},{__source:{fileName:_jsxFileName,lineNumber:176}}),_jsx(_Headline2.default,{text:headline}),_jsx(ProductComponent,{flags:flags,infiniteLoad:false,products:productSlice}),this.renderMoreButton())}}]);return ProductsWidget}(_react.Component);ProductsWidget.propTypes={getProducts:_propTypes2.default.func.isRequired,id:_propTypes2.default.string.isRequired,settings:_propTypes2.default.shape().isRequired,isFetching:_propTypes2.default.bool,products:_propTypes2.default.arrayOf(_propTypes2.default.shape()),totalProductCount:_propTypes2.default.number};ProductsWidget.defaultProps={getProducts:function getProducts(){},isFetching:false,products:null,totalProductCount:null};exports.default=(0,_connector2.default)(ProductsWidget);exports.Unwrapped=ProductsWidget;