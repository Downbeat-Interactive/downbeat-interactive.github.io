'use strict';

import { NavigationMenu, Header } from "./common_components.js";

let domContainer = document.querySelector('#app_container');
ReactDOM.render(<div><Header/><NavigationMenu dandy="true"></NavigationMenu>
   </div>, domContainer);