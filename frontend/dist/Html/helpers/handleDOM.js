'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Copyright (c) 2017, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Parses a collection of DOM nodes for external script tags.
 * @param {Array} nodes A collection of DOM nodes.
 * @param {Function} callback Will be called when a single script is loaded.
 * @param {boolean} isRoot Whether this is the root level of the given DOM tree.
 * @return {Array} A collection of external script tags.
 */
var getExternalScripts = exports.getExternalScripts = function getExternalScripts(nodes, callback) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var nodesArray = [].slice.call(nodes);

  var externalScripts = nodesArray.reduce(function (result, node) {
    // We only want external scripts.
    if (node.tagName !== 'SCRIPT' || !node.src) {
      if (node.childNodes && node.childNodes.length) {
        return result.concat(getExternalScripts(node.childNodes, callback, false));
      }
      return result;
    }

    // Create a new script tag.
    var script = document.createElement('script');

    script.type = node.type;
    script.src = node.src;
    script.async = node.async;
    script.onload = callback;
    script.onerror = callback;

    result.push(script);
    return result;
  }, []);

  if (!externalScripts.length && isRoot) {
    return callback();
  }

  return externalScripts;
};

/**
 * Parses a collection of DOM nodes for inline script tags.
 * @param {Array} nodes A collection of DOM nodes.
 * @return {Array} A collection of inline script tags.
 */
var getInlineScripts = exports.getInlineScripts = function getInlineScripts(nodes) {
  var nodesArray = [].slice.call(nodes);

  return nodesArray.reduce(function (result, node) {
    // We only want scripts.
    if (node.tagName !== 'SCRIPT' || node.src) {
      if (node.childNodes && node.childNodes.length) {
        return result.concat(getInlineScripts(node.childNodes));
      }
      return result;
    }

    // Create a new script tag.
    var script = document.createElement('script');

    script.type = node.type;
    script.textContent = node.innerText;

    result.push(script);
    return result;
  }, []);
};

/**
 * Parses a collection of DOM nodes for non-script tags.
 * @param {Array} nodes A collection of DOM nodes.
 * @return {Object} A DOM node containing the HTML content.
 */
var getHTMLContent = exports.getHTMLContent = function getHTMLContent(nodes) {
  var contents = document.createElement('div');
  var nodesArray = [].slice.call(nodes);

  nodesArray.forEach(function (node) {
    // We don't care about script tags.
    if (node.tagName === 'SCRIPT') {
      return;
    }

    contents.appendChild(node.cloneNode(true));
  });

  return contents;
};

/**
 * Checks if a DOM container already exist and creates a new one if it doesn't exist.
 * @param {string} containerID The HTML id attribute of the container.
 * @return {Object} The container DOM node.
 */
var getDOMContainer = exports.getDOMContainer = function getDOMContainer(containerID) {
  var container = document.getElementById(containerID);

  if (container) {
    container.innerHTML = '';
  } else {
    container = document.createElement('div');
    container.id = containerID;
    document.body.appendChild(container);
  }

  return container;
};