/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Daemon\": function() { return /* binding */ Daemon; },\n/* harmony export */   \"Magician\": function() { return /* binding */ Magician; }\n/* harmony export */ });\nclass Main {\n  constructor(type, attack, defence) {\n    this.type = type;\n    this.attack = attack;\n    this.defence = defence;\n  }\n  get stoneds() {\n    return `У ${this.type} => атака: ${this.attack} и защита ${this.defence} балов`;\n  }\n  set stoneds(value) {\n    /*\n    * TODO: \"value\" - Дистанция.\n    \t* \"atack\" - Сила урона.\n    \t* \"stoned\" - Сила \"дурман\".\n    \t*/\n    const result = Math.round(this.defence - this.defence * (value * 10 / 100));\n    result <= 0 ? this.attack = 0 : this.attack = result;\n    this.stoned = this.attack - Math.log2(value) * 5;\n  }\n}\nclass Magician extends Main {\n  constructor(name) {\n    let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"Magician\";\n    let attack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n    let defence = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 40;\n    super(name, type, attack, defence);\n  }\n}\nclass Daemon extends Main {\n  constructor(name) {\n    let type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"Daemon\";\n    let attack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;\n    let defence = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 40;\n    super(name, type, attack, defence);\n  }\n}\n// const nemo = new Magician(\"Magician\");\n// nemo.stoneds = 20\n// console.log(nemo.stoneds)\n\n//# sourceURL=webpack://my-webpack-project/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;