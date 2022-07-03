import * as functions from "./modules/isWebP.js";

import {navOpener} from "./modules/navOpener.js";
//import {paralaxCard} from "./modules/paralaxCard.js";

functions.isWebP();

window.addEventListener('DOMContentLoaded', () => {

    navOpener('.header__nav-opener', '.header', 'header_active');
    //paralaxCard('.paralax-card__element')
})