'use strict';

import ErrorBoundary from './error_boundary.js';
import mobileData from './mobile_game_data.js';
class NavigationMenu extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  clickMenu() {
    var target = document.getElementById("menu");
    target.style.zIndex = 10;
    target.style.visibility = "visible";
    target.style.transform = "translateX(0)";
    const y = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
  componentDidMount() {
    if (this.props.dandy == "true") document.getElementById("menu-button").addEventListener("click", this.clickMenu);
  }
  render() {
    return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement("nav", {
      id: "menu"
    }, /*#__PURE__*/React.createElement("ul", {
      className: "links"
    }, /*#__PURE__*/React.createElement("li", {
      key: "home"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/"
    }, /*#__PURE__*/React.createElement("i", {
      class: "fas fa-home"
    }), "    Home")), /*#__PURE__*/React.createElement("li", {
      key: "about"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/about/"
    }, /*#__PURE__*/React.createElement("i", {
      class: "fas fa-info-circle"
    }), "    About Us")), /*#__PURE__*/React.createElement(GamesDropdown, {
      data: this.props.data
    }), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "https://us7.list-manage.com/contact-form?u=38cc654b1acbc51ccf30871b4&form_id=e7f0d3184720285b9c1a3012f721277c"
    }, /*#__PURE__*/React.createElement("i", {
      class: "fas fa-envelope"
    }), "    Contact Us")), /*#__PURE__*/React.createElement("li", null, " ", /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "https://mailchi.mp/5a08e8f7d203/subscribe"
    }, /*#__PURE__*/React.createElement("i", {
      class: "fas fa-bullhorn"
    }), "    Get our newsletter")))));
  }
}
class GamesDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.clickExpandGames = this.clickExpandGames.bind(this);
    this.clickExpandMobile = this.clickExpandMobile.bind(this);
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.rootRef = React.createRef();
    this.state = {
      listExpanded: false,
      mobileListExpanded: false
    };
  }
  componentDidMount() {
    if (this.rootRef.current) this.rootRef.current.addEventListener('click', this.handleMenuClick);
  }
  componentWillUnmount() {
    if (this.rootRef.current) this.rootRef.current.removeEventListener('click', this.handleMenuClick);
  }
  handleMenuClick(e) {
    const target = e.target;
    const gamesToggle = target.closest && target.closest('.game-list-toggle');
    if (gamesToggle && this.rootRef.current.contains(gamesToggle)) {
      this.clickExpandGames(e);
      return;
    }
    const mobileToggle = target.closest && target.closest('.game-list-group-toggle');
    if (mobileToggle && this.rootRef.current.contains(mobileToggle)) this.clickExpandMobile(e);
  }
  clickExpandGames(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState(state => ({
      listExpanded: !state.listExpanded,
      mobileListExpanded: state.listExpanded ? false : state.mobileListExpanded
    }));
  }
  clickExpandMobile(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState(state => ({
      mobileListExpanded: !state.mobileListExpanded
    }));
  }
  render() {
    const pageData = Array.isArray(this.props.data) ? this.props.data : [];
    const games = [...mobileData, ...pageData].filter((game, index, array) => game.title.length > 0 && array.findIndex(item => item.id == game.id) == index);
    const mobileGameIds = new Set(mobileData.map(game => game.id));
    const mobileGames = games.filter(game => mobileGameIds.has(game.id));
    const directGames = games.filter(game => !mobileGameIds.has(game.id));
    const topLevelItems = [];
    if (mobileGames.length > 0) {
      topLevelItems.push({
        key: 'mobile-games',
        title: 'Mobile',
        type: 'group',
        games: mobileGames
      });
    }
    directGames.forEach(game => {
      topLevelItems.push({
        key: game.id,
        title: game.title,
        type: 'link',
        url: game.url
      });
    });
    return /*#__PURE__*/React.createElement("li", {
      ref: this.rootRef,
      id: "games-li",
      className: "game-list",
      key: "games"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "game-list-toggle"
    }, " ", /*#__PURE__*/React.createElement("i", {
      class: "fas fa-gamepad"
    }), "    Games   ", /*#__PURE__*/React.createElement("i", {
      id: "games-dropdown",
      class: "fas " + (this.state.listExpanded ? "fa-chevron-up" : "fa-chevron-down")
    })), /*#__PURE__*/React.createElement("ul", {
      id: "game-list",
      className: "links align-right " + (this.state.listExpanded ? "show" : "hide")
    }, topLevelItems.map((item, index) => item.type == 'group' ? /*#__PURE__*/React.createElement("li", {
      className: "game-list-item game-list-group " + (this.state.listExpanded ? "show-" + index : "hide"),
      key: item.key,
      title: item.title
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "game-list-group-toggle"
    }, item.title, " ", /*#__PURE__*/React.createElement("i", {
      className: "fas " + (this.state.mobileListExpanded ? "fa-chevron-up" : "fa-chevron-down")
    })), /*#__PURE__*/React.createElement("ul", {
      className: "game-sub-list " + (this.state.mobileListExpanded ? "show" : "hide")
    }, item.games.map(game => /*#__PURE__*/React.createElement("li", {
      key: game.id,
      title: game.title
    }, /*#__PURE__*/React.createElement("a", {
      href: game.url
    }, game.title))))) : /*#__PURE__*/React.createElement("li", {
      className: "game-list-item " + (this.state.listExpanded ? "show-" + index : "hide"),
      key: item.key,
      title: item.title
    }, /*#__PURE__*/React.createElement("a", {
      href: item.url
    }, item.title)))));
  }
}
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement("header", {
      id: "header",
      className: this.props.fixed == "true" ? "" : "alt"
    }, /*#__PURE__*/React.createElement("div", {
      className: "logo"
    }, /*#__PURE__*/React.createElement("a", {
      href: "/"
    }, "Downbeat ", /*#__PURE__*/React.createElement("span", null, "| Interactive LLC"))), /*#__PURE__*/React.createElement("a", {
      id: "menu-button",
      href: "#menu"
    }, "Menu")));
  }
}
class Socials extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement("ul", {
      className: "icons"
    }, /*#__PURE__*/React.createElement("li", {
      key: "item0"
    }, /*#__PURE__*/React.createElement("a", {
      target: "_blank ",
      href: "https://twitter.com/DownbeatGames ",
      className: "icon fa-twitter "
    }, /*#__PURE__*/React.createElement("span", {
      className: "label "
    }, "Twitter"))), /*#__PURE__*/React.createElement("li", {
      key: "item1"
    }, /*#__PURE__*/React.createElement("a", {
      target: "_blank ",
      href: "https://www.facebook.com/downbeat.interactive",
      className: "icon fa-facebook "
    }, /*#__PURE__*/React.createElement("span", {
      className: "label "
    }, "Facebook"))), /*#__PURE__*/React.createElement("li", {
      key: "item2"
    }, /*#__PURE__*/React.createElement("a", {
      target: "_blank ",
      href: "https://www.instagram.com/downbeat.interactive/ ",
      className: "icon fa-instagram "
    }, /*#__PURE__*/React.createElement("span", {
      className: "label "
    }, "Instagram"))), /*#__PURE__*/React.createElement("li", {
      key: "item3"
    }, /*#__PURE__*/React.createElement("a", {
      target: "_blank ",
      href: "https://www.youtube.com/channel/UCWCmhKBiBgqx-RswULM0uoQ ",
      className: "icon fa-youtube "
    }, /*#__PURE__*/React.createElement("span", {
      className: "label "
    }, "YouTube"))), /*#__PURE__*/React.createElement("li", {
      key: "item4"
    }, /*#__PURE__*/React.createElement("a", {
      target: "_blank ",
      href: "https://downbeat-interactive.itch.io/",
      className: "icon fa-itch-io "
    }, /*#__PURE__*/React.createElement("span", {
      className: "label "
    }, "Itch"))), /*#__PURE__*/React.createElement("li", {
      key: "item5"
    }, /*#__PURE__*/React.createElement("a", {
      target: "_blank ",
      href: "https://discord.gg/9BH7a6QEh5",
      className: "icon fa-discord "
    }, /*#__PURE__*/React.createElement("span", {
      className: "label "
    }, "Discord"))), /*#__PURE__*/React.createElement("li", {
      key: "item6"
    }, /*#__PURE__*/React.createElement("a", {
      target: "_blank ",
      href: "https://us7.list-manage.com/contact-form?u=38cc654b1acbc51ccf30871b4&form_id=e7f0d3184720285b9c1a3012f721277c",
      className: "icon fa-envelope "
    }, /*#__PURE__*/React.createElement("span", {
      className: "label "
    }, "Email")))));
  }
}
class PrivacyLink extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    if (this.props.show == 'true' && typeof this.props.url !== 'undefined' && this.props.url.length > 0) {
      return /*#__PURE__*/React.createElement(ErrorBoundary, {
        showBack: false
      }, /*#__PURE__*/React.createElement("a", {
        href: this.props.url + "/privacy-policy/"
      }, /*#__PURE__*/React.createElement("p", null, "Privacy Policy")));
    } else return null;
  }
}
class GamePageLink extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    if (typeof this.props.url !== 'undefined' && this.props.url.length > 0) {
      return /*#__PURE__*/React.createElement(ErrorBoundary, {
        showBack: false
      }, /*#__PURE__*/React.createElement("a", {
        href: this.props.url
      }, /*#__PURE__*/React.createElement("p", null, "More info ", /*#__PURE__*/React.createElement("i", {
        className: "fas fa-arrow-right"
      }))));
    } else return /*#__PURE__*/React.createElement("div", null);
  }
}
class Footer extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement("footer", {
      id: "footer",
      className: "downbeat-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "container align-center"
    }, /*#__PURE__*/React.createElement(Socials, null)), /*#__PURE__*/React.createElement("div", {
      className: "copyright downbeat-copyright"
    }, /*#__PURE__*/React.createElement("div", {
      className: "content copyright align-center"
    }, "Downbeat Interactive LLC", /*#__PURE__*/React.createElement("br", null), " Google Play and the Google Play logo are trademarks of Google LLC.", /*#__PURE__*/React.createElement("br", null)))));
  }
}
class Content extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement("section", {
      className: "wrapper style2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inner"
    }, /*#__PURE__*/React.createElement("div", {
      id: this.props.id,
      "data-aos": "fade-right",
      "data-aos-delay": "100",
      className: "box align-center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "content"
    }, /*#__PURE__*/React.createElement("div", {
      className: "align-center feature-content",
      "data-aos": "fade-up"
    }, /*#__PURE__*/React.createElement("div", {
      className: "align-center feature-content",
      dangerouslySetInnerHTML: {
        __html: this.props.html,
        sanitize: true
      }
    }), /*#__PURE__*/React.createElement("br", null))))))));
  }
}
export { NavigationMenu, Header, Footer, PrivacyLink, GamePageLink, Content, Socials };