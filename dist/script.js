/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
// mobile change images
window.onload = function () {
  var headerBgImage = document.querySelector('.header-bg__image');
  var companySmallImage = document.querySelector('.company__image-small');
  var companyBigImage = document.querySelector('.company__image-big');
  var glassImage = document.querySelector('.glass__image');
  var advantagesImage = document.querySelector('.advantages__image'); //media

  var media1060Px = window.matchMedia('(max-width: 1060px)');
  var media800Px = window.matchMedia('(max-width: 800px)');

  function changeImages(selector, src) {
    selector.setAttribute('src', src);
  }

  if (media1060Px.matches) {
    changeImages(headerBgImage, 'src/assets/images/mobile/header/header-bg.png');
  }

  if (media800Px.matches) {
    changeImages(companySmallImage, 'src/assets/images/mobile/about-company/company-mobile-1.png');
    changeImages(companyBigImage, 'src/assets/images/mobile/about-company/company-mobile-2.png');
    changeImages(glassImage, 'src/assets/images/mobile/our-glass/glass-image.png');
    changeImages(advantagesImage, 'src/assets/images/mobile/advantages/advantages.png');
  }
};
})();

/******/ })()
;
//# sourceMappingURL=script.js.map