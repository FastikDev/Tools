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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile */ \"./src/profile.js\");\n// file path: src/index.js\n\n\nconst userData = {\n  name: \"Tom\",\n  age: 17\n};\nconst profile = {\n  ...userData,\n  company: \"Gromcode\"\n};\nObject(_profile__WEBPACK_IMPORTED_MODULE_0__[\"printProfile\"])(profile);\nconst data = [1, 2, [3, 4, [5, 6]]];\nconst result = data.flat(2);\nconsole.log(result);\nPromise.resolve().finally();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJuYW1lcyI6WyJ1c2VyRGF0YSIsIm5hbWUiLCJhZ2UiLCJwcm9maWxlIiwiY29tcGFueSIsInByaW50UHJvZmlsZSIsImRhdGEiLCJyZXN1bHQiLCJmbGF0IiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJyZXNvbHZlIiwiZmluYWxseSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBOztBQUV5QztBQUV6QyxNQUFNQSxRQUFRLEdBQUc7RUFDZkMsSUFBSSxFQUFFLEtBQUs7RUFDWEMsR0FBRyxFQUFFO0FBQ1AsQ0FBQztBQUVELE1BQU1DLE9BQU8sR0FBRztFQUNkLEdBQUdILFFBQVE7RUFDWEksT0FBTyxFQUFFO0FBQ1gsQ0FBQztBQUVEQyw2REFBWSxDQUFDRixPQUFPLENBQUM7QUFFckIsTUFBTUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVuQyxNQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMzQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQztBQUVuQkksT0FBTyxDQUFDQyxPQUFPLENBQUMsQ0FBQyxDQUFDQyxPQUFPLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgcGF0aDogc3JjL2luZGV4LmpzXHJcblxyXG5pbXBvcnQgeyBwcmludFByb2ZpbGUgfSBmcm9tIFwiLi9wcm9maWxlXCI7XHJcblxyXG5jb25zdCB1c2VyRGF0YSA9IHtcclxuICBuYW1lOiBcIlRvbVwiLFxyXG4gIGFnZTogMTcsXHJcbn07XHJcblxyXG5jb25zdCBwcm9maWxlID0ge1xyXG4gIC4uLnVzZXJEYXRhLFxyXG4gIGNvbXBhbnk6IFwiR3JvbWNvZGVcIixcclxufTtcclxuXHJcbnByaW50UHJvZmlsZShwcm9maWxlKTtcclxuXHJcbmNvbnN0IGRhdGEgPSBbMSwgMiwgWzMsIDQsIFs1LCA2XV1dO1xyXG5cclxuY29uc3QgcmVzdWx0ID0gZGF0YS5mbGF0KDIpO1xyXG5jb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuUHJvbWlzZS5yZXNvbHZlKCkuZmluYWxseSgpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/profile.js":
/*!************************!*\
  !*** ./src/profile.js ***!
  \************************/
/*! exports provided: printProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"printProfile\", function() { return printProfile; });\n// file path: src/profile.js\n\nconst printProfile = profileData => {\n  const {\n    name,\n    company\n  } = profileData;\n  console.log(`${name} from ${company}`);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS5qcz82ZTE1Il0sIm5hbWVzIjpbInByaW50UHJvZmlsZSIsInByb2ZpbGVEYXRhIiwibmFtZSIsImNvbXBhbnkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7O0FBRU8sTUFBTUEsWUFBWSxHQUFJQyxXQUFXLElBQUs7RUFDM0MsTUFBTTtJQUFFQyxJQUFJO0lBQUVDO0VBQVEsQ0FBQyxHQUFHRixXQUFXO0VBQ3JDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxHQUFHSCxJQUFJLFNBQVNDLE9BQU8sRUFBRSxDQUFDO0FBQ3hDLENBQUMiLCJmaWxlIjoiLi9zcmMvcHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgcGF0aDogc3JjL3Byb2ZpbGUuanNcclxuXHJcbmV4cG9ydCBjb25zdCBwcmludFByb2ZpbGUgPSAocHJvZmlsZURhdGEpID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGNvbXBhbnkgfSA9IHByb2ZpbGVEYXRhO1xyXG4gIGNvbnNvbGUubG9nKGAke25hbWV9IGZyb20gJHtjb21wYW55fWApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/profile.js\n");

/***/ })

/******/ });