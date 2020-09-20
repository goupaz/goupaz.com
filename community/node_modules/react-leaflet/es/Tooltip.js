"use strict";

import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import { Tooltip as LeafletTooltip } from 'leaflet';
import { withLeaflet } from './context';
import DivOverlay from './DivOverlay';

var Tooltip = /*#__PURE__*/function (_DivOverlay) {
  _inheritsLoose(Tooltip, _DivOverlay);

  function Tooltip() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _DivOverlay.call.apply(_DivOverlay, [this].concat(args)) || this;

    _defineProperty(_assertThisInitialized(_this), "onTooltipOpen", function (_ref) {
      var tooltip = _ref.tooltip;

      if (tooltip === _this.leafletElement) {
        _this.onOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTooltipClose", function (_ref2) {
      var tooltip = _ref2.tooltip;

      if (tooltip === _this.leafletElement) {
        _this.onClose();
      }
    });

    return _this;
  }

  var _proto = Tooltip.prototype;

  _proto.createLeafletElement = function createLeafletElement(props) {
    return new LeafletTooltip(this.getOptions(props), props.leaflet.popupContainer);
  };

  _proto.componentDidMount = function componentDidMount() {
    var popupContainer = this.props.leaflet.popupContainer;
    if (popupContainer == null) return;
    popupContainer.on({
      tooltipopen: this.onTooltipOpen,
      tooltipclose: this.onTooltipClose
    });
    popupContainer.bindTooltip(this.leafletElement);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var popupContainer = this.props.leaflet.popupContainer;
    if (popupContainer == null) return;
    popupContainer.off({
      tooltipopen: this.onTooltipOpen,
      tooltipclose: this.onTooltipClose
    });

    if (popupContainer._map != null) {
      popupContainer.unbindTooltip(this.leafletElement);
    }
  };

  return Tooltip;
}(DivOverlay);

_defineProperty(Tooltip, "defaultProps", {
  pane: 'tooltipPane'
});

export default withLeaflet(Tooltip);