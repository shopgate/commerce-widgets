'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = 'frontend/src/CategoryList/spec.jsx'; /**
                                                          * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                          *
                                                          * This source code is licensed under the Apache 2.0 license found in the
                                                          * LICENSE file in the root directory of this source tree.
                                                          */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _List = require('../../../../../components/List');

var _List2 = _interopRequireDefault(_List);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<CategoryListWidget />', function () {
  it('should not render the CategoryListWidget', function () {
    var props = {
      fetchCategory: function fetchCategory() {},
      items: null,
      settings: {
        categoryNumber: '',
        headline: 'Yay Categories',
        showImages: false
      }
    };

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.CategoryListWidget, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      }
    })));

    expect(wrapper.find(_List2.default.Item).length).toBe(0);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the CategoryListWidget', function () {
    var props = {
      fetchCategory: function fetchCategory() {},
      items: [{
        id: '1',
        name: 'Headline',
        imageUrl: '/some/url'
      }, {
        id: '2',
        name: 'Headline',
        imageUrl: '/some/url'
      }],
      settings: {
        categoryNumber: '',
        headline: 'Yay Categories',
        showImages: false
      }
    };

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index.CategoryListWidget, _extends({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    })));

    expect(wrapper.find(_List2.default.Item).length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;