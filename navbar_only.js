'use strict';

import { NavigationMenu, Header } from "./common_components.js";
let domContainer = document.querySelector('#app_container');
ReactDOM.render(/*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(NavigationMenu, {
  dandy: "true"
})), domContainer);