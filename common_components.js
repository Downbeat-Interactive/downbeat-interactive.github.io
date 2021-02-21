'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import ErrorBoundary from './error_boundary.js';
import data from './game_data.js';
import GameFeatureFull from './game_features.js';

var NavigationMenu = function (_React$Component) {
  _inherits(NavigationMenu, _React$Component);

  function NavigationMenu(props) {
    _classCallCheck(this, NavigationMenu);

    var _this = _possibleConstructorReturn(this, (NavigationMenu.__proto__ || Object.getPrototypeOf(NavigationMenu)).call(this, props));

    _this.props = props;
    return _this;
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
            ),
            data.map(function (game) {
              return React.createElement(
                'li',
                {
                  key: game.id,
                  title: game.title
                },
                React.createElement(
                  'a',
                  { href: "/#" + game.id },
                  game.title
                )
              );
            }),
            React.createElement(
              'li',
              null,
              React.createElement(
                'a',
                { target: '_blank', href: 'https://us2.list-manage.com/contact-form?u=6567dd34ecd4d4f21831b0826&form_id=89b3517fe84a4fe3f83c5ce30f6cef7f' },
                'Contact Us'
              )
            )
          )
        )
      );
    }
  }]);

  return NavigationMenu;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

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
              { href: '/' },
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

var Socials = function (_React$Component3) {
  _inherits(Socials, _React$Component3);

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
                href: 'https://downbeat-interactive.itch.io/',
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
                href: 'https://us2.list-manage.com/contact-form?u=6567dd34ecd4d4f21831b0826&form_id=89b3517fe84a4fe3f83c5ce30f6cef7f',
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

var PrivacyLink = function (_React$Component4) {
  _inherits(PrivacyLink, _React$Component4);

  function PrivacyLink(props) {
    _classCallCheck(this, PrivacyLink);

    var _this4 = _possibleConstructorReturn(this, (PrivacyLink.__proto__ || Object.getPrototypeOf(PrivacyLink)).call(this, props));

    _this4.props = props;
    return _this4;
  }

  _createClass(PrivacyLink, [{
    key: 'render',
    value: function render() {
      if (typeof this.props.url !== 'undefined' && this.props.url.length > 0) {
        return React.createElement(
          ErrorBoundary,
          { showBack: false },
          React.createElement(
            'a',
            { href: this.props.url + "/privacy-policy/" },
            React.createElement(
              'p',
              null,
              'Privacy Policy'
            )
          )
        );
      } else return React.createElement('div', null);
    }
  }]);

  return PrivacyLink;
}(React.Component);

var GamePageLink = function (_React$Component5) {
  _inherits(GamePageLink, _React$Component5);

  function GamePageLink(props) {
    _classCallCheck(this, GamePageLink);

    var _this5 = _possibleConstructorReturn(this, (GamePageLink.__proto__ || Object.getPrototypeOf(GamePageLink)).call(this, props));

    _this5.props = props;
    return _this5;
  }

  _createClass(GamePageLink, [{
    key: 'render',
    value: function render() {
      if (typeof this.props.url !== 'undefined' && this.props.url.length > 0) {
        return React.createElement(
          ErrorBoundary,
          { showBack: false },
          React.createElement(
            'a',
            { href: this.props.url },
            React.createElement(
              'p',
              null,
              'More info ',
              React.createElement('i', { className: 'fas fa-arrow-right' })
            )
          )
        );
      } else return React.createElement('div', null);
    }
  }]);

  return GamePageLink;
}(React.Component);

var Footer = function (_React$Component6) {
  _inherits(Footer, _React$Component6);

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

var Content = function (_React$Component7) {
  _inherits(Content, _React$Component7);

  function Content(props) {
    _classCallCheck(this, Content);

    var _this7 = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

    _this7.props = props;
    return _this7;
  }

  _createClass(Content, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          ErrorBoundary,
          null,
          React.createElement(
            'section',
            { className: 'wrapper style2' },
            React.createElement(
              'div',
              { className: 'inner' },
              React.createElement(
                'div',
                { id: this.props.id, 'data-aos': 'fade-right', 'data-aos-delay': '100', className: 'box align-center' },
                React.createElement(
                  'div',
                  { className: 'content' },
                  React.createElement(
                    'div',
                    { className: 'align-center feature-content', 'data-aos': 'fade-up' },
                    React.createElement('div', { className: 'align-center feature-content', dangerouslySetInnerHTML: { __html: this.props.html, sanitize: true } }),
                    React.createElement('br', null)
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Content;
}(React.Component);

export { NavigationMenu, Header, Footer, PrivacyLink, GamePageLink, Content, Socials };