'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import ErrorBoundary from './error_boundary.js';
import { GameFeatureFull, GameFeatureScreenshots } from './game_features.js';
import data from './game_data.js';
import { Header, Footer, NavigationMenu, Content } from './common_components.js';

var domContainer = document.querySelector('#app_container');

function getData(id) {
    for (var i = 0; i < data.length; i++) {
        var game = data[i];
        if (game.id == id) {
            return data[i];
        }
    }
    return data[0];
}

var GamePage = function (_React$Component) {
    _inherits(GamePage, _React$Component);

    function GamePage(props) {
        _classCallCheck(this, GamePage);

        var _this = _possibleConstructorReturn(this, (GamePage.__proto__ || Object.getPrototypeOf(GamePage)).call(this, props));

        _this.props = props;
        _this.id = domContainer.getAttribute("game");
        _this.props.data = getData(_this.id);
        _this.props.html = domContainer.getAttribute("html-data");
        return _this;
    }

    _createClass(GamePage, [{
        key: 'render',
        value: function render() {
            var game = this.props.data;
            if (game.title.length > 0) {
                document.title = game.title + " | Downbeat Games";

                return React.createElement(
                    'div',
                    null,
                    React.createElement(Header, { fixed: 'true' }),
                    React.createElement(NavigationMenu, null),
                    React.createElement(
                        'section',
                        { className: 'wrapper style3 align-center' },
                        React.createElement(
                            'div',
                            { className: 'game-page-feature-container' },
                            React.createElement(GameFeatureFull, {
                                key: game.id,
                                id: game.id,
                                title: game.title,
                                url: game.url,
                                description: game.description,
                                videoUrl: game.videoUrl,
                                bundle: game.bundle,
                                subtitle: game.subtitle,
                                videoDimensions: game.videoDimensions,
                                showPrivacyURL: 'true'
                            })
                        ),
                        React.createElement(
                            ErrorBoundary,
                            null,
                            React.createElement(GameFeatureScreenshots, { data: game })
                        )
                    ),
                    React.createElement(Footer, null)
                );
            } else return React.createElement(
                'div',
                null,
                React.createElement(Header, { fixed: 'true' }),
                React.createElement(NavigationMenu, null),
                React.createElement(Content, { html: this.props.html }),
                React.createElement(Footer, null)
            );
        }
    }]);

    return GamePage;
}(React.Component);

ReactDOM.render(React.createElement(GamePage, null), domContainer);