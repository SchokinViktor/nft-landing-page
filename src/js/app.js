import * as functions from "./modules/isWebP.js";

import {navOpener} from "./modules/navOpener.js"

functions.isWebP();

window.addEventListener('DOMContentLoaded', () => {

    navOpener('.header__nav-opener', '.header', 'header_active');
    
})