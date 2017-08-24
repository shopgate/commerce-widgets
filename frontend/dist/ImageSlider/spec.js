'use strict';

var _jsxFileName = 'frontend/src/ImageSlider/spec.jsx';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the Apache 2.0 license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Link = require('@shopgate/pwa-common/components/Router/components/Link');

var _Link2 = _interopRequireDefault(_Link);

var _Image = require('@shopgate/pwa-common/components/Image');

var _Image2 = _interopRequireDefault(_Image);

var _Slider = require('@shopgate/pwa-common/components/Slider');

var _Slider2 = _interopRequireDefault(_Slider);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ImageSliderWidget />', function () {
  var testImage = {
    image: 'http://placehold.it/350x150',
    link: 'http://example.com'
  };

  var testImage2 = {
    image: 'http://placehold.it/10x10',
    link: 'http://other.example.com'
  };

  var testSettings = {
    autostart: false,
    delay: 7000,
    pagination: true,
    loop: false,
    images: []
  };

  var testContext = {
    router: {
      push: function push() {}
    }
  };

  beforeEach(function () {
    // We don't care about the router.
    _Link2.default.contextTypes = {
      router: _react2.default.PropTypes.any
    };
  });

  it('should render the slider with the correct number of images', function () {
    var mySettings = _extends({}, testSettings, {
      images: [testImage, testImage, testImage]
    });

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { settings: mySettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    }), testContext);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_Slider2.default.Item).length).toBe(mySettings.images.length);

    var images = wrapper.find(_Image2.default);
    expect(images.length).toBe(mySettings.images.length);
  });

  it('should map the correct image settings to the components', function () {
    var mySettings = _extends({}, testSettings, {
      images: [testImage, testImage2]
    });

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { settings: mySettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      }
    }));

    expect(wrapper).toMatchSnapshot();
    var images = wrapper.find(_Image2.default);
    var index = 0;
    images.forEach(function (image) {
      var imageProps = image.props();
      var imageSettings = mySettings.images[index];
      index += 1;

      expect(imageProps.src).toBe(imageSettings.image);
    });
  });

  it('should render no slider with just a single image', function () {
    var mySettings = _extends({}, testSettings, {
      images: [testImage]
    });

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { settings: mySettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_Slider2.default.Item).length).toBe(0);
  });

  it('should render the images unlinked if no link is set', function () {
    var mySettings = _extends({}, testSettings, {
      images: [_extends({}, testImage, {
        link: null
      })]
    });

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { settings: mySettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_Link2.default).length).toBe(0);
  });

  it('should render the images with links', function () {
    var mySettings = _extends({}, testSettings, {
      images: [testImage, _extends({}, testImage, {
        link: null
      }), testImage, testImage]
    });

    var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { settings: mySettings, __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      }
    }));

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(_Link2.default).length).toBe(mySettings.images.length - 1);
  });
});