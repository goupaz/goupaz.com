"use strict";

import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Control } from 'leaflet';
import React, { cloneElement, Component, Children, Fragment } from 'react';
import { LeafletProvider, withLeaflet } from './context';
import MapControl from './MapControl';
// Abtract class for layer container, extended by BaseLayer and Overlay
export var ControlledLayer = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ControlledLayer, _Component);

  function ControlledLayer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "contextValue", void 0);

    _defineProperty(_assertThisInitialized(_this), "layer", void 0);

    return _this;
  }

  var _proto = ControlledLayer.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(_ref) {
    var checked = _ref.checked;

    if (this.props.leaflet.map == null) {
      return;
    } // Handle dynamically (un)checking the layer => adding/removing from the map


    if (this.props.checked === true && (checked == null || checked === false)) {
      this.props.leaflet.map.addLayer(this.layer);
    } else if (checked === true && (this.props.checked == null || this.props.checked === false)) {
      this.props.leaflet.map.removeLayer(this.layer);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.removeLayerControl(this.layer);
  };

  _proto.addLayer = function addLayer() {
    throw new Error('Must be implemented in extending class');
  };

  _proto.removeLayer = function removeLayer(layer) {
    this.props.removeLayer(layer);
  };

  _proto.render = function render() {
    var children = this.props.children;
    return children ? /*#__PURE__*/React.createElement(LeafletProvider, {
      value: this.contextValue
    }, children) : null;
  };

  return ControlledLayer;
}(Component);

var BaseLayer = /*#__PURE__*/function (_ControlledLayer) {
  _inheritsLoose(BaseLayer, _ControlledLayer);

  function BaseLayer(props) {
    var _this2;

    _this2 = _ControlledLayer.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this2), "addLayer", function (layer) {
      _this2.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this2$props = _this2.props,
          addBaseLayer = _this2$props.addBaseLayer,
          checked = _this2$props.checked,
          name = _this2$props.name;
      addBaseLayer(layer, name, checked);
    });

    _this2.contextValue = _extends(_extends({}, props.leaflet), {}, {
      layerContainer: {
        addLayer: _this2.addLayer.bind(_assertThisInitialized(_this2)),
        removeLayer: _this2.removeLayer.bind(_assertThisInitialized(_this2))
      }
    });
    return _this2;
  }

  return BaseLayer;
}(ControlledLayer);

var Overlay = /*#__PURE__*/function (_ControlledLayer2) {
  _inheritsLoose(Overlay, _ControlledLayer2);

  function Overlay(props) {
    var _this3;

    _this3 = _ControlledLayer2.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this3), "addLayer", function (layer) {
      _this3.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this3$props = _this3.props,
          addOverlay = _this3$props.addOverlay,
          checked = _this3$props.checked,
          name = _this3$props.name;
      addOverlay(layer, name, checked);
    });

    _this3.contextValue = _extends(_extends({}, props.leaflet), {}, {
      layerContainer: {
        addLayer: _this3.addLayer.bind(_assertThisInitialized(_this3)),
        removeLayer: _this3.removeLayer.bind(_assertThisInitialized(_this3))
      }
    });
    return _this3;
  }

  return Overlay;
}(ControlledLayer);

var LayersControl = /*#__PURE__*/function (_MapControl) {
  _inheritsLoose(LayersControl, _MapControl);

  function LayersControl(props) {
    var _this4;

    _this4 = _MapControl.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this4), "controlProps", void 0);

    _this4.controlProps = {
      addBaseLayer: _this4.addBaseLayer.bind(_assertThisInitialized(_this4)),
      addOverlay: _this4.addOverlay.bind(_assertThisInitialized(_this4)),
      leaflet: props.leaflet,
      removeLayer: _this4.removeLayer.bind(_assertThisInitialized(_this4)),
      removeLayerControl: _this4.removeLayerControl.bind(_assertThisInitialized(_this4))
    };
    return _this4;
  }

  var _proto2 = LayersControl.prototype;

  _proto2.createLeafletElement = function createLeafletElement(props) {
    var _children = props.children,
        options = _objectWithoutPropertiesLoose(props, ["children"]);

    return new Control.Layers(undefined, undefined, options);
  };

  _proto2.updateLeafletElement = function updateLeafletElement(fromProps, toProps) {
    _MapControl.prototype.updateLeafletElement.call(this, fromProps, toProps);

    if (toProps.collapsed !== fromProps.collapsed) {
      if (toProps.collapsed === true) {
        this.leafletElement.collapse();
      } else {
        this.leafletElement.expand();
      }
    }
  };

  _proto2.componentWillUnmount = function componentWillUnmount() {
    var _this5 = this;

    setTimeout(function () {
      _MapControl.prototype.componentWillUnmount.call(_this5);
    }, 0);
  };

  _proto2.addBaseLayer = function addBaseLayer(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addBaseLayer(layer, name);
  };

  _proto2.addOverlay = function addOverlay(layer, name, checked) {
    if (checked === void 0) {
      checked = false;
    }

    if (checked && this.props.leaflet.map != null) {
      this.props.leaflet.map.addLayer(layer);
    }

    this.leafletElement.addOverlay(layer, name);
  };

  _proto2.removeLayer = function removeLayer(layer) {
    if (this.props.leaflet.map != null) {
      this.props.leaflet.map.removeLayer(layer);
    }
  };

  _proto2.removeLayerControl = function removeLayerControl(layer) {
    this.leafletElement.removeLayer(layer);
  };

  _proto2.render = function render() {
    var _this6 = this;

    var children = Children.map(this.props.children, function (child) {
      return child ? cloneElement(child, _this6.controlProps) : null;
    });
    return /*#__PURE__*/React.createElement(Fragment, null, children);
  };

  return LayersControl;
}(MapControl);

var LayersControlExport = withLeaflet(LayersControl);
LayersControlExport.BaseLayer = BaseLayer;
LayersControlExport.Overlay = Overlay;
export default LayersControlExport;