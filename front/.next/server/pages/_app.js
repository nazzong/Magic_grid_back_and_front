module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/GlobalStyles.js":
/*!************************************!*\
  !*** ./components/GlobalStyles.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"])([\"*{box-sizing:border-box;}\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (GlobalStyles);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dsb2JhbFN0eWxlcy5qcz8wMGNjIl0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlcyIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBLE1BQU1BLFlBQVksR0FBR0MsMkVBQUgsK0JBQWxCO0FBTWVELDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9HbG9iYWxTdHlsZXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSwgY3NzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICAgICoge1xuICAgICAgICBib3gtc2l6aW5nIDogYm9yZGVyLWJveDtcbiAgICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBHbG9iYWxTdHlsZXM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/GlobalStyles.js\n");

/***/ }),

/***/ "./components/Theme.js":
/*!*****************************!*\
  !*** ./components/Theme.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  black: \"#222\",\n  white: \"#fff\"\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RoZW1lLmpzP2Y4YzgiXSwibmFtZXMiOlsiYmxhY2siLCJ3aGl0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBZTtBQUNiQSxPQUFLLEVBQUUsTUFETTtBQUViQyxPQUFLLEVBQUU7QUFGTSxDQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9UaGVtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgYmxhY2s6IFwiIzIyMlwiLFxuICB3aGl0ZTogXCIjZmZmXCIsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Theme.js\n");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst backURL = \"http://localhost:4000\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (backURL);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25maWcvY29uZmlnLmpzPzM5YzYiXSwibmFtZXMiOlsiYmFja1VSTCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxPQUFPLEdBQUcsdUJBQWhCO0FBRWVBLHNFQUFmIiwiZmlsZSI6Ii4vY29uZmlnL2NvbmZpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJhY2tVUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMFwiO1xuXG5leHBvcnQgZGVmYXVsdCBiYWNrVVJMO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config/config.js\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Theme */ \"./components/Theme.js\");\n/* harmony import */ var _components_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GlobalStyles */ \"./components/GlobalStyles.js\");\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/njs/Documents/4leaf-education/magic_grid_app/front/pages/_app.js\";\n\n\n\n\n\n\n\n\n\n\nconst Magic = ({\n  Component\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(styled_components__WEBPACK_IMPORTED_MODULE_3__[\"ThemeProvider\"], {\n      theme: _components_Theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_components_GlobalStyles__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"title\", {\n          children: \"MAGIC GRID\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 15,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          name: \"subject\",\n          content: \"[[**4LEAF GEAR SAMPLE**]]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          name: \"title\",\n          content: \"[[**4LEAF GEAR SAMPLE**]]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          name: \"author\",\n          content: \"[[**4LEAF GEAR SAMPLE**]]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          name: \"keywords\",\n          content: \"[[**4LEAF GEAR SAMPLE**]]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          name: \"description\",\n          content: \"[[**4LEAF GEAR SAMPLE**]]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:type\",\n          content: \"website\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:title\",\n          content: \"[[**4LEAF GEAR SAMPLE**]]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:site_name\",\n          content: \"[[**4LEAF GEAR SAMPLE**]]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:url\",\n          content: \"https://www.sample.com/\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:description\",\n          content: \"[[**4LEAF GEAR SAMPLE**]]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:keywords\",\n          content: \"[[**4LEAF GEAR SAMPLE**]]\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:image\",\n          content: \"/og_img.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:image:width\",\n          content: \"800\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"meta\", {\n          property: \"og:image:height\",\n          content: \"400\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"link\", {\n          rel: \"shortcut icon\",\n          href: \"/favicon.ico\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"link\", {\n          rel: \"canonical\",\n          href: \"https://www.sample.com\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(Component, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_6__[\"default\"].withRedux(Magic));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTWFnaWMiLCJDb21wb25lbnQiLCJUaGVtZSIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQW1CO0FBQy9CLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsK0RBQUQ7QUFBZSxXQUFLLEVBQUVDLHlEQUF0QjtBQUFBLDhCQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyxnREFBRDtBQUFBLGdDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBR0U7QUFBTSxjQUFJLEVBQUMsU0FBWDtBQUFxQixpQkFBTyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEYsZUFJRTtBQUFNLGNBQUksRUFBQyxPQUFYO0FBQW1CLGlCQUFPLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQUtFO0FBQU0sY0FBSSxFQUFDLFFBQVg7QUFBb0IsaUJBQU8sRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxGLGVBTUU7QUFBTSxjQUFJLEVBQUMsVUFBWDtBQUFzQixpQkFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsZUFPRTtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQXlCLGlCQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVNFO0FBQU0sa0JBQVEsRUFBQyxTQUFmO0FBQXlCLGlCQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURixlQVVFO0FBQU0sa0JBQVEsRUFBQyxVQUFmO0FBQTBCLGlCQUFPLEVBQUM7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRixlQVdFO0FBQU0sa0JBQVEsRUFBQyxjQUFmO0FBQThCLGlCQUFPLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYRixlQVlFO0FBQU0sa0JBQVEsRUFBQyxRQUFmO0FBQXdCLGlCQUFPLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRixlQWFFO0FBQU0sa0JBQVEsRUFBQyxnQkFBZjtBQUFnQyxpQkFBTyxFQUFDO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkYsZUFjRTtBQUFNLGtCQUFRLEVBQUMsYUFBZjtBQUE2QixpQkFBTyxFQUFDO0FBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZEYsZUFlRTtBQUFNLGtCQUFRLEVBQUMsVUFBZjtBQUEwQixpQkFBTyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBZkYsZUFnQkU7QUFBTSxrQkFBUSxFQUFDLGdCQUFmO0FBQWdDLGlCQUFPLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFoQkYsZUFpQkU7QUFBTSxrQkFBUSxFQUFDLGlCQUFmO0FBQWlDLGlCQUFPLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQkYsZUFrQkU7QUFBTSxhQUFHLEVBQUMsZUFBVjtBQUEwQixjQUFJLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsQkYsZUFtQkU7QUFBTSxhQUFHLEVBQUMsV0FBVjtBQUFzQixjQUFJLEVBQUM7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBdUJFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUE2QkQsQ0E5QkQ7O0FBZ0NlQyw0SEFBTyxDQUFDQyxTQUFSLENBQWtCSixLQUFsQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IFRoZW1lIGZyb20gXCIuLi9jb21wb25lbnRzL1RoZW1lXCI7XG5pbXBvcnQgR2xvYmFsU3R5bGVzIGZyb20gXCIuLi9jb21wb25lbnRzL0dsb2JhbFN0eWxlc1wiO1xuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XG5cbmNvbnN0IE1hZ2ljID0gKHsgQ29tcG9uZW50IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e1RoZW1lfT5cbiAgICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TUFHSUMgR1JJRDwvdGl0bGU+XG5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwic3ViamVjdFwiIGNvbnRlbnQ9XCJbWyoqNExFQUYgR0VBUiBTQU1QTEUqKl1dXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwidGl0bGVcIiBjb250ZW50PVwiW1sqKjRMRUFGIEdFQVIgU0FNUExFKipdXVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJbWyoqNExFQUYgR0VBUiBTQU1QTEUqKl1dXCIgLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwiW1sqKjRMRUFGIEdFQVIgU0FNUExFKipdXVwiIC8+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIltbKio0TEVBRiBHRUFSIFNBTVBMRSoqXV1cIiAvPlxuICAgICAgICAgIHsvKiA8IS0tIE9HIHRhZyAgLS0+ICovfVxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIltbKio0TEVBRiBHRUFSIFNBTVBMRSoqXV1cIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD1cIltbKio0TEVBRiBHRUFSIFNBTVBMRSoqXV1cIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vd3d3LnNhbXBsZS5jb20vXCIgLz5cbiAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIltbKio0TEVBRiBHRUFSIFNBTVBMRSoqXV1cIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6a2V5d29yZHNcIiBjb250ZW50PVwiW1sqKjRMRUFGIEdFQVIgU0FNUExFKipdXVwiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCIvb2dfaW1nLnBuZ1wiIC8+XG4gICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCI4MDBcIiAvPlxuICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjQwMFwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3d3dy5zYW1wbGUuY29tXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8Q29tcG9uZW50IC8+XG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNYWdpYyk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio */ \"./reducers/portfolio.js\");\n\n\n\n\nconst rootReducer = (state, action) => {\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n      console.log(\"HYDRATE\", action);\n      return action.payload;\n\n    default:\n      {\n        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n          portfolio: _portfolio__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n        });\n        return combinedReducer(state, action);\n      }\n      ㅂ;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiY29tYmluZWRSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwicG9ydGZvbGlvIiwi44WCIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsV0FBVyxHQUFHLENBQUNDLEtBQUQsRUFBUUMsTUFBUixLQUFtQjtBQUNyQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLQywwREFBTDtBQUNFQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixNQUF2QjtBQUNBLGFBQU9BLE1BQU0sQ0FBQ0ssT0FBZDs7QUFDRjtBQUNFO0FBQ0UsY0FBTUMsZUFBZSxHQUFHQyw2REFBZSxDQUFDO0FBQ3RDQyx1RUFBU0E7QUFENkIsU0FBRCxDQUF2QztBQUdBLGVBQU9GLGVBQWUsQ0FBQ1AsS0FBRCxFQUFRQyxNQUFSLENBQXRCO0FBQ0Q7QUFDRFMsT0FBQztBQVhMO0FBYUQsQ0FkRDs7QUFnQmVYLDBFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgcG9ydGZvbGlvIGZyb20gXCIuL3BvcnRmb2xpb1wiO1xuXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEhZRFJBVEU6XG4gICAgICBjb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICBkZWZhdWx0OlxuICAgICAge1xuICAgICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgICAgICAgIHBvcnRmb2xpbyxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgICB9XG4gICAgICDjhYI7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/portfolio.js":
