/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/customDeclare.ts":
/*!******************************!*\
  !*** ./src/customDeclare.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.useDeclare = void 0;\r\nfunction fun(n, m) {\r\n    return n + m;\r\n}\r\nfun(1, 1); // 调用的时候有类型提示\r\n// 调用的时候有类型调用\r\nconst box = document.querySelector('.box');\r\nfunction useDeclare() {\r\n    // 引入自定义的 js 文件，这里直接访问 js 中定义的变量\r\n    console.log(name);\r\n}\r\nexports.useDeclare = useDeclare;\r\n\n\n//# sourceURL=webpack://07-engineering/./src/customDeclare.ts?");

/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.sub = void 0;\r\nfunction sub(n, m) {\r\n    return n - m;\r\n}\r\nexports.sub = sub;\r\n\n\n//# sourceURL=webpack://07-engineering/./src/global.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst global_1 = __webpack_require__(/*! ./global */ \"./src/global.ts\");\r\nconst namespace_1 = __webpack_require__(/*! ./namespace */ \"./src/namespace.ts\");\r\nconst customDeclare_1 = __webpack_require__(/*! ./customDeclare */ \"./src/customDeclare.ts\");\r\nfunction add(n, m) {\r\n    return n + m;\r\n}\r\nconsole.log(add(1, 2));\r\nconsole.log((0, global_1.sub)(2, 1));\r\n// 命名空间的调用\r\nconsole.log(namespace_1.One.name);\r\nconsole.log(namespace_1.One.add(1, 1));\r\nconsole.log('-------------------------------------');\r\nconsole.log(namespace_1.One.OneChild.name);\r\nconsole.log(namespace_1.One.OneChild.add(1));\r\nconsole.log('-------------------------------------');\r\nconsole.log(namespace_1.Two.name);\r\nconsole.log(namespace_1.Two.add('1', '1'));\r\nconsole.log('-------------------------------------');\r\n// 自定义声明调用\r\n(0, customDeclare_1.useDeclare)();\r\n\n\n//# sourceURL=webpack://07-engineering/./src/index.ts?");

/***/ }),

/***/ "./src/namespace.ts":
/*!**************************!*\
  !*** ./src/namespace.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Two = exports.One = void 0;\r\n// 命名空间可以导出\r\nvar One;\r\n(function (One) {\r\n    // 可以定义子命名空间\r\n    let OneChild;\r\n    (function (OneChild) {\r\n        function add(n) {\r\n            return ++n;\r\n        }\r\n        OneChild.add = add;\r\n        OneChild.name = 'this is namespace OneChild ----------';\r\n    })(OneChild = One.OneChild || (One.OneChild = {}));\r\n    // 命名空间的方法可以导出\r\n    function add(n, m) {\r\n        return n + m;\r\n    }\r\n    One.add = add;\r\n    // 命名空间的变量也可以导出\r\n    One.name = 'this is namespace One ---------------';\r\n})(One = exports.One || (exports.One = {}));\r\nvar Two;\r\n(function (Two) {\r\n    function add(n, m) {\r\n        return n + m;\r\n    }\r\n    Two.add = add;\r\n    Two.name = 'this is namespace Two ---------------';\r\n})(Two = exports.Two || (exports.Two = {}));\r\n\n\n//# sourceURL=webpack://07-engineering/./src/namespace.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;