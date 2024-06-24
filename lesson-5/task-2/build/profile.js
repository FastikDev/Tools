/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/profile/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/profile/gateway.js":
/*!********************************!*\
  !*** ./src/profile/gateway.js ***!
  \********************************/
/*! exports provided: fetchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUser\", function() { return fetchUser; });\n// file path: src/profile/gateway.js\r\n\r\nasync function fetchUser(userId) {\r\n  try {\r\n    const response = await fetch(`https://api.github.com/users/${userId}`);\r\n    return await response.json();\r\n  } catch (error) {\r\n    throw new Error(\"Failed to get user data\");\r\n  }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzP2MyMzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUVPO0FBQ1A7QUFDQSxpRUFBaUUsT0FBTztBQUN4RTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS9nYXRld2F5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZmlsZSBwYXRoOiBzcmMvcHJvZmlsZS9nYXRld2F5LmpzXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2VyKHVzZXJJZCkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7dXNlcklkfWApO1xyXG4gICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGdldCB1c2VyIGRhdGFcIik7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/gateway.js\n");

/***/ }),

/***/ "./src/profile/index.js":
/*!******************************!*\
  !*** ./src/profile/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gateway__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gateway */ \"./src/profile/gateway.js\");\n/* harmony import */ var _printProfile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printProfile */ \"./src/profile/printProfile.js\");\n\r\n\r\n\r\nObject(_gateway__WEBPACK_IMPORTED_MODULE_0__[\"fetchUser\"])(\"github\").then(({ name, location }) =>\r\n  Object(_printProfile__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\r\n    name,\r\n    location,\r\n  })\r\n);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9pbmRleC5qcz9hNjkyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFzQztBQUNJOztBQUUxQywwREFBUyxrQkFBa0IsaUJBQWlCO0FBQzVDLEVBQUUsNkRBQVk7QUFDZDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Ii4vc3JjL3Byb2ZpbGUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmZXRjaFVzZXIgfSBmcm9tIFwiLi9nYXRld2F5XCI7XHJcbmltcG9ydCBwcmludFByb2ZpbGUgZnJvbSBcIi4vcHJpbnRQcm9maWxlXCI7XHJcblxyXG5mZXRjaFVzZXIoXCJnaXRodWJcIikudGhlbigoeyBuYW1lLCBsb2NhdGlvbiB9KSA9PlxyXG4gIHByaW50UHJvZmlsZSh7XHJcbiAgICBuYW1lLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgfSlcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/profile/index.js\n");

/***/ }),

/***/ "./src/profile/printProfile.js":
/*!*************************************!*\
  !*** ./src/profile/printProfile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// file path: src/profile/printProfile.js\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ((profileData) => {\r\n  const { name, location } = profileData;\r\n  console.log(`${name} from ${location}`);\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS9wcmludFByb2ZpbGUuanM/YjIzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBOztBQUVlO0FBQ2YsU0FBUyxpQkFBaUI7QUFDMUIsaUJBQWlCLEtBQUssUUFBUSxTQUFTO0FBQ3ZDLENBQUMsRUFBQyIsImZpbGUiOiIuL3NyYy9wcm9maWxlL3ByaW50UHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgcGF0aDogc3JjL3Byb2ZpbGUvcHJpbnRQcm9maWxlLmpzXHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvZmlsZURhdGEpID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGxvY2F0aW9uIH0gPSBwcm9maWxlRGF0YTtcclxuICBjb25zb2xlLmxvZyhgJHtuYW1lfSBmcm9tICR7bG9jYXRpb259YCk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/profile/printProfile.js\n");

/***/ })

/******/ });