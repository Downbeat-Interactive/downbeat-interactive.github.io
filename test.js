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

function gameData(id) {
    for (var i = 0; i < data.length; i++) {
        var game = data[i];
        if (game.id == id) {
            return data[i];
        }
    }
    return data[0];
}

var TestPage = function (_React$Component) {
    _inherits(TestPage, _React$Component);

    function TestPage(props) {
        _classCallCheck(this, TestPage);

        var _this = _possibleConstructorReturn(this, (TestPage.__proto__ || Object.getPrototypeOf(TestPage)).call(this, props));

        _this.props = props;
        _this.id = domContainer.getAttribute("game");
        _this.gameData = gameData(_this.id);
        return _this;
    }

    _createClass(TestPage, [{
        key: 'render',
        value: function render() {
            var game = this.gameData;
            if (game.title.length > 0) {
                document.title = game.title + " | Downbeat Games";

                return React.createElement(
                    'div',
                    null,
                    React.createElement(
                        ErrorBoundary,
                        null,
                        React.createElement(Header, null),
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
                                    videoDimensions: game.videoDimensions
                                })
                            ),
                            React.createElement(
                                ErrorBoundary,
                                null,
                                React.createElement(GameFeatureScreenshots, { bundle: game.bundle })
                            )
                        ),
                        React.createElement(Footer, null)
                    )
                );
            } else return React.createElement(
                'div',
                null,
                React.createElement(Header, null),
                React.createElement(NavigationMenu, null),
                React.createElement(GameFeatureScreenshots, null),
                React.createElement(Footer, null)
            );
        }
    }]);

    return TestPage;
}(React.Component);

ReactDOM.render(React.createElement(
    ErrorBoundary,
    null,
    React.createElement(TestPage, null)
), domContainer);