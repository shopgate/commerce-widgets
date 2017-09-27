'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getExternalScripts = exports.getExternalScripts = function getExternalScripts(nodes, callback) {
  var isRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  var nodesArray = [].slice.call(nodes);

  var externalScripts = nodesArray.reduce(function (result, node) {
    if (node.tagName !== 'SCRIPT' || !node.src) {
      if (node.childNodes && node.childNodes.length) {
        return result.concat(getExternalScripts(node.childNodes, callback, false));
      }
      return result;
    }

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

var getInlineScripts = exports.getInlineScripts = function getInlineScripts(nodes) {
  var nodesArray = [].slice.call(nodes);

  return nodesArray.reduce(function (result, node) {
    if (node.tagName !== 'SCRIPT' || node.src) {
      if (node.childNodes && node.childNodes.length) {
        return result.concat(getInlineScripts(node.childNodes));
      }
      return result;
    }

    var script = document.createElement('script');

    script.type = node.type;
    script.textContent = node.innerText;

    result.push(script);
    return result;
  }, []);
};

var getHTMLContent = exports.getHTMLContent = function getHTMLContent(nodes) {
  var contents = document.createElement('div');
  var nodesArray = [].slice.call(nodes);

  nodesArray.forEach(function (node) {
    if (node.tagName === 'SCRIPT') {
      return;
    }

    contents.appendChild(node.cloneNode(true));
  });

  return contents;
};

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