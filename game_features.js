'use strict';

import ErrorBoundary from './error_boundary.js';
import { PrivacyLink, GamePageLink } from './common_components.js';
import { GooglePlayScraper } from './utils.js';
class FeatureStoreButton extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    if (this.props.show == "true" && typeof this.props.bundle !== 'undefined' && this.props.bundle.length > 0) return /*#__PURE__*/React.createElement("a", {
      target: "_blank",
      href: "https://play.google.com/store/apps/details?id=" + this.props.bundle
    }, /*#__PURE__*/React.createElement("img", {
      className: "image-button",
      src: "/images/google-play-download.png",
      alt: "See on Google Play"
    }));else return /*#__PURE__*/React.createElement("div", null);
  }
}
class FeatureVideo extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    if (typeof this.props.url !== 'undefined' && this.props.url.length > 0) {
      return /*#__PURE__*/React.createElement(ErrorBoundary, {
        showBack: false
      }, /*#__PURE__*/React.createElement("div", {
        id: this.props.id + "-video",
        className: "iframe-container align-center feature-video"
      }, /*#__PURE__*/React.createElement("iframe", {
        className: "feature-iframe",
        width: this.props.width,
        height: this.props.height,
        src: this.props.url,
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true
      })));
    } else return /*#__PURE__*/React.createElement("div", null);
  }
}
class BoxFull extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return /*#__PURE__*/React.createElement("section", {
      className: "wrapper style2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "inner"
    }, /*#__PURE__*/React.createElement("div", {
      id: this.props.id,
      "data-aos": "fade-right",
      "data-aos-delay": "100",
      className: "box align-center"
    }, this.props.inner)));
  }
}
class GameFeatureFull extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.data = props.data;
  }
  render() {
    if (this.data.id != 'default' && this.data.id.length > 0) {
      return /*#__PURE__*/React.createElement(ErrorBoundary, null, /*#__PURE__*/React.createElement(BoxFull, {
        id: this.data.id,
        inner: /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FeatureVideo, {
          url: this.data.videoUrl,
          id: this.data.id
        }), /*#__PURE__*/React.createElement("div", {
          className: "content"
        }, /*#__PURE__*/React.createElement("header", {
          className: "align-center",
          "data-aos": "slide-left",
          "data-aos-duration": "400"
        }, /*#__PURE__*/React.createElement("p", null, this.data.subtitle), /*#__PURE__*/React.createElement("a", {
          className: "no-decoration",
          href: this.data.url
        }, /*#__PURE__*/React.createElement("h2", {
          className: "feature-title"
        }, this.data.title))), /*#__PURE__*/React.createElement("div", {
          className: "align-center feature-content",
          "data-aos": "fade-up"
        }, /*#__PURE__*/React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: this.data.description,
            sanitize: true
          }
        }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(GamePageLink, {
          url: this.data.url
        })), /*#__PURE__*/React.createElement("footer", {
          className: "align-center",
          "data-aos": "zoom-in"
        }, /*#__PURE__*/React.createElement(FeatureStoreButton, {
          show: this.props.showPlayStoreButton,
          bundle: this.data.bundle
        })), /*#__PURE__*/React.createElement(PrivacyLink, {
          url: this.data.url,
          show: this.props.showPrivacyURL
        }), /*#__PURE__*/React.createElement(ReleaseDate, {
          date: this.data.releaseDate
        })))
      }));
    } else {
      return null;
    }
  }
}
class ReleaseDate extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.date = this.props.date;
  }
  render() {
    if (this.date !== undefined && this.date.length > 0 && this.date != "") {
      return /*#__PURE__*/React.createElement("div", {
        "data-aos": "flip-up",
        "data-aos-delay": "100",
        className: "align-center release-date"
      }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("i", null, "Released ", this.date)));
    } else return null;
  }
}
class GameFeatureScreenshots extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.data = props.data;
  }
  render() {
    if (this.data.nScreens > 0) {
      var output = [];
      output.push();
      for (var i = 0; i < this.data.nScreens; i++) {
        output.push(/*#__PURE__*/React.createElement("a", null, /*#__PURE__*/React.createElement("img", {
          className: "game-screenshot",
          src: this.props.data.url + "/screens/" + i.toString() + ".png"
        })));
      }
      return /*#__PURE__*/React.createElement(BoxFull, {
        id: this.props.data.id,
        inner: /*#__PURE__*/React.createElement("div", {
          className: "content"
        }, /*#__PURE__*/React.createElement("header", {
          className: "align-center",
          "data-aos": "slide-left",
          "data-aos-mirror": "false",
          "data-aos-duration": "400"
        }, /*#__PURE__*/React.createElement("p", null, this.props.data.title), /*#__PURE__*/React.createElement("a", {
          className: "no-decoration"
        }, /*#__PURE__*/React.createElement("h2", {
          className: "feature-title"
        }, "Screenshots"))), /*#__PURE__*/React.createElement("div", {
          className: "align-center feature-content"
        }, /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement("div", {
          className: "screenshots-container",
          "data-aos": "flip-left",
          "data-aos-duration": "500"
        }, output), /*#__PURE__*/React.createElement("div", null))
      });
    } else return null;
  }
}
export default GameFeatureFull;
export { GameFeatureFull, GameFeatureScreenshots };