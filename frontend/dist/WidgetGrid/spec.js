'use strict';

var _jsxFileName = 'frontend/src/WidgetGrid/spec.jsx'; /**
                                                        * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                        *
                                                        * This source code is licensed under the Apache 2.0 license found in the
                                                        * LICENSE file in the root directory of this source tree.
                                                        */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Extensions = require('Extensions');

var _Extensions2 = _interopRequireDefault(_Extensions);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<WidgetGrid />', function () {
  it('should render with a config', function () {
    var config = [{
      col: 0,
      row: 0,
      width: 12,
      height: 3,
      settings: {
        id: 83535,
        image: 'https://data.shopgate.com/shop_widget_images/23836/92204c0f264ac30d6836994c2fb64eb1.min.jpeg'
      },
      type: 'core-widgets/image'
    }];

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { config: config, __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_Extensions2.default['core-widgets/image']).exists()).toBe(true);
  });

  it('should not render without a `config` prop', function () {
    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('div').children().length).toBe(0);
  });
});