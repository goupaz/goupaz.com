"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.ControlledLayer = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _leaflet = require("leaflet");

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var _MapControl2 = _interopRequireDefault(require("./MapControl"));

// Abtract class for layer container, extended by BaseLayer and Overlay
var ControlledLayer = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2.default)(ControlledLayer, _Component);

  function ControlledLayer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "contextValue", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "layer", void 0);
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
    return children ? /*#__PURE__*/_react.default.createElement(_context.LeafletProvider, {
      value: this.contextValue
    }, children) : null;
  };

  return ControlledLayer;
}(_react.Component);

exports.ControlledLayer = ControlledLayer;

var BaseLayer = /*#__PURE__*/function (_ControlledLayer) {
  (0, _inheritsLoose2.default)(BaseLayer, _ControlledLayer);

  function BaseLayer(props) {
    var _this2;

    _this2 = _ControlledLayer.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this2), "addLayer", function (layer) {
      _this2.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this2$props = _this2.props,
          addBaseLayer = _this2$props.addBaseLayer,
          checked = _this2$props.checked,
          name = _this2$props.name;
      addBaseLayer(layer, name, checked);
    });
    _this2.contextValue = (0, _extends2.default)((0, _extends2.default)({}, props.leaflet), {}, {
      layerContainer: {
        addLayer: _this2.addLayer.bind((0, _assertThisInitialized2.default)(_this2)),
        removeLayer: _this2.removeLayer.bind((0, _assertThisInitialized2.default)(_this2))
      }
    });
    return _this2;
  }

  return BaseLayer;
}(ControlledLayer);

var Overlay = /*#__PURE__*/function (_ControlledLayer2) {
  (0, _inheritsLoose2.default)(Overlay, _ControlledLayer2);

  function Overlay(props) {
    var _this3;

    _this3 = _ControlledLayer2.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this3), "addLayer", function (layer) {
      _this3.layer = layer; // Keep layer reference to handle dynamic changes of props

      var _this3$props = _this3.props,
          addOverlay = _this3$props.addOverlay,
          checked = _this3$props.checked,
          name = _this3$props.name;
      addOverlay(layer, name, checked);
    });
    _this3.contextValue = (0, _extends2.default)((0, _extends2.default)({}, props.leaflet), {}, {
      layerContainer: {
        addLayer: _this3.addLayer.bind((0, _assertThisInitialized2.default)(_this3)),
        removeLayer: _this3.removeLayer.bind((0, _assertThisInitialized2.default)(_this3))
      }
    });
    return _this3;
  }

  return Overlay;
}(ControlledLayer);

var LayersControl = /*#__PURE__*/function (_MapControl) {
  (0, _inheritsLoose2.default)(LayersControl, _MapControl);

  function LayersControl(props) {
    var _this4;

    _this4 = _MapControl.call(this, props) || this;
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this4), "controlProps", void 0);
    _this4.controlProps = {
      addBaseLayer: _this4.addBaseLayer.bind((0, _assertThisInitialized2.default)(_this4)),
      addOverlay: _this4.addOverlay.bind((0, _assertThisInitialized2.default)(_this4)),
      leaflet: props.leaflet,
      removeLayer: _this4.removeLayer.bind((0, _assertThisInitialized2.default)(_this4)),
      removeLayerControl: _this4.removeLayerControl.bind((0, _assertThisInitialized2.default)(_this4))
    };
    return _this4;
  }

  var _proto2 = LayersControl.prototype;

  _proto2.createLeafletElement = function createLeafletElement(props) {
    var _children = props.children,
        options = (0, _objectWithoutPropertiesLoose2.default)(props, ["children"]);
    return new _leaflet.Control.Layers(undefined, undefined, options);
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

    var children = _react.Children.map(this.props.children, function (child) {
      return child ? (0, _react.cloneElement)(child, _this6.controlProps) : null;
    });

    return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, children);
  };

  return LayersControl;
}(_MapControl2.default);

var LayersControlExport = (0, _context.withLeaflet)(LayersControl);
LayersControlExport.BaseLayer = BaseLayer;
LayersControlExport.Overlay = Overlay;
var _default = LayersControlExport;
exports.default = _default;