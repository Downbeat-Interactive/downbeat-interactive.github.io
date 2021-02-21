'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { GameFeatureFull, GameFeatureScreenshots } from './game_features.js';
import ErrorBoundary from './error_boundary.js';
import data from './game_data.js';
import { Header, Footer, NavigationMenu } from './common_components.js';

var domContainer = document.querySelector('#app_container');

var HomePageBanner = function (_React$Component) {
  _inherits(HomePageBanner, _React$Component);

  function HomePageBanner(props) {
    _classCallCheck(this, HomePageBanner);

    var _this = _possibleConstructorReturn(this, (HomePageBanner.__proto__ || Object.getPrototypeOf(HomePageBanner)).call(this, props));

    _this.props = props;
    return _this;
  }

  _createClass(HomePageBanner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var vid = document.getElementById('banner-video');
      vid.addEventListener("timeupdate", function () {
        if (vid.currentTime > vid.duration - 0.5) {
          vid.pause();
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var output = React.createElement(
        'section',
        { id: 'top-banner', className: 'banner full' },
        React.createElement(
          'article',
          null,
          React.createElement(
            'video',
            { id: 'banner-video', loop: true, muted: true, poster: 'images/intro.png' },
            React.createElement('source', { src: 'images/intro.webm', type: 'video/webm' }),
            React.createElement('source', { src: 'images/intro.mp4', type: 'video/mp4' }),
            React.createElement('img', { id: 'first-img', src: 'images/intro.png', alt: '' })
          ),
          React.createElement(
            'div',
            { className: 'inner' },
            React.createElement(
              'a',
              { href: '#about' },
              React.createElement(
                'header',
                null,
                React.createElement('p', null),
                React.createElement(
                  'h2',
                  null,
                  'Welcome'
                )
              )
            )
          )
        )
      );

      return output;
    }
  }]);

  return HomePageBanner;
}(React.Component);

var HomePageFeatures = function (_React$Component2) {
  _inherits(HomePageFeatures, _React$Component2);

  function HomePageFeatures() {
    _classCallCheck(this, HomePageFeatures);

    return _possibleConstructorReturn(this, (HomePageFeatures.__proto__ || Object.getPrototypeOf(HomePageFeatures)).apply(this, arguments));
  }

  _createClass(HomePageFeatures, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        ErrorBoundary,
        { showBack: true },
        data.map(function (game) {
          return React.createElement(GameFeatureFull, {
            key: game.id,
            id: game.id,
            title: game.title,
            url: game.url,
            description: game.description,
            videoUrl: game.videoUrl,
            storeUrl: game.storeUrl,
            subtitle: game.subtitle,
            videoDimensions: game.videoDimensions
          });
        })
      );
    }
  }]);

  return HomePageFeatures;
}(React.Component);

var HomePage = function (_React$Component3) {
  _inherits(HomePage, _React$Component3);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _possibleConstructorReturn(this, (HomePage.__proto__ || Object.getPrototypeOf(HomePage)).apply(this, arguments));
  }

  _createClass(HomePage, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(NavigationMenu, { data: data }),
        React.createElement(HomePageBanner, null),
        React.createElement(HomePageFeatures, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return HomePage;
}(React.Component);

ReactDOM.render(React.createElement(HomePage, null), domContainer);