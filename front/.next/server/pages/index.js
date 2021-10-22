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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/njs/Documents/4leaf-education/magic_grid_app/front/components/Layout.jsx\";\n\n\n\n\n\nconst HeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({\n  displayName: \"Layout__HeaderSection\",\n  componentId: \"sc-7qxgpx-0\"\n})([\"width:100%;height:80px;padding:4px 16px;display:flex;flex-direction:row;align-items:center;\"]);\nconst LogoHoverAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"keyframes\"])([\"100%{transform:rotate(360deg);}\"]);\nconst LogoImg = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({\n  displayName: \"Layout__LogoImg\",\n  componentId: \"sc-7qxgpx-1\"\n})([\"width:48px;height:48px;cursor:pointer;&:hover{animation:\", \" 1s infinite;}\"], LogoHoverAnimation);\nconst SearchBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({\n  displayName: \"Layout__SearchBar\",\n  componentId: \"sc-7qxgpx-2\"\n})([\"margin:0px 10px;width:calc(100% - 212px);height:48px;outline:none;border:none;background-color:#e6e6e6;border-radius:35px;padding:0px 25px;color:#222;font-size:22px;\"]);\nconst BellIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"BellOutlined\"]).withConfig({\n  displayName: \"Layout__BellIcon\",\n  componentId: \"sc-7qxgpx-3\"\n})([\"width:48px;height:48px;font-size:20px;color:#555;line-height:48px;cursor:pointer;&:hover{animation:\", \" 0.5s forwards;}\"], LogoHoverAnimation);\nconst BookIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"BookOutlined\"]).withConfig({\n  displayName: \"Layout__BookIcon\",\n  componentId: \"sc-7qxgpx-4\"\n})([\"width:48px;height:48px;font-size:20px;color:#555;line-height:48px;cursor:pointer;&:hover{animation:\", \" 0.5s forwards;}\"], LogoHoverAnimation);\nconst ShareIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"ShareAltOutlined\"]).withConfig({\n  displayName: \"Layout__ShareIcon\",\n  componentId: \"sc-7qxgpx-5\"\n})([\"width:48px;height:48px;font-size:20px;color:#555;line-height:48px;cursor:pointer;&:hover{animation:\", \" 0.5s forwards;}\"], LogoHoverAnimation);\nconst BodySection = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({\n  displayName: \"Layout__BodySection\",\n  componentId: \"sc-7qxgpx-6\"\n})([\"padding:10px 80px;\"]);\n\nconst Layout = ({\n  children\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(HeaderSection, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(LogoImg, {\n        src: `https://firebasestorage.googleapis.com/v0/b/storage-4leaf.appspot.com/o/4leaflender%2Fassets%2Fimages%2Flogo%2Ffavicon.png?alt=media&token=1824f89c-3ee3-4de4-accf-4d0d5c2ee25f`,\n        alt: \"Logo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(SearchBar, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(BellIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(BookIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(ShareIcon, {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(BodySection, {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC5qc3g/ODdiNCJdLCJuYW1lcyI6WyJIZWFkZXJTZWN0aW9uIiwic3R5bGVkIiwic2VjdGlvbiIsIkxvZ29Ib3ZlckFuaW1hdGlvbiIsImtleWZyYW1lcyIsIkxvZ29JbWciLCJpbWciLCJTZWFyY2hCYXIiLCJpbnB1dCIsIkJlbGxJY29uIiwiQmVsbE91dGxpbmVkIiwiQm9va0ljb24iLCJCb29rT3V0bGluZWQiLCJTaGFyZUljb24iLCJTaGFyZUFsdE91dGxpbmVkIiwiQm9keVNlY3Rpb24iLCJMYXlvdXQiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBTUEsTUFBTUEsYUFBYSxHQUFHQyx3REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLG1HQUFuQjtBQVVBLE1BQU1DLGtCQUFrQixHQUFHQyxtRUFBSCxxQ0FBeEI7QUFNQSxNQUFNQyxPQUFPLEdBQUdKLHdEQUFNLENBQUNLLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUZBT0lILGtCQVBKLENBQWI7QUFXQSxNQUFNSSxTQUFTLEdBQUdOLHdEQUFNLENBQUNPLEtBQVY7QUFBQTtBQUFBO0FBQUEsNktBQWY7QUFnQkEsTUFBTUMsUUFBUSxHQUFHUix3REFBTSxDQUFDUyw4REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGdJQVNHUCxrQkFUSCxDQUFkO0FBWUEsTUFBTVEsUUFBUSxHQUFHVix3REFBTSxDQUFDVyw4REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGdJQVNHVCxrQkFUSCxDQUFkO0FBWUEsTUFBTVUsU0FBUyxHQUFHWix3REFBTSxDQUFDYSxrRUFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLGdJQVNFWCxrQkFURixDQUFmO0FBYUEsTUFBTVksV0FBVyxHQUFHZCx3REFBTSxDQUFDQyxPQUFWO0FBQUE7QUFBQTtBQUFBLDBCQUFqQjs7QUFJQSxNQUFNYyxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDL0Isc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxhQUFEO0FBQUEsOEJBQ0UscUVBQUMsT0FBRDtBQUNFLFdBQUcsRUFBRyxpTEFEUjtBQUVFLFdBQUcsRUFBQztBQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFPRSxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsZUFRRSxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkYsZUFTRSxxRUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBWUUscUVBQUMsV0FBRDtBQUFBLGdCQUFjQTtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWkY7QUFBQSxrQkFERjtBQWdCRCxDQWpCRDs7QUFtQmVELHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYXlvdXQuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7XG4gIEJlbGxPdXRsaW5lZCxcbiAgQm9va091dGxpbmVkLFxuICBTaGFyZUFsdE91dGxpbmVkLFxufSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcblxuY29uc3QgSGVhZGVyU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiA0cHggMTZweDtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgTG9nb0hvdmVyQW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICB9XG5gO1xuXG5jb25zdCBMb2dvSW1nID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcblxuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJjpob3ZlciB7XG4gICAgYW5pbWF0aW9uOiAke0xvZ29Ib3ZlckFuaW1hdGlvbn0gMXMgaW5maW5pdGU7XG4gIH1cbmA7XG5cbmNvbnN0IFNlYXJjaEJhciA9IHN0eWxlZC5pbnB1dGBcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIxMnB4KTtcbiAgaGVpZ2h0OiA0OHB4O1xuXG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICBwYWRkaW5nOiAwcHggMjVweDtcblxuICBjb2xvcjogIzIyMjtcbiAgZm9udC1zaXplOiAyMnB4O1xuYDtcblxuY29uc3QgQmVsbEljb24gPSBzdHlsZWQoQmVsbE91dGxpbmVkKWBcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzU1NTtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBhbmltYXRpb246ICR7TG9nb0hvdmVyQW5pbWF0aW9ufSAwLjVzIGZvcndhcmRzO1xuICB9XG5gO1xuY29uc3QgQm9va0ljb24gPSBzdHlsZWQoQm9va091dGxpbmVkKWBcbiAgd2lkdGg6IDQ4cHg7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzU1NTtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICBhbmltYXRpb246ICR7TG9nb0hvdmVyQW5pbWF0aW9ufSAwLjVzIGZvcndhcmRzO1xuICB9XG5gO1xuY29uc3QgU2hhcmVJY29uID0gc3R5bGVkKFNoYXJlQWx0T3V0bGluZWQpYFxuICB3aWR0aDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjNTU1O1xuICBsaW5lLWhlaWdodDogNDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIGFuaW1hdGlvbjogJHtMb2dvSG92ZXJBbmltYXRpb259IDAuNXMgZm9yd2FyZHM7XG4gIH1cbmA7XG5cbmNvbnN0IEJvZHlTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBhZGRpbmc6IDEwcHggODBweDtcbmA7XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWRlclNlY3Rpb24+XG4gICAgICAgIDxMb2dvSW1nXG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi9zdG9yYWdlLTRsZWFmLmFwcHNwb3QuY29tL28vNGxlYWZsZW5kZXIlMkZhc3NldHMlMkZpbWFnZXMlMkZsb2dvJTJGZmF2aWNvbi5wbmc/YWx0PW1lZGlhJnRva2VuPTE4MjRmODljLTNlZTMtNGRlNC1hY2NmLTRkMGQ1YzJlZTI1ZmB9XG4gICAgICAgICAgYWx0PVwiTG9nb1wiXG4gICAgICAgID48L0xvZ29JbWc+XG5cbiAgICAgICAgPFNlYXJjaEJhciAvPlxuICAgICAgICA8QmVsbEljb24gLz5cbiAgICAgICAgPEJvb2tJY29uIC8+XG4gICAgICAgIDxTaGFyZUljb24gLz5cbiAgICAgIDwvSGVhZGVyU2VjdGlvbj5cbiAgICAgIDxCb2R5U2VjdGlvbj57Y2hpbGRyZW59PC9Cb2R5U2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.jsx\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var react_magic_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-magic-grid */ \"react-magic-grid\");\n/* harmony import */ var react_magic_grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_magic_grid__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _reducers_portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/portfolio */ \"./reducers/portfolio.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\nvar _jsxFileName = \"/Users/njs/Documents/4leaf-education/magic_grid_app/front/pages/index.jsx\";\n\n\n\n\n\n\n\n\nconst SaveButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"]).withConfig({\n  displayName: \"pages__SaveButton\",\n  componentId: \"sc-2cp0ao-0\"\n})([\"position:absolute;bottom:5px;right:5px;display:none;\"]);\nconst RednerBox = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"pages__RednerBox\",\n  componentId: \"sc-2cp0ao-1\"\n})([\"width:calc(100% / 8);margin:2px;border-radius:10px;height:\", \";min-height:200px;box-shadow:0px 0px 5px #ccc;transition:0.4s;cursor:pointer;position:relative;&:hover{opacity:0.5;}&:hover \", \"{display:flex;}\"], props => props.height || \"200px\", SaveButton);\nconst RenderImg = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img.withConfig({\n  displayName: \"pages__RenderImg\",\n  componentId: \"sc-2cp0ao-2\"\n})([\"width:100%;height:100%;overflow:hidden;object-fit:cover;border-radius:10px;\"]);\n\nconst Home = () => {\n  const {\n    imgs\n  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useSelector\"])(state => state.portfolio);\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"useDispatch\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    dispatch({\n      type: _reducers_portfolio__WEBPACK_IMPORTED_MODULE_6__[\"IMG_LIST_REQUEST\"]\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    children: imgs.length === 0 ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(react_magic_grid__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      items: imgs.length,\n      children: imgs.map(item => {\n        const randomHeight = Math.floor(Math.random() * 400) + \"px\";\n        const randomWidth = Math.floor(Math.random() * 230) + \"px\";\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(RednerBox, {\n          width: randomWidth,\n          height: randomHeight,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(RenderImg, {\n            src: item.fileURL,\n            alt: \"image\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 17\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(SaveButton, {\n            type: \"primary\",\n            children: \"SAVE\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 17\n          }, undefined)]\n        }, item.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 15\n        }, undefined);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJTYXZlQnV0dG9uIiwic3R5bGVkIiwiQnV0dG9uIiwiUmVkbmVyQm94IiwiZGl2IiwicHJvcHMiLCJoZWlnaHQiLCJSZW5kZXJJbWciLCJpbWciLCJIb21lIiwiaW1ncyIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3J0Zm9saW8iLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlRWZmZWN0IiwidHlwZSIsIklNR19MSVNUX1JFUVVFU1QiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwicmFuZG9tSGVpZ2h0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmFuZG9tV2lkdGgiLCJmaWxlVVJMIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUdDLHdEQUFNLENBQUNDLDJDQUFELENBQVQ7QUFBQTtBQUFBO0FBQUEsNERBQWhCO0FBUUEsTUFBTUMsU0FBUyxHQUFHRix3REFBTSxDQUFDRyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNOQUlGQyxLQUFELElBQVdBLEtBQUssQ0FBQ0MsTUFBTixJQUFnQixPQUp4QixFQWtCSE4sVUFsQkcsQ0FBZjtBQXVCQSxNQUFNTyxTQUFTLEdBQUdOLHdEQUFNLENBQUNPLEdBQVY7QUFBQTtBQUFBO0FBQUEsbUZBQWY7O0FBU0EsTUFBTUMsSUFBSSxHQUFHLE1BQU07QUFDakIsUUFBTTtBQUFFQztBQUFGLE1BQVdDLCtEQUFXLENBQUVDLEtBQUQsSUFBV0EsS0FBSyxDQUFDQyxTQUFsQixDQUE1QjtBQUNBLFFBQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2RGLFlBQVEsQ0FBQztBQUNQRyxVQUFJLEVBQUVDLG9FQUFnQkE7QUFEZixLQUFELENBQVI7QUFHRCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSxjQUNHUixJQUFJLENBQUNTLE1BQUwsS0FBZ0IsQ0FBaEIsR0FBb0IsSUFBcEIsZ0JBQ0MscUVBQUMsdURBQUQ7QUFBVyxXQUFLLEVBQUVULElBQUksQ0FBQ1MsTUFBdkI7QUFBQSxnQkFDR1QsSUFBSSxDQUFDVSxHQUFMLENBQVVDLElBQUQsSUFBVTtBQUNsQixjQUFNQyxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsSUFBa0MsSUFBdkQ7QUFDQSxjQUFNQyxXQUFXLEdBQUdILElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsR0FBM0IsSUFBa0MsSUFBdEQ7QUFFQSw0QkFDRSxxRUFBQyxTQUFEO0FBRUUsZUFBSyxFQUFFQyxXQUZUO0FBR0UsZ0JBQU0sRUFBRUosWUFIVjtBQUFBLGtDQUtFLHFFQUFDLFNBQUQ7QUFBVyxlQUFHLEVBQUVELElBQUksQ0FBQ00sT0FBckI7QUFBOEIsZUFBRyxFQUFDO0FBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEYsZUFNRSxxRUFBQyxVQUFEO0FBQVksZ0JBQUksRUFBQyxTQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORjtBQUFBLFdBQ09OLElBQUksQ0FBQ08sRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBVUQsT0FkQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF1QkQsQ0FqQ0Q7O0FBbUNlbkIsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IE1hZ2ljR3JpZCBmcm9tIFwicmVhY3QtbWFnaWMtZ3JpZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IElNR19MSVNUX1JFUVVFU1QgfSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9ydGZvbGlvXCI7XG5cbmNvbnN0IFNhdmVCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDVweDtcbiAgcmlnaHQ6IDVweDtcblxuICBkaXNwbGF5OiBub25lO1xuYDtcblxuY29uc3QgUmVkbmVyQm94ID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDgpO1xuICBtYXJnaW46IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAkeyhwcm9wcykgPT4gcHJvcHMuaGVpZ2h0IHx8IFwiMjAwcHhcIn07XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4ICNjY2M7XG5cbiAgdHJhbnNpdGlvbjogMC40cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAmOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICAmOmhvdmVyICR7U2F2ZUJ1dHRvbn0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbmA7XG5cbmNvbnN0IFJlbmRlckltZyA9IHN0eWxlZC5pbWdgXG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5gO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCB7IGltZ3MgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9ydGZvbGlvKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogSU1HX0xJU1RfUkVRVUVTVCxcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIHtpbWdzLmxlbmd0aCA9PT0gMCA/IG51bGwgOiAoXG4gICAgICAgIDxNYWdpY0dyaWQgaXRlbXM9e2ltZ3MubGVuZ3RofT5cbiAgICAgICAgICB7aW1ncy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJhbmRvbUhlaWdodCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQwMCkgKyBcInB4XCI7XG4gICAgICAgICAgICBjb25zdCByYW5kb21XaWR0aCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIzMCkgKyBcInB4XCI7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxSZWRuZXJCb3hcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgd2lkdGg9e3JhbmRvbVdpZHRofVxuICAgICAgICAgICAgICAgIGhlaWdodD17cmFuZG9tSGVpZ2h0fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFJlbmRlckltZyBzcmM9e2l0ZW0uZmlsZVVSTH0gYWx0PVwiaW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIDxTYXZlQnV0dG9uIHR5cGU9XCJwcmltYXJ5XCI+U0FWRTwvU2F2ZUJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9SZWRuZXJCb3g+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L01hZ2ljR3JpZD5cbiAgICAgICl9XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

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

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiPzI0MTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiQGFudC1kZXNpZ24vaWNvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@ant-design/icons\n");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCI/MDhhYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJhbnRkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///antd\n");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-magic-grid":
/*!***********************************!*\
  !*** external "react-magic-grid" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-magic-grid\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYWdpYy1ncmlkXCI/Yjg0MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1tYWdpYy1ncmlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFnaWMtZ3JpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-magic-grid\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

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