/*!*******************************!*\
  !*** ./reducers/portfolio.js ***!
  \*******************************/
/*! exports provided: IMG_LIST_REQUEST, IMG_LIST_SUCCESS, IMG_LIST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMG_LIST_REQUEST\", function() { return IMG_LIST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMG_LIST_SUCCESS\", function() { return IMG_LIST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IMG_LIST_FAILURE\", function() { return IMG_LIST_FAILURE; });\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\nconst initailState = {\n  imgs: [],\n  //\n  st_listLoading: false,\n  st_listDone: false,\n  st_listError: null\n};\n\nconst IMG_LIST_REQUEST = \"IMG_LIST_REQUEST\";\nconst IMG_LIST_SUCCESS = \"IMG_LIST_SUCCESS\";\nconst IMG_LIST_FAILURE = \"IMG_LIST_FAILURE\";\n\nconst reducer = (state = initailState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {\n  switch (action.type) {\n    case IMG_LIST_REQUEST:\n      draft.st_listLoading = true;\n      draft.st_listDone = false;\n      draft.st_listError = null;\n      break;\n\n    case IMG_LIST_SUCCESS:\n      draft.st_listLoading = false;\n      draft.st_listDone = true;\n      draft.st_listError = null;\n      draft.imgs = action.data;\n      break;\n\n    case IMG_LIST_FAILURE:\n      draft.st_listLoading = false;\n      draft.st_listDone = false;\n      draft.st_listError = action.data;\n      break;\n\n    default:\n      break;\n  }\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3J0Zm9saW8uanM/M2M2YSJdLCJuYW1lcyI6WyJpbml0YWlsU3RhdGUiLCJpbWdzIiwic3RfbGlzdExvYWRpbmciLCJzdF9saXN0RG9uZSIsInN0X2xpc3RFcnJvciIsIklNR19MSVNUX1JFUVVFU1QiLCJJTUdfTElTVF9TVUNDRVNTIiwiSU1HX0xJU1RfRkFJTFVSRSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInByb2R1Y2UiLCJkcmFmdCIsInR5cGUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxZQUFZLEdBQUc7QUFDbkJDLE1BQUksRUFBRSxFQURhO0FBRW5CO0FBQ0FDLGdCQUFjLEVBQUUsS0FIRztBQUluQkMsYUFBVyxFQUFFLEtBSk07QUFLbkJDLGNBQVksRUFBRTtBQUxLLENBQXJCO0FBT0E7QUFFTyxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNQyxnQkFBZ0IsR0FBRyxrQkFBekI7O0FBRVAsTUFBTUMsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR1QsWUFBVCxFQUF1QlUsTUFBdkIsS0FDZEMsNENBQU8sQ0FBQ0YsS0FBRCxFQUFTRyxLQUFELElBQVc7QUFDeEIsVUFBUUYsTUFBTSxDQUFDRyxJQUFmO0FBQ0UsU0FBS1IsZ0JBQUw7QUFDRU8sV0FBSyxDQUFDVixjQUFOLEdBQXVCLElBQXZCO0FBQ0FVLFdBQUssQ0FBQ1QsV0FBTixHQUFvQixLQUFwQjtBQUNBUyxXQUFLLENBQUNSLFlBQU4sR0FBcUIsSUFBckI7QUFDQTs7QUFDRixTQUFLRSxnQkFBTDtBQUNFTSxXQUFLLENBQUNWLGNBQU4sR0FBdUIsS0FBdkI7QUFDQVUsV0FBSyxDQUFDVCxXQUFOLEdBQW9CLElBQXBCO0FBQ0FTLFdBQUssQ0FBQ1IsWUFBTixHQUFxQixJQUFyQjtBQUNBUSxXQUFLLENBQUNYLElBQU4sR0FBYVMsTUFBTSxDQUFDSSxJQUFwQjtBQUNBOztBQUNGLFNBQUtQLGdCQUFMO0FBQ0VLLFdBQUssQ0FBQ1YsY0FBTixHQUF1QixLQUF2QjtBQUNBVSxXQUFLLENBQUNULFdBQU4sR0FBb0IsS0FBcEI7QUFDQVMsV0FBSyxDQUFDUixZQUFOLEdBQXFCTSxNQUFNLENBQUNJLElBQTVCO0FBQ0E7O0FBQ0Y7QUFDRTtBQWxCSjtBQW9CRCxDQXJCTSxDQURUOztBQXdCZU4sc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy9wb3J0Zm9saW8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcblxuY29uc3QgaW5pdGFpbFN0YXRlID0ge1xuICBpbWdzOiBbXSxcbiAgLy9cbiAgc3RfbGlzdExvYWRpbmc6IGZhbHNlLFxuICBzdF9saXN0RG9uZTogZmFsc2UsXG4gIHN0X2xpc3RFcnJvcjogbnVsbCxcbn07XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBJTUdfTElTVF9SRVFVRVNUID0gXCJJTUdfTElTVF9SRVFVRVNUXCI7XG5leHBvcnQgY29uc3QgSU1HX0xJU1RfU1VDQ0VTUyA9IFwiSU1HX0xJU1RfU1VDQ0VTU1wiO1xuZXhwb3J0IGNvbnN0IElNR19MSVNUX0ZBSUxVUkUgPSBcIklNR19MSVNUX0ZBSUxVUkVcIjtcblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRhaWxTdGF0ZSwgYWN0aW9uKSA9PlxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIElNR19MSVNUX1JFUVVFU1Q6XG4gICAgICAgIGRyYWZ0LnN0X2xpc3RMb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuc3RfbGlzdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc3RfbGlzdEVycm9yID0gbnVsbDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIElNR19MSVNUX1NVQ0NFU1M6XG4gICAgICAgIGRyYWZ0LnN0X2xpc3RMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGRyYWZ0LnN0X2xpc3REb25lID0gdHJ1ZTtcbiAgICAgICAgZHJhZnQuc3RfbGlzdEVycm9yID0gbnVsbDtcbiAgICAgICAgZHJhZnQuaW1ncyA9IGFjdGlvbi5kYXRhO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgSU1HX0xJU1RfRkFJTFVSRTpcbiAgICAgICAgZHJhZnQuc3RfbGlzdExvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc3RfbGlzdERvbmUgPSBmYWxzZTtcbiAgICAgICAgZHJhZnQuc3RfbGlzdEVycm9yID0gYWN0aW9uLmRhdGE7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./reducers/portfolio.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio */ \"./sagas/portfolio.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n\n //\n\n\n\naxios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.baseURL = _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\naxios__WEBPACK_IMPORTED_MODULE_2___default.a.defaults.withCredentials = true;\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(_portfolio__WEBPACK_IMPORTED_MODULE_1__[\"default\"])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwiYmFja1VSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvcnRmb2xpb1NhZ2EiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFFQUEsNENBQUssQ0FBQ0MsUUFBTixDQUFlQyxPQUFmLEdBQXlCQyxzREFBekI7QUFDQUgsNENBQUssQ0FBQ0MsUUFBTixDQUFlRyxlQUFmLEdBQWlDLElBQWpDO0FBRWUsVUFBVUMsUUFBVixHQUFxQjtBQUNsQyxRQUFNQyw4REFBRyxDQUFDLENBQUNDLCtEQUFJLENBQUNDLGtEQUFELENBQUwsQ0FBRCxDQUFUO0FBQ0QiLCJmaWxlIjoiLi9zYWdhcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCBwb3J0Zm9saW9TYWdhIGZyb20gXCIuL3BvcnRmb2xpb1wiO1xuLy9cbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBiYWNrVVJMIGZyb20gXCIuLi9jb25maWcvY29uZmlnXCI7XG5cbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBiYWNrVVJMO1xuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xuICB5aWVsZCBhbGwoW2ZvcmsocG9ydGZvbGlvU2FnYSldKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./sagas/portfolio.js":
/*!****************************!*\
  !*** ./sagas/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return portfolioSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reducers_portfolio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/portfolio */ \"./reducers/portfolio.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // SAGA AREA ********************************************************************************************************\n// ******************************************************************************************************************\n\nfunction imgListAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/api/img/list`);\n}\n\nfunction* imgList(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(imgListAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_portfolio__WEBPACK_IMPORTED_MODULE_1__[\"IMG_LIST_SUCCESS\"],\n      data: result.data\n    });\n  } catch (err) {\n    console.error(err);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: _reducers_portfolio__WEBPACK_IMPORTED_MODULE_1__[\"IMG_LIST_FAILURE\"],\n      error: err.response.data\n    });\n  }\n} // ******************************************************************************************************************\n// ******************************************************************************************************************\n// ******************************************************************************************************************\n/////////\n\n\nfunction* watchImgList() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"takeLatest\"])(_reducers_portfolio__WEBPACK_IMPORTED_MODULE_1__[\"IMG_LIST_REQUEST\"], imgList);\n}\n\nfunction* portfolioSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchImgList) //,\n  ]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9wb3J0Zm9saW8uanM/YTZmMSJdLCJuYW1lcyI6WyJpbWdMaXN0QVBJIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwiaW1nTGlzdCIsImFjdGlvbiIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJ0eXBlIiwiSU1HX0xJU1RfU1VDQ0VTUyIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIklNR19MSVNUX0ZBSUxVUkUiLCJyZXNwb25zZSIsIndhdGNoSW1nTGlzdCIsInRha2VMYXRlc3QiLCJJTUdfTElTVF9SRVFVRVNUIiwicG9ydGZvbGlvU2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQVFBO0FBQ0E7O0FBQ0EsU0FBU0EsVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDeEIsU0FBT0MsNENBQUssQ0FBQ0MsR0FBTixDQUFXLGVBQVgsQ0FBUDtBQUNEOztBQUVELFVBQVVDLE9BQVYsQ0FBa0JDLE1BQWxCLEVBQTBCO0FBQ3hCLE1BQUk7QUFDRixVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ1AsVUFBRCxFQUFhSyxNQUFNLENBQUNKLElBQXBCLENBQXpCO0FBRUEsVUFBTU8sOERBQUcsQ0FBQztBQUNSQyxVQUFJLEVBQUVDLG9FQURFO0FBRVJULFVBQUksRUFBRUssTUFBTSxDQUFDTDtBQUZMLEtBQUQsQ0FBVDtBQUlELEdBUEQsQ0FPRSxPQUFPVSxHQUFQLEVBQVk7QUFDWkMsV0FBTyxDQUFDQyxLQUFSLENBQWNGLEdBQWQ7QUFDQSxVQUFNSCw4REFBRyxDQUFDO0FBQ1JDLFVBQUksRUFBRUssb0VBREU7QUFFUkQsV0FBSyxFQUFFRixHQUFHLENBQUNJLFFBQUosQ0FBYWQ7QUFGWixLQUFELENBQVQ7QUFJRDtBQUNGLEMsQ0FFRDtBQUNBO0FBQ0E7QUFFQTs7O0FBQ0EsVUFBVWUsWUFBVixHQUF5QjtBQUN2QixRQUFNQyxxRUFBVSxDQUFDQyxvRUFBRCxFQUFtQmQsT0FBbkIsQ0FBaEI7QUFDRDs7QUFFYyxVQUFVZSxhQUFWLEdBQTBCO0FBQ3ZDLFFBQU1DLDhEQUFHLENBQUMsQ0FDUkMsK0RBQUksQ0FBQ0wsWUFBRCxDQURJLENBRVI7QUFGUSxHQUFELENBQVQ7QUFJRCIsImZpbGUiOiIuL3NhZ2FzL3BvcnRmb2xpby5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcbmltcG9ydCB7XG4gIElNR19MSVNUX1JFUVVFU1QsXG4gIElNR19MSVNUX1NVQ0NFU1MsXG4gIElNR19MSVNUX0ZBSUxVUkUsXG4gIC8vXG59IGZyb20gXCIuLi9yZWR1Y2Vycy9wb3J0Zm9saW9cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLy8gU0FHQSBBUkVBICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbmZ1bmN0aW9uIGltZ0xpc3RBUEkoZGF0YSkge1xuICByZXR1cm4gYXhpb3MuZ2V0KGAvYXBpL2ltZy9saXN0YCk7XG59XG5cbmZ1bmN0aW9uKiBpbWdMaXN0KGFjdGlvbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoaW1nTGlzdEFQSSwgYWN0aW9uLmRhdGEpO1xuXG4gICAgeWllbGQgcHV0KHtcbiAgICAgIHR5cGU6IElNR19MSVNUX1NVQ0NFU1MsXG4gICAgICBkYXRhOiByZXN1bHQuZGF0YSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIHlpZWxkIHB1dCh7XG4gICAgICB0eXBlOiBJTUdfTElTVF9GQUlMVVJFLFxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgIH0pO1xuICB9XG59XG5cbi8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblxuLy8vLy8vLy8vXG5mdW5jdGlvbiogd2F0Y2hJbWdMaXN0KCkge1xuICB5aWVsZCB0YWtlTGF0ZXN0KElNR19MSVNUX1JFUVVFU1QsIGltZ0xpc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9ydGZvbGlvU2FnYSgpIHtcbiAgeWllbGQgYWxsKFtcbiAgICBmb3JrKHdhdGNoSW1nTGlzdCksXG4gICAgLy8sXG4gIF0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/portfolio.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nconst configureStore = () => {\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_5___default()();\n  const middlewares = [sagaMiddleware];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer);\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyb290UmVkdWNlciIsInNhZ2FUYXNrIiwicnVuIiwicm9vdFNhZ2EiLCJ3cmFwcGVyIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0FBQzNCLFFBQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDO0FBRUEsUUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsQ0FBcEI7QUFDQSxRQUFNRyxRQUFRLEdBQ1osUUFDSUMsU0FESixHQUVJQyxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQyxHQUFHSixXQUFKLENBQWhCLENBSHpCO0FBS0EsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDQyxpREFBRCxFQUFjTixRQUFkLENBQXpCO0FBRUFJLE9BQUssQ0FBQ0csUUFBTixHQUFpQlYsY0FBYyxDQUFDVyxHQUFmLENBQW1CQyw4Q0FBbkIsQ0FBakI7QUFFQSxTQUFPTCxLQUFQO0FBQ0QsQ0FkRDs7QUFnQkEsTUFBTU0sT0FBTyxHQUFHQyx3RUFBYSxDQUFDZixjQUFELEVBQWlCO0FBQzVDZ0IsT0FBSztBQUR1QyxDQUFqQixDQUE3QjtBQUllRixzRUFBZiIsImZpbGUiOiIuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSBcInJlZHV4LXNhZ2FcIjtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcblxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XG4gIGNvbnN0IGVuaGFuY2VyID1cbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcbiAgICAgID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxuICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xuXG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocm9vdFJlZHVjZXIsIGVuaGFuY2VyKTtcblxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG5cbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiPzc4ZTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiaW1tZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///immer\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });