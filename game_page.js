'use strict';

import ErrorBoundary from './error_boundary.js';
import { GameFeatureFull, GameFeatureScreenshots } from './game_features.js';
import data from './game_data.js';
import { comingSoonData } from './game_data.js';
import { Header, Footer, NavigationMenu, Content } from './common_components.js';
let domContainer = document.querySelector('#app_container');
function getData(id) {
  if (id == comingSoonData.id) {
    return comingSoonData;
  }
  for (let i = 0; i < data.length; i++) {
    const game = data[i];
    if (game.id == id) {
      return data[i];
    }
  }
  return data[0];
}
class GamePage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.id = domContainer.getAttribute("game");
    this.props.data = getData(this.id);
    this.props.html = domContainer.getAttribute("html-data");
  }
  render() {
    var game = this.props.data;
    if (game.title.length > 0) {
      document.title = game.title + " | Downbeat Games";
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
        fixed: "true"
      }), /*#__PURE__*/React.createElement(NavigationMenu, {
        data: data
      }), /*#__PURE__*/React.createElement("section", {
        className: "wrapper style3 align-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "game-page-feature-container"
      }, /*#__PURE__*/React.createElement(GameFeatureFull, {
        data: game,
        showPlayStoreButton: "true",
        showPrivacyURL: "true"
      })), /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(GameFeatureScreenshots, {
        data: game
      }))), /*#__PURE__*/React.createElement(Footer, null));
    } else return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
      fixed: "true"
    }), /*#__PURE__*/React.createElement(NavigationMenu, {
      data: data
    }), /*#__PURE__*/React.createElement(Content, {
      html: this.props.html
    }), /*#__PURE__*/React.createElement(Footer, null));
  }
}
AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded',
  // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 400,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: false,
  // whether animation should happen only once - while scrolling down
  mirror: true,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
});
ReactDOM.render(/*#__PURE__*/React.createElement(GamePage, null), domContainer);