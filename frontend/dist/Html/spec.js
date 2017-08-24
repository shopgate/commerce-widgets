'use strict';

var _jsxFileName = 'frontend/src/Html/spec.jsx';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * This source code is licensed under the Apache 2.0 license found in the
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _jsdom = require('jsdom');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var mockConstructor = jest.fn();
jest.mock('Library/helpers/parsed-link', function () {
  return function () {
    /**
     * Mocked version of the ParsedLink constructor.
     * @param {string} href Link location.
     */
    function _class(href) {
      _classCallCheck(this, _class);

      mockConstructor(href);
    }

    /* eslint-disable class-methods-use-this */
    /**
     * Mocked version of open function.
     */


    _createClass(_class, [{
      key: 'open',
      value: function open() {}
      /* eslint-enable class-methods-use-this */

    }]);

    return _class;
  }();
});

describe('<HtmlWidget />', function () {
  it('should render the HtmlWidget', function () {
    var settings = {
      // The value for html is the HTML-escaped equivalent of the following:
      // <h1>Hello World!</h1>
      html: '&lt;h1&gt;Hello World!&lt;/h1&gt;'
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { settings: settings, __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      }
    }));

    // Test result of dangerouslySetInnerHTML.
    expect(wrapper.html()).toEqual('<div><h1>Hello World!</h1></div>');
    expect(wrapper.render()).toMatchSnapshot();
  });

  it('strips out the script tags', function () {
    var settings = {
      // The value for html is the HTML-escaped equivalent of the following:
      // <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js"></script>
      // <script type="text/javascript">var x = 42;</script>
      // <p>Foo Bar</p>
      // <script>var y = 23;</script>
      html: '&lt;script src=&quot;https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js&quot;&gt;&lt;/script&gt; &lt;script type=&quot;text/javascript&quot;&gt;var x = 42;&lt;/script&gt; &lt;p&gt;Foo Bar&lt;/p&gt; &lt;script&gt;var y = 23;&lt;/script&gt;'
    };

    var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { settings: settings, __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      }
    }));

    // Test result of dangerouslySetInnerHTML.
    expect(wrapper.html()).toEqual('<div><p>Foo Bar</p> </div>');
    expect(wrapper).toMatchSnapshot();
  });

  describe('Link handling', function () {
    beforeEach(function () {
      mockConstructor.mockClear();
    });

    it('follows a link from a plain <a>', function () {
      var doc = new _jsdom.JSDOM('<!doctype html><html><body><div>/<div></body></html>').window.document;

      var settings = {
        html: '&lt;a id=&quot;link&quot; href=&quot;#follow-me-and-everything-is-alright&quot;&gt;Plain Link&lt;/a&gt;'
      };
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { settings: settings, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), {
        attachTo: doc.getElementsByTagName('div')[0]
      });

      var aTag = doc.getElementsByTagName('a')[0];
      aTag.closest = function () {
        return aTag;
      };
      var event = { target: aTag, preventDefault: function preventDefault() {} };
      wrapper.instance().handleTap(event);

      expect(mockConstructor).toHaveBeenCalledTimes(1);
    });

    it('follows a link from a <a> with other HTML inside', function () {
      var doc = new _jsdom.JSDOM('<!doctype html><html><body><div>/<div></body></html>').window.document;

      var settings = {
        html: '&lt;a id=&quot;link&quot; href=&quot;#I-ll-be-the-one-to-tuck-you-in-at-night&quot;&gt;&lt;span&gt;Span Link&lt;/span&gt;&lt;/a&gt;'
      };
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { settings: settings, __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }), {
        attachTo: doc.getElementsByTagName('div')[0]
      });

      var aTag = doc.getElementsByTagName('a')[0];
      var spanTag = doc.getElementsByTagName('span')[0];
      spanTag.closest = function () {
        return aTag;
      };
      var event = { target: spanTag, preventDefault: function preventDefault() {} };
      wrapper.instance().handleTap(event);

      expect(mockConstructor).toHaveBeenCalledTimes(1);
    });
  });
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mockConstructor, 'mockConstructor', 'frontend/src/Html/spec.jsx');
}();

;