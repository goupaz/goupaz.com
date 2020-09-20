"use strict";

import { DomUtil } from 'leaflet';

var splitClassName = function splitClassName(className) {
  if (className === void 0) {
    className = '';
  }

  return className.split(' ').filter(Boolean);
};

export var addClassName = function addClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    DomUtil.addClass(container, cls);
  });
};
export var removeClassName = function removeClassName(container, className) {
  splitClassName(className).forEach(function (cls) {
    DomUtil.removeClass(container, cls);
  });
};
export default (function (container, prevClassName, nextClassName) {
  if (container != null && nextClassName !== prevClassName) {
    if (prevClassName != null && prevClassName.length > 0) {
      removeClassName(container, prevClassName);
    }

    if (nextClassName != null && nextClassName.length > 0) {
      addClassName(container, nextClassName);
    }
  }
});