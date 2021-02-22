'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import ErrorBoundary from './error_boundary.js';
import { PrivacyLink, GamePageLink } from './common_components.js';
import { GooglePlayScraper } from './utils.js';

var FeatureStoreButton = function (_React$Component) {
  _inherits(FeatureStoreButton, _React$Component);

  function FeatureStoreButton(props) {
    _classCallCheck(this, FeatureStoreButton);

    var _this = _possibleConstructorReturn(this, (FeatureStoreButton.__proto__ || Object.getPrototypeOf(FeatureStoreButton)).call(this, props));

    _this.props = props;
    return _this;
  }

  _createClass(FeatureStoreButton, [{
    key: 'render',
    value: function render() {
      if (typeof this.props.bundle !== 'undefined' && this.props.bundle.length > 0) return React.createElement(
        'a',
        { target: '_blank', href: "https://play.google.com/store/apps/details?id=" + this.props.bundle },
        React.createElement('img', { className: 'image-button', src: '/images/google-play-download.png', alt: 'See on Google Play' })
      );else return React.createElement('div', null);
    }
  }]);

  return FeatureStoreButton;
}(React.Component);

var FeatureVideo = function (_React$Component2) {
  _inherits(FeatureVideo, _React$Component2);

  function FeatureVideo(props) {
    _classCallCheck(this, FeatureVideo);

    var _this2 = _possibleConstructorReturn(this, (FeatureVideo.__proto__ || Object.getPrototypeOf(FeatureVideo)).call(this, props));

    _this2.props = props;
    return _this2;
  }

  _createClass(FeatureVideo, [{
    key: 'render',
    value: function render() {
      if (typeof this.props.url !== 'undefined' && this.props.url.length > 0) {
        return React.createElement(
          ErrorBoundary,
          { showBack: false },
          React.createElement(
            'div',
            { id: this.props.id + "-video", className: 'iframe-container align-center feature-video' },
            React.createElement('iframe', { className: 'feature-iframe',
              width: this.props.width,
              height: this.props.height,
              src: this.props.url,
              frameBorder: '0',
              allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
              allowFullScreen: true
            })
          )
        );
      } else return React.createElement('div', null);
    }
  }]);

  return FeatureVideo;
}(React.Component);

var BoxFull = function (_React$Component3) {
  _inherits(BoxFull, _React$Component3);

  function BoxFull(props) {
    _classCallCheck(this, BoxFull);

    var _this3 = _possibleConstructorReturn(this, (BoxFull.__proto__ || Object.getPrototypeOf(BoxFull)).call(this, props));

    _this3.props = props;
    return _this3;
  }

  _createClass(BoxFull, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        { className: 'wrapper style2' },
        React.createElement(
          'div',
          { className: 'inner' },
          React.createElement(
            'div',
            { id: this.props.id, 'data-aos': 'fade-right', 'data-aos-delay': '100', className: 'box align-center' },
            this.props.inner
          )
        )
      );
    }
  }]);

  return BoxFull;
}(React.Component);

var GameFeatureFull = function (_React$Component4) {
  _inherits(GameFeatureFull, _React$Component4);

  function GameFeatureFull(props) {
    _classCallCheck(this, GameFeatureFull);

    var _this4 = _possibleConstructorReturn(this, (GameFeatureFull.__proto__ || Object.getPrototypeOf(GameFeatureFull)).call(this, props));

    _this4.props = props;
    return _this4;
  }

  _createClass(GameFeatureFull, [{
    key: 'render',
    value: function render() {
      if (this.props.id != 'default' && this.props.id.length > 0) {
        return React.createElement(
          ErrorBoundary,
          null,
          React.createElement(BoxFull, { id: this.props.id, inner: React.createElement(
              'div',
              null,
              React.createElement(FeatureVideo, { url: this.props.videoUrl, id: this.props.id }),
              React.createElement(
                'div',
                { className: 'content' },
                React.createElement(
                  'header',
                  { className: 'align-center', 'data-aos': 'slide-left', 'data-aos-duration': '400' },
                  React.createElement(
                    'p',
                    null,
                    this.props.subtitle
                  ),
                  React.createElement(
                    'a',
                    { className: 'no-decoration', href: this.props.url },
                    React.createElement(
                      'h2',
                      { className: 'feature-title' },
                      this.props.title
                    )
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'align-center feature-content', 'data-aos': 'fade-up' },
                  React.createElement('div', { dangerouslySetInnerHTML: { __html: this.props.description, sanitize: true } }),
                  React.createElement('br', null),
                  React.createElement(GamePageLink, { url: this.props.url })
                ),
                React.createElement(
                  'footer',
                  { className: 'align-center', 'data-aos': 'zoom-in' },
                  React.createElement(FeatureStoreButton, { bundle: this.props.bundle })
                ),
                React.createElement(PrivacyLink, { url: this.props.url, show: this.props.showPrivacyURL })
              )
            ) })
        );
      } else {
        return null;
      }
    }
  }]);

  return GameFeatureFull;
}(React.Component);

var GameFeatureScreenshots = function (_React$Component5) {
  _inherits(GameFeatureScreenshots, _React$Component5);

  function GameFeatureScreenshots(props) {
    _classCallCheck(this, GameFeatureScreenshots);

    var _this5 = _possibleConstructorReturn(this, (GameFeatureScreenshots.__proto__ || Object.getPrototypeOf(GameFeatureScreenshots)).call(this, props));

    _this5.props = props;
    _this5.data = props.data;
    return _this5;
  }

  _createClass(GameFeatureScreenshots, [{
    key: 'render',
    value: function render() {
      if (this.data.nScreens > 0) {
        var output = [];

        output.push();
        for (var i = 0; i < this.data.nScreens; i++) {
          output.push(React.createElement('img', { className: 'game-screenshot', src: this.props.data.url + "/screens/" + i.toString() + ".png" }));
        }

        return React.createElement(BoxFull, { id: this.props.data.id, inner: React.createElement(
            'div',
            { className: 'content' },
            React.createElement(
              'header',
              { className: 'align-center', 'data-aos': 'slide-left', 'data-aos-duration': '400' },
              React.createElement(
                'p',
                null,
                this.props.data.title
              ),
              React.createElement(
                'a',
                { className: 'no-decoration', href: this.props.data.url },
                React.createElement(
                  'h2',
                  { className: 'feature-title' },
                  'Screenshots'
                )
              )
            ),
            React.createElement(
              'div',
              { className: 'align-center feature-content' },
              React.createElement('br', null)
            ),
            output
          )

        });
      } else return null;
    }
  }]);

  return GameFeatureScreenshots;
}(React.Component);

export default GameFeatureFull;
export { GameFeatureFull, GameFeatureScreenshots };