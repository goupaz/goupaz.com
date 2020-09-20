'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var linkEl;

function drawIcon(src, num, cb) {
  var img = document.createElement('img');
  img.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    var context = canvas.getContext('2d');
    context.clearRect(0, 0, img.width, img.height);
    context.drawImage(img, 0, 0);

    var top = img.height - 9,
        left = img.width - 7 - 1,
        bottom = 16,
        right = 16,
        radius = 2;

    context.fillStyle = '#F03D25';
    context.strokeStyle = '#F03D25';
    context.lineWidth = 1;

    context.beginPath();
    context.moveTo(left + radius, top);
    context.quadraticCurveTo(left, top, left, top + radius);
    context.lineTo(left, bottom - radius);
    context.quadraticCurveTo(left, bottom, left + radius, bottom);
    context.lineTo(right - radius, bottom);
    context.quadraticCurveTo(right, bottom, right, bottom - radius);
    context.lineTo(right, top + radius);
    context.quadraticCurveTo(right, top, right - radius, top);
    context.closePath();
    context.fill();

    context.font = 'bold 10px arial';
    context.fillStyle = '#FFF';
    context.textAlign = 'right';
    context.textBaseline = 'top';
    context.fillText(num, 15, 6);

    cb(null, context.canvas.toDataURL());
  };
  img.src = src;
}

var Favicon = function (_React$Component) {
  _inherits(Favicon, _React$Component);

  function Favicon() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Favicon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Favicon.__proto__ || Object.getPrototypeOf(Favicon)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      animationIndex: 0,
      animationLoop: null,
      animationRunning: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Favicon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      Favicon.mountedInstances.push(this);
      Favicon.update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var activeInstance = Favicon.getActiveInstance();
      clearInterval(activeInstance.state.animationLoop);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.url === this.props.url && prevProps.animated === this.props.animated && prevProps.alertCount === this.props.alertCount && prevProps.keepIconLink === this.props.keepIconLink) return;

      Favicon.update();
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }], [{
    key: 'getActiveInstance',
    value: function getActiveInstance() {
      return Favicon.mountedInstances[Favicon.mountedInstances.length - 1];
    }
  }, {
    key: 'draw',
    value: function draw() {
      if (typeof document === 'undefined') return;

      var activeInstance = Favicon.getActiveInstance();
      if (typeof linkEl === 'undefined') {
        var head = document.getElementsByTagName('head')[0];
        linkEl = document.createElement('link');
        linkEl.type = 'image/x-icon';
        linkEl.rel = 'icon';

        // remove existing favicons
        var links = head.getElementsByTagName("link");
        for (var i = links.length; --i >= 0;) {
          if (/\bicon\b/i.test(links[i].getAttribute("rel")) && !activeInstance.props.keepIconLink(links[i])) {
            head.removeChild(links[i]);
          }
        }

        head.appendChild(linkEl);
      }

      var currentUrl;

      if (activeInstance.props.url instanceof Array) {
        currentUrl = activeInstance.props.url[activeInstance.state.animationIndex];
      } else {
        currentUrl = activeInstance.props.url;
      }

      if (activeInstance.props.alertCount) {
        drawIcon(currentUrl, activeInstance.props.alertCount, function (err, url) {
          linkEl.href = url;
        });
      } else {
        linkEl.href = currentUrl;
      }
    }
  }, {
    key: 'update',
    value: function update() {
      if (typeof document === 'undefined') return;

      var activeInstance = Favicon.getActiveInstance();
      var isAnimated = activeInstance.props.url instanceof Array && activeInstance.props.animated;

      // clear any running animations
      var intervalId = null;
      clearInterval(activeInstance.state.animationLoop);

      if (isAnimated) {
        var animateFavicon = function animateFavicon() {
          var nextAnimationIndex = (activeInstance.state.animationIndex + 1) % activeInstance.props.url.length;
          Favicon.draw();
          activeInstance.setState({ animationIndex: nextAnimationIndex });
        };
        intervalId = setInterval(animateFavicon, activeInstance.props.animationDelay);
        animateFavicon();
      } else {
        Favicon.draw();
      }

      activeInstance.setState({ animationLoop: intervalId });
    }
  }]);

  return Favicon;
}(React.Component);

Favicon.displayName = 'Favicon';
Favicon.defaultProps = {
  alertCount: null,
  animated: true,
  animationDelay: 500,
  keepIconLink: function keepIconLink() {
    return false;
  }
};
Favicon.mountedInstances = [];


module.exports = Favicon;

