'use strict';

import ErrorBoundary from './error_boundary.js';
import { GameFeatureFull, GameFeatureScreenshots } from './game_features.js';
import data from './game_data.js';
import { Header, Footer, NavigationMenu, Content } from './common_components.js';
let domContainer = document.querySelector('#app_container');
function gameData(id) {
  for (let i = 0; i < data.length; i++) {
    const game = data[i];
    if (game.id == id) {
      return data[i];
    }
  }
  return data[0];
}
class TestPage extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.id = domContainer.getAttribute("game");
    this.gameData = gameData(this.id);
  }
  render() {
    var game = this.gameData;
    if (game.title.length > 0) {
      document.title = game.title + " | Downbeat Games";
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(NavigationMenu, null), /*#__PURE__*/React.createElement("section", {
        className: "wrapper style3 align-center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "game-page-feature-container"
      }, /*#__PURE__*/React.createElement(GameFeatureFull, {
        key: game.id,
        id: game.id,
        title: game.title,
        url: game.url,
        description: game.description,
        videoUrl: game.videoUrl,
        bundle: game.bundle,
        subtitle: game.subtitle,
        videoDimensions: game.videoDimensions
      })), /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(GameFeatureScreenshots, {
        data: game
      }))), /*#__PURE__*/React.createElement(Footer, null)));
    } else return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(NavigationMenu, null), /*#__PURE__*/React.createElement(GameFeatureScreenshots, {
      data: game
    }), /*#__PURE__*/React.createElement(Footer, null));
  }
}
ReactDOM.render(/*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(TestPage, null)), domContainer);