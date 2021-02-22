'use strict';

import { NavigationMenu, Header } from "./common_components.js";

var domContainer = document.querySelector('#app_container');
ReactDOM.render(React.createElement(
   'div',
   null,
   React.createElement(Header, null)
), domContainer);