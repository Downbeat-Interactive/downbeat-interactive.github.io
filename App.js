'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import HomePageFeatures from './game_features.js';
import ErrorBoundary from './error_boundary.js';
var domContainer = document.querySelector('#app_container');

var NavigationMenu = function (_React$Component) {
  _inherits(NavigationMenu, _React$Component);

  function NavigationMenu() {
    _classCallCheck(this, NavigationMenu);

    return _possibleConstructorReturn(this, (NavigationMenu.__proto__ || Object.getPrototypeOf(NavigationMenu)).apply(this, arguments));
  }

  _createClass(NavigationMenu, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        ErrorBoundary,
        null,
        React.createElement(
          'nav',
          { id: 'menu' },
          React.createElement(
            'ul',
            { className: 'links' },
            React.createElement(
              'li',
              { key: 'home' },
              React.createElement(
                'a',
                { href: '/' },
                'Home'
              )
            )
          )
        )
      );
    }
  }]);

  return NavigationMenu;
}(React.Component);

var HomePageBanner = function (_React$Component2) {
  _inherits(HomePageBanner, _React$Component2);

  function HomePageBanner(props) {
    _classCallCheck(this, HomePageBanner);

    var _this2 = _possibleConstructorReturn(this, (HomePageBanner.__proto__ || Object.getPrototypeOf(HomePageBanner)).call(this, props));

    _this2.props = props;
    return _this2;
  }

  _createClass(HomePageBanner, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'section',
        { id: 'top-banner', className: 'banner full' },
        React.createElement(
          'article',
          null,
          React.createElement(
            'video',
            { loop: true, muted: true, poster: 'images/intro.png' },
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
                  'About'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return HomePageBanner;
}(React.Component);

var Header = function (_React$Component3) {
  _inherits(Header, _React$Component3);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        ErrorBoundary,
        null,
        React.createElement(
          'header',
          { id: 'header', className: 'alt' },
          React.createElement(
            'div',
            { className: 'logo' },
            React.createElement(
              'a',
              { href: '/downbeat/' },
              'Downbeat ',
              React.createElement(
                'span',
                null,
                '| Interactive LLC'
              )
            )
          ),
          React.createElement(
            'a',
            { href: '#menu' },
            'Menu'
          )
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Socials = function (_React$Component4) {
  _inherits(Socials, _React$Component4);

  function Socials() {
    _classCallCheck(this, Socials);

    return _possibleConstructorReturn(this, (Socials.__proto__ || Object.getPrototypeOf(Socials)).apply(this, arguments));
  }

  _createClass(Socials, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        ErrorBoundary,
        null,
        React.createElement(
          'ul',
          { className: 'icons' },
          React.createElement(
            'li',
            { key: 'item0' },
            React.createElement(
              'a',
              {
                target: '_blank ',
                href: 'https://twitter.com/DownbeatGames ',
                className: 'icon fa-twitter '
              },
              React.createElement(
                'span',
                { className: 'label ' },
                'Twitter'
              )
            )
          ),
          React.createElement(
            'li',
            { key: 'item1' },
            React.createElement(
              'a',
              {
                target: '_blank ',
                href: 'https://www.facebook.com/downbeat.interactive',
                className: 'icon fa-facebook '
              },
              React.createElement(
                'span',
                { className: 'label ' },
                'Facebook'
              )
            )
          ),
          React.createElement(
            'li',
            { key: 'item2' },
            React.createElement(
              'a',
              {
                target: '_blank ',
                href: 'https://www.instagram.com/downbeat.interactive/ ',
                className: 'icon fa-instagram '
              },
              React.createElement(
                'span',
                { className: 'label ' },
                'Instagram'
              )
            )
          ),
          React.createElement(
            'li',
            { key: 'item3' },
            React.createElement(
              'a',
              {
                target: '_blank ',
                href: 'https://www.youtube.com/channel/UCWCmhKBiBgqx-RswULM0uoQ ',
                className: 'icon fa-youtube '
              },
              React.createElement(
                'span',
                { className: 'label ' },
                'YouTube'
              )
            )
          ),
          React.createElement(
            'li',
            { key: 'item4' },
            React.createElement(
              'a',
              {
                target: '_blank ',
                href: 'https://lydianchromatic.itch.io/ ',
                className: 'icon fa-itch-io '
              },
              React.createElement(
                'span',
                { className: 'label ' },
                'Itch'
              )
            )
          ),
          React.createElement(
            'li',
            { key: 'item5' },
            React.createElement(
              'a',
              {
                target: '_blank ',
                href: 'mailto:downbeat@jacksonsdean.com ',
                className: 'icon fa-envelope '
              },
              React.createElement(
                'span',
                { className: 'label ' },
                'Email'
              )
            )
          )
        )
      );
    }
  }]);

  return Socials;
}(React.Component);

var Footer = function (_React$Component5) {
  _inherits(Footer, _React$Component5);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        ErrorBoundary,
        null,
        React.createElement(
          'footer',
          { id: 'footer', className: 'downbeat-footer' },
          React.createElement(
            'div',
            { className: 'container align-center' },
            React.createElement(Socials, null)
          ),
          React.createElement(
            'div',
            { className: 'copyright downbeat-copyright' },
            React.createElement(
              'div',
              { className: 'content copyright align-center' },
              'Downbeat Interactive LLC',
              React.createElement('br', null),
              ' Google Play and the Google Play logo are trademarks of Google LLC.',
              React.createElement('br', null)
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(React.Component);

var App = function (_React$Component6) {
  _inherits(App, _React$Component6);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        React.createElement(NavigationMenu, null),
        React.createElement(HomePageBanner, null),
        React.createElement(HomePageFeatures, null),
        React.createElement(Footer, null)
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), domContainer);