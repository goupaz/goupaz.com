"use strict";

exports.__esModule = true;
exports.default = exports.removeClassName = exports.addClassName = void 0;

var _leaflet = require("leaflet");

var splitClassName = function splitClassName(className) {
  if (className === void 0) {
    className = '';
  }

  return className.split(' ').filter(Boolean);
};

var addClassName = function addClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    _leaflet.DomUtil.addClass(container, cls);
  });
};

exports.addClassName = addClassName;

var removeClassName = function removeClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    _leaflet.DomUtil.removeClass(container, cls);
  });
};

exports.removeClassName = removeClassName;

var _default = function _default(container, prevClassName, nextClassName) {
  if (container != null && nextClassName !== prevClassName) {
    if (prevClassName != null && prevClassName.length > 0) {
      removeClassName(container, prevClassName);
    }

    if (nextClassName != null && nextClassName.length > 0) {
      addClassName(container, nextClassName);
    }
  }
};

exports.default = _default;