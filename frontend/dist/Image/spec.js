'use strict';

var _jsxFileName = 'frontend/src/Image/spec.jsx'; /**
                                                   * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                   *
                                                   * This source code is licensed under the Apache 2.0 license found in the
                                                   * LICENSE file in the root directory of this source tree.
                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ImageWidget />', function () {
  it('should render the ImageWidget', function () {
    var settings = {
      id: '81452',
      alt: 'Alt text',
      image: 'https://data.shopgate.com/shop_widget_images/22874/1a2a3d3.min.jpeg',
      url: '/category/3339'
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { settings: settings, __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      }
    }));

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the ImageWidget without link', function () {
    var settings = {
      id: '81452',
      alt: 'Alt text',
      image: 'https://data.shopgate.com/shop_widget_images/22874/1a2a3d3.min.jpeg',
      url: ''
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { settings: settings, __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      }
    }));

    expect(wrapper.find('Link').exists()).toBe(false);
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