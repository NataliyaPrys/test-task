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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/styles/adaptive.less":
/*!***************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/styles/adaptive.less ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"@media only screen and (max-width: 1200px) {\\n  .header {\\n    width: 800px;\\n  }\\n  .container {\\n    margin: 0 auto;\\n  }\\n  .courage {\\n    left: 45px;\\n    top: 5px;\\n  }\\n  .phones {\\n    width: 560px;\\n    height: 40px;\\n    left: 224px;\\n    top: 20px;\\n  }\\n  .main-menu {\\n    left: 233px;\\n  }\\n  .slider {\\n    margin: 0;\\n  }\\n  .offers {\\n    width: 725px;\\n  }\\n  .offer {\\n    left: 163px;\\n  }\\n  .get-ofer {\\n    left: 168px;\\n  }\\n  .advant1 {\\n    left: 10px;\\n  }\\n  .advant2 {\\n    left: 344px;\\n  }\\n  .form {\\n    left: 24px;\\n    top: 64px;\\n  }\\n  .flooter1 {\\n    left: 27px;\\n  }\\n  .flooter2 {\\n    left: 310px;\\n  }\\n  .flooter3 {\\n    left: 413px;\\n  }\\n  .flooter4 {\\n    left: 530px;\\n  }\\n  .advantages,\\n  .sentence,\\n  .footer {\\n    width: 800px;\\n    height: 300px;\\n  }\\n  .slider__item {\\n    flex: 0 0 50%;\\n    max-width: 50%;\\n  }\\n  .tours {\\n    width: 800px;\\n    height: 300px;\\n    /*margin: 0 0 10px 281px;*/\\n  }\\n  .sentence {\\n    height: 200px;\\n  }\\n  .tour {\\n    width: 200px;\\n    background-color: maroon;\\n  }\\n  .advant {\\n    width: 200px;\\n    background-color: darkgoldenrod;\\n  }\\n}\\n@media only screen and (max-width: 600px) {\\n  .header {\\n    width: 400px;\\n  }\\n  .container {\\n    margin: 0 auto;\\n  }\\n  .courage {\\n    left: 7px;\\n    top: 5px;\\n  }\\n  .header {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/3b.png */ \"./src/images/3b.png\")) + \");\\n    height: 234px;\\n  }\\n  .phones {\\n    display: block;\\n    width: 300px;\\n    height: 50px;\\n    left: 159px;\\n    top: 4px;\\n    font-size: 11px;\\n  }\\n  .street {\\n    width: 300px;\\n    display: block;\\n  }\\n  .img-nav {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/11.png */ \"./src/images/11.png\")) + \");\\n    width: 15x;\\n    height: 15px;\\n  }\\n  .img-tel {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/13.png */ \"./src/images/13.png\")) + \");\\n    width: 15x;\\n    height: 15px;\\n  }\\n  .icons1 {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/15.png */ \"./src/images/15.png\")) + \");\\n    width: 15px;\\n    height: 15px;\\n  }\\n  .icons2 {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/12.png */ \"./src/images/12.png\")) + \");\\n    width: 15px;\\n    height: 15px;\\n  }\\n  .main-menu {\\n    top: 78px;\\n    left: 4px;\\n    font-size: 12px;\\n  }\\n  .main-menu a {\\n    padding: 6px 10px;\\n    margin-left: 0px;\\n  }\\n  .offers {\\n    width: 350px;\\n    height: 70px;\\n    top: 127px;\\n  }\\n  .offer {\\n    font-size: 12px;\\n    width: 300px;\\n    height: 50px;\\n    left: 14px;\\n    top: 0px;\\n  }\\n  .get-ofer {\\n    left: 98px;\\n    top: 37px;\\n  }\\n  .button {\\n    padding: 4px 6px;\\n    font: 10px Arial, Helvetica, sans-serif;\\n  }\\n  .ellipse {\\n    top: 205px;\\n    left: 129px;\\n  }\\n  .radio-item {\\n    margin-left: 4px;\\n  }\\n  .slider {\\n    display: flex;\\n    max-width: 401px;\\n    margin: 30px 0px 24px 89px;\\n  }\\n  .tours {\\n    height: 225px;\\n  }\\n  .advantages {\\n    width: 400px;\\n    height: 480px;\\n  }\\n  .advant1 {\\n    background-image: url(\" + escape(__webpack_require__(/*! ../images/1b.png */ \"./src/images/1b.png\")) + \");\\n    left: 54px;\\n    top: 25px;\\n  }\\n  .advant2 {\\n    width: 300px;\\n    height: 220px;\\n    top: 254px;\\n    left: 54px;\\n  }\\n  .advant2 p {\\n    font-size: 13px;\\n  }\\n  .sentence {\\n    width: 400px;\\n    height: 200px;\\n  }\\n  .name,\\n  .e-mail,\\n  .number,\\n  .country {\\n    display: block;\\n    position: static;\\n  }\\n  .get-ofer1 {\\n    top: 115px;\\n    left: 20px;\\n    position: absolute;\\n  }\\n  .form {\\n    width: 200px;\\n    height: 167px;\\n    top: 20px;\\n    left: 99px;\\n  }\\n  .footer {\\n    width: 400px;\\n    height: 313px;\\n  }\\n  .flooter1 {\\n    width: 184px;\\n    left: 33px;\\n    top: 9px;\\n    font-size: 9px;\\n  }\\n  .flooter1,\\n  .flooter2,\\n  .flooter3,\\n  .flooter24 {\\n    line-height: 1.1;\\n  }\\n  .flooter2 {\\n    left: 274px;\\n    top: 3px;\\n  }\\n  .flooter3 {\\n    left: 28px;\\n    top: 200px;\\n  }\\n  .flooter4 {\\n    width: 184px;\\n    left: 199px;\\n    top: 181px;\\n  }\\n  .tours {\\n    width: 400px;\\n    height: 243px;\\n    margin: 0 0 0px 100px;\\n  }\\n  .slider__item {\\n    flex: 0 0 100%;\\n    max-width: 100%;\\n  }\\n  .tours-txt a {\\n    margin-left: 20px;\\n    font-size: 15px;\\n    margin-left: 43px;\\n  }\\n  .tours-txt {\\n    padding-left: 0;\\n  }\\n  .slider {\\n    margin: 0px 0px 24px 0px;\\n  }\\n}\\n@media only screen and (max-width: 320px) {\\n  .tours {\\n    margin: 0px 0 0px 0px;\\n  }\\n  .slider__wrapper {\\n    height: 200px;\\n    width: 800px;\\n  }\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/adaptive.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/styles/responsive.less":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/styles/responsive.less ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".container {\\n  max-width: 1200px;\\n}\\n@media only screen and (max-width: 1200px) {\\n  .header {\\n    background-color: bisque;\\n    width: 100%;\\n  }\\n  .advantages,\\n  .tours,\\n  .sentence,\\n  .footer {\\n    width: 100%;\\n  }\\n  .tour {\\n    /* width: 23%;*/\\n    background-color: chartreuse;\\n  }\\n  .advant {\\n    width: 32%;\\n    background-color: gold;\\n  }\\n}\\n/*1000px*/\\n@media only screen and (max-width: 1000px) {\\n  .tour {\\n    width: 45%;\\n    background-color: chartreuse;\\n  }\\n  .advant {\\n    width: 90%;\\n    background-color: gold;\\n  }\\n}\\n/*600px*/\\n@media only screen and (max-width: 600px) {\\n  .tour {\\n    width: 100%;\\n    background-color: chartreuse;\\n  }\\n  .header {\\n    width: 100%;\\n  }\\n  .advant {\\n    width: 100%;\\n    background-color: gold;\\n  }\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/responsive.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/styles/style.less":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js!./src/styles/style.less ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\nhtml,\\nbody {\\n  font-family: 'Open Sans', sans-serif;\\n  padding: 0px;\\n  background-color: #ffffff;\\n}\\nbody {\\n  margin: 0;\\n  font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\";\\n}\\n.container {\\n  margin: 0 auto;\\n  display: flex;\\n  flex-direction: column;\\n  min-height: 100%;\\n}\\n.tours {\\n  position: relative;\\n  width: 1200px;\\n  height: 260px;\\n  margin: 44px auto;\\n  flex: 1 0 auto;\\n}\\n.header {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/3a.png */ \"./src/images/3a.png\")) + \");\\n  width: 1200px;\\n  height: 500px;\\n  margin: 0 auto;\\n  flex: 1 0 auto;\\n  position: relative;\\n}\\n.courage {\\n  width: 100px;\\n  height: 100px;\\n  position: absolute;\\n  left: 237px;\\n  top: 5px;\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/16.png */ \"./src/images/16.png\")) + \");\\n  background-repeat: no-repeat;\\n  display: inline-block;\\n  float: left;\\n}\\n.phones {\\n  position: absolute;\\n  width: 560px;\\n  height: 40px;\\n  left: 483px;\\n  top: 20px;\\n  color: #ffffff;\\n  font-size: 12px;\\n  /*background-color: rgba(255, 255, 255, 0.75);*/\\n  border-radius: 10px;\\n  padding: 5px;\\n  display: flex;\\n}\\n.street {\\n  margin-right: 10px;\\n  margin-left: 2px;\\n}\\n.phone {\\n  margin-right: 30px;\\n}\\n.img-nav {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/11.png */ \"./src/images/11.png\")) + \");\\n  width: 30px;\\n  height: 30px;\\n  background-repeat: no-repeat;\\n  float: left;\\n}\\n.img-tel {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/13.png */ \"./src/images/13.png\")) + \");\\n  width: 30px;\\n  height: 30px;\\n  background-repeat: no-repeat;\\n  float: left;\\n}\\n.icons {\\n  display: inline-block;\\n}\\n.icons1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/15.png */ \"./src/images/15.png\")) + \");\\n  width: 30px;\\n  height: 30px;\\n  background-repeat: no-repeat;\\n  float: left;\\n}\\n.icons2 {\\n  float: right;\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/12.png */ \"./src/images/12.png\")) + \");\\n  width: 30px;\\n  height: 30px;\\n  background-repeat: no-repeat;\\n}\\n.main-menu {\\n  position: absolute;\\n  top: 54px;\\n  left: 486px;\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  font-size: 13px;\\n  background: #fbd341;\\n  border-radius: 5px;\\n}\\n.main-menu > li {\\n  position: relative;\\n  display: inline-block;\\n  margin-right: -4px;\\n}\\n.main-menu a {\\n  display: inline-block;\\n  margin-left: -1px;\\n  padding: 8px 22px;\\n  color: #0c0d0d;\\n  font-weight: bold;\\n  border-left: 0px solid #fbd341;\\n  border-radius: 5px;\\n  text-decoration: none;\\n}\\n.main-menu a:hover {\\n  background-color: #fbd341;\\n}\\n.main-menu .sub-menu {\\n  position: absolute;\\n  left: 1px;\\n  display: none;\\n  width: 150px;\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n  background: rgba(6, 103, 166, 0.5);\\n  backface-visibility: hidden;\\n}\\n.main-menu .sub-menu a {\\n  border: 0px solid #e5e5e5;\\n  margin-bottom: -3px;\\n  color: #f3f7f9;\\n  font-size: 12px;\\n}\\n.main-menu > li:hover .sub-menu {\\n  display: block;\\n}\\n.active1:after {\\n  border-style: solid;\\n  border-width: 0.15em 0.15em 0 0;\\n  content: '';\\n  display: inline-block;\\n  *height: 0.45em;\\n  left: 0.15em;\\n  top: 0.15em;\\n  width: 0.45em;\\n  transform: rotate(135deg);\\n}\\n.offers {\\n  position: absolute;\\n  width: 844px;\\n  height: 149px;\\n  left: 0px;\\n  top: 200px;\\n  background: rgba(6, 103, 166, 0.5);\\n  padding: 5px;\\n  display: inline-block;\\n  float: left;\\n}\\n.offer {\\n  position: absolute;\\n  width: 560px;\\n  height: 100px;\\n  left: 263px;\\n  top: 39px;\\n  color: #ffffff;\\n  font-size: 18px;\\n  text-align: center;\\n  font-weight: bold;\\n  /*background-color: rgba(255, 255, 255, 0.75);*/\\n  padding: 5px;\\n  display: flex;\\n  float: right;\\n}\\n.get-ofer {\\n  top: 95px;\\n  left: 266px;\\n  position: absolute;\\n}\\n.button {\\n  text-decoration: none;\\n  text-align: center;\\n  padding: 6px 15px;\\n  border: solid 1px #fbd341;\\n  -webkit-border-radius: 10px;\\n  -moz-border-radius: 10px;\\n  border-radius: 5px;\\n  font: 12px Arial, Helvetica, sans-serif;\\n  font-weight: bold;\\n  color: #0c0d0d;\\n  background: #fbd341;\\n  -webkit-box-shadow: 1px -2px 2px #bababa, inset 0px 0px 1px #ffffff;\\n  -moz-box-shadow: 1px -2px 2px #bababa, inset 0px 0px 1px #ffffff;\\n  box-shadow: 1px -2px 2px #bababa, inset 0px 0px 1px #ffffff;\\n}\\n.button:hover {\\n  padding: 7px 16px;\\n  border: solid 2px #fbd341;\\n  -webkit-border-radius: 10px;\\n  -moz-border-radius: 10px;\\n  border-radius: 5px;\\n  font: 12px Arial, Helvetica, sans-serif;\\n  font-weight: bold;\\n  color: #0c0d0d;\\n  background: #fbd341;\\n  -webkit-box-shadow: 1px -2px 2px #bababa, inset 0px 0px 1px #ffffff;\\n  -moz-box-shadow: 1px -2px 2px #bababa, inset 0px 0px 1px #ffffff;\\n  box-shadow: 1px -2px 2px #bababa, inset 0px 0px 1px #ffffff;\\n}\\n.button:active {\\n  padding: 6px 15px;\\n  border: solid 1px e1b204;\\n  -webkit-border-radius: 10px;\\n  -moz-border-radius: 10px;\\n  border-radius: 5px;\\n  font: 12px Arial, Helvetica, sans-serif;\\n  font-weight: bold;\\n  color: #0c0d0d;\\n  background: #fbd341;\\n  -webkit-box-shadow: 1px -2px 2px #bababa, inset 0px 0px 1px #ffffff;\\n  -moz-box-shadow: 1px -2px 2px #bababa, inset 0px 0px 1px #ffffff;\\n  box-shadow: 1px -2px 2px #bababa, inset 0px 0px 1px #ffffff;\\n}\\n.ellipse {\\n  position: absolute;\\n  width: 200px;\\n  height: 40px;\\n  top: 455px;\\n  left: 251px;\\n  color: #d7d8d4;\\n  font-size: 12px;\\n  border-radius: 10px;\\n  padding: 5px;\\n  display: flex;\\n  float: left;\\n}\\n.radio-item {\\n  width: 10px;\\n  height: 10px;\\n  background: #e8e3e3;\\n  -moz-border-radius: 50px;\\n  -webkit-border-radius: 50px;\\n  border-radius: 50px;\\n  margin-left: 7px;\\n}\\n.title-tours {\\n  position: absolute;\\n  top: 5px;\\n  font-size: 15px;\\n  color: #0c0d0d;\\n}\\n.advantages {\\n  position: relative;\\n  text-align: center;\\n  width: 1200px;\\n  height: 300px;\\n  background-color: #ffffff;\\n  margin: 0 auto;\\n}\\n.advant1 {\\n  position: absolute;\\n  left: 240px;\\n  top: 50px;\\n  width: 300px;\\n  height: 200px;\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/1a.png */ \"./src/images/1a.png\")) + \");\\n  display: inline-block;\\n  font-size: 0;\\n  float: left;\\n}\\n.advant2 {\\n  position: absolute;\\n  width: 400px;\\n  height: 200px;\\n  left: 600px;\\n  top: 50px;\\n  background-color: #ffffff;\\n  display: inline-block;\\n  font-size: 14px;\\n  float: left;\\n  min-height: 10em;\\n  overflow: scroll;\\n  color: #0c0d0d;\\n}\\n.advant2 p {\\n  text-align: left;\\n}\\n.sentence {\\n  position: relative;\\n  text-align: center;\\n  width: 1200px;\\n  height: 150px;\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/2a.png */ \"./src/images/2a.png\")) + \");\\n  margin: 0 auto;\\n}\\n.form {\\n  position: absolute;\\n  width: 753px;\\n  height: 89px;\\n  left: 231px;\\n  top: 30px;\\n  background: rgba(8, 8, 8, 0.5);\\n  padding: 5px;\\n}\\ninput {\\n  border: 0;\\n  border-bottom: 1px solid #ffffff;\\n  padding-top: 10px;\\n  font-size: 12px;\\n  float: left;\\n  color: #ffffff;\\n}\\ninput:focus {\\n  outline: none;\\n}\\n.name,\\n.e-mail,\\n.number,\\n.country {\\n  position: absolute;\\n  width: 100px;\\n  margin-left: 10px;\\n  background-color: transparent;\\n  display: inline-block;\\n  top: 15px;\\n}\\n.name {\\n  left: 5px;\\n}\\n.e-mail {\\n  left: 60px;\\n}\\n.number {\\n  left: 115px;\\n}\\n.country {\\n  left: 170px;\\n}\\noption:hover {\\n  border: 1px solid #0c0d0d;\\n  color: #ffffff;\\n}\\n.get-ofer1 {\\n  top: 35px;\\n  left: 480px;\\n  position: absolute;\\n}\\n.footer {\\n  position: relative;\\n  text-align: center;\\n  width: 1200px;\\n  height: 250px;\\n  background-color: #22334d;\\n  margin: 0 auto;\\n  color: #ffffff;\\n  line-height: 1.5;\\n}\\n.flooter1,\\n.flooter2,\\n.flooter3,\\n.flooter4 {\\n  position: absolute;\\n  top: 20px;\\n  left: 100px;\\n  font-size: 12px;\\n  text-align: left;\\n}\\n.flooter1 {\\n  width: 245px;\\n}\\n.flooter2 {\\n  display: inline-block;\\n  width: 120px;\\n  top: 20px;\\n  left: 430px;\\n}\\n.flooter2 a {\\n  color: #ffffff;\\n  text-decoration: none;\\n  display: inline-block;\\n  padding: 5px;\\n}\\n.flooter3 {\\n  display: inline-block;\\n  width: 120px;\\n  top: 20px;\\n  left: 600px;\\n}\\n.flooter3 a {\\n  color: #ffffff;\\n  text-decoration: none;\\n  display: inline-block;\\n  padding: 5px;\\n}\\n.flooter4 {\\n  position: absolute;\\n  top: 20px;\\n  left: 800px;\\n  width: 245px;\\n  font-size: 12px;\\n}\\n.img1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/11.png */ \"./src/images/11.png\")) + \");\\n}\\n.img2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/13.png */ \"./src/images/13.png\")) + \");\\n}\\n.tours-txt {\\n  width: 120px;\\n  height: 100px;\\n  display: inline;\\n  padding-left: 242px;\\n}\\n.tours-txt a {\\n  margin-left: 20px;\\n  text-decoration: none;\\n  font-size: 20px;\\n  color: black;\\n}\\n.tours-txt a:hover {\\n  color: #fbd341;\\n}\\n.slider {\\n  position: relative;\\n  overflow: hidden;\\n  height: 250px;\\n}\\n.slider__wrapper {\\n  display: flex;\\n  transition: transform 0.6s ease;\\n  height: 230px;\\n}\\n.slider__item {\\n  flex: 0 0 35%;\\n  max-width: 35%;\\n}\\n.slider__control {\\n  position: absolute;\\n  top: 50%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  width: 40px;\\n  color: #ffffff;\\n  text-align: center;\\n  height: 40px;\\n  transform: translateY(-50%);\\n  background: rgba(0, 0, 0, 0);\\n}\\n.slider__control:hover,\\n.slider__control:focus {\\n  color: #ffffff;\\n  text-decoration: none;\\n  outline: 0;\\n  opacity: 0.9;\\n}\\n.slider__control_left {\\n  left: 0;\\n}\\n.slider__control_right {\\n  right: 0;\\n}\\n.slider__control::before {\\n  content: '';\\n  display: inline-block;\\n  width: 40px;\\n  height: 40px;\\n  background: transparent no-repeat center center;\\n  background-size: 100% 100%;\\n}\\n.slider__control_left::before {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/27.png */ \"./src/images/27.png\")) + \");\\n}\\n.slider__control_right::before {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/26.png */ \"./src/images/26.png\")) + \");\\n}\\n.slider1,\\n.slider2,\\n.slider3,\\n.slider4 {\\n  position: relative;\\n  height: 154px;\\n  width: 380px;\\n  background: #ffffff;\\n  border-radius: 10px;\\n  top: 50px;\\n  right: -10px;\\n}\\n.img-1,\\n.img-2,\\n.img-3,\\n.img-4 {\\n  position: absolute;\\n  height: 140px;\\n  width: 140px;\\n  border-radius: 10px;\\n  top: 7px;\\n  left: 5px;\\n}\\n.img-1 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/10d.png */ \"./src/images/10d.png\")) + \");\\n}\\n.img-2 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/9d.png */ \"./src/images/9d.png\")) + \");\\n}\\n.img-3 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/9d.png */ \"./src/images/9d.png\")) + \");\\n}\\n.img-4 {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/10d.png */ \"./src/images/10d.png\")) + \");\\n}\\n.text1,\\n.text2,\\n.text3,\\n.text4 {\\n  position: absolute;\\n  height: 140px;\\n  width: 200px;\\n  top: 7px;\\n  left: 160px;\\n  font-size: 12px;\\n}\\n.yellow {\\n  background-image: url(\" + escape(__webpack_require__(/*! ../images/25a.png */ \"./src/images/25a.png\")) + \");\\n}\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./src/styles/style.less?./node_modules/css-loader!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function escape(url) {\n    if (typeof url !== 'string') {\n        return url\n    }\n    // If url is already wrapped in quotes, remove them\n    if (/^['\"].*['\"]$/.test(url)) {\n        url = url.slice(1, -1);\n    }\n    // Should url be wrapped?\n    // See https://drafts.csswg.org/css-values-3/#urls\n    if (/[\"'() \\t\\n]/.test(url)) {\n        return '\"' + url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n') + '\"'\n    }\n\n    return url\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/url/escape.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/images/10d.png":
/*!****************************!*\
  !*** ./src/images/10d.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/47db41ba35af983b9223ad048721b841.png\";\n\n//# sourceURL=webpack:///./src/images/10d.png?");

/***/ }),

/***/ "./src/images/11.png":
/*!***************************!*\
  !*** ./src/images/11.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/321c12123ad2f3a96cdc06290a224284.png\";\n\n//# sourceURL=webpack:///./src/images/11.png?");

/***/ }),

/***/ "./src/images/12.png":
/*!***************************!*\
  !*** ./src/images/12.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/3ee0fa591593077103cb49a986fc2ec1.png\";\n\n//# sourceURL=webpack:///./src/images/12.png?");

/***/ }),

/***/ "./src/images/13.png":
/*!***************************!*\
  !*** ./src/images/13.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/275fa3cac6a8b7ba2a724064e15e72ec.png\";\n\n//# sourceURL=webpack:///./src/images/13.png?");

/***/ }),

/***/ "./src/images/15.png":
/*!***************************!*\
  !*** ./src/images/15.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/d112b313e8ce125c5d5f5cb6e7311e0d.png\";\n\n//# sourceURL=webpack:///./src/images/15.png?");

/***/ }),

/***/ "./src/images/16.png":
/*!***************************!*\
  !*** ./src/images/16.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/8fbfeb4186e89f79620d2e20bc809da3.png\";\n\n//# sourceURL=webpack:///./src/images/16.png?");

/***/ }),

/***/ "./src/images/1a.png":
/*!***************************!*\
  !*** ./src/images/1a.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/ddd4a9ec532ff35cf193a85374065229.png\";\n\n//# sourceURL=webpack:///./src/images/1a.png?");

/***/ }),

/***/ "./src/images/1b.png":
/*!***************************!*\
  !*** ./src/images/1b.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/a1c52efb75caca1816005f404c2bf797.png\";\n\n//# sourceURL=webpack:///./src/images/1b.png?");

/***/ }),

/***/ "./src/images/25a.png":
/*!****************************!*\
  !*** ./src/images/25a.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/94435a2a341956f2cb018adab15cd341.png\";\n\n//# sourceURL=webpack:///./src/images/25a.png?");

/***/ }),

/***/ "./src/images/26.png":
/*!***************************!*\
  !*** ./src/images/26.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/76fb1314eea4ed26b3623b22ba3d3e97.png\";\n\n//# sourceURL=webpack:///./src/images/26.png?");

/***/ }),

/***/ "./src/images/27.png":
/*!***************************!*\
  !*** ./src/images/27.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/dfee149424e2ce91731706de96dc013e.png\";\n\n//# sourceURL=webpack:///./src/images/27.png?");

/***/ }),

/***/ "./src/images/2a.png":
/*!***************************!*\
  !*** ./src/images/2a.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/2eb790dd39c981c05b83e20d5eca0a15.png\";\n\n//# sourceURL=webpack:///./src/images/2a.png?");

/***/ }),

/***/ "./src/images/3a.png":
/*!***************************!*\
  !*** ./src/images/3a.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/fe769160b7c273c63b14ad3f447c6574.png\";\n\n//# sourceURL=webpack:///./src/images/3a.png?");

/***/ }),

/***/ "./src/images/3b.png":
/*!***************************!*\
  !*** ./src/images/3b.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/418e79a8eb667f26fcedaf96aca13d51.png\";\n\n//# sourceURL=webpack:///./src/images/3b.png?");

/***/ }),

/***/ "./src/images/9d.png":
/*!***************************!*\
  !*** ./src/images/9d.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"dist/images/a45848b2ff43b0ef46041c9282e96cdc.png\";\n\n//# sourceURL=webpack:///./src/images/9d.png?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider.js */ \"./src/scripts/slider.js\");\n/* harmony import */ var _slider_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_slider_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_responsive_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../styles/responsive.less */ \"./src/styles/responsive.less\");\n/* harmony import */ var _styles_responsive_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_responsive_less__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_adaptive_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../styles/adaptive.less */ \"./src/styles/adaptive.less\");\n/* harmony import */ var _styles_adaptive_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_adaptive_less__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../styles/style.less */ \"./src/styles/style.less\");\n/* harmony import */ var _styles_style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_style_less__WEBPACK_IMPORTED_MODULE_3__);\n\r\n//import './less.js';\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/slider.js":
/*!*******************************!*\
  !*** ./src/scripts/slider.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var multiItemSlider = (function () {\n  return function (selector) {\n    var\n      _mainElement = document.querySelector(selector), // основный элемент блока\n      _sliderWrapper = _mainElement.querySelector('.slider__wrapper'), // обертка для .slider-item\n      _sliderItems = _mainElement.querySelectorAll('.slider__item'), // элементы (.slider-item)\n      _sliderControls = _mainElement.querySelectorAll('.slider__control'), // элементы управления\n      _sliderControlLeft = _mainElement.querySelector('.slider__control_left'), // кнопка \"LEFT\"\n      _sliderControlRight = _mainElement.querySelector('.slider__control_right'), // кнопка \"RIGHT\"\n      _wrapperWidth = parseFloat(getComputedStyle(_sliderWrapper).width), // ширина обёртки\n      _itemWidth = parseFloat(getComputedStyle(_sliderItems[0]).width), // ширина одного элемента\n      _positionLeftItem = 0, // позиция левого активного элемента\n      _transform = 0, // значение трансформации .slider_wrapper\n      _step = _itemWidth / _wrapperWidth * 100, // величина шага (для трансформации)\n      _items = []; // массив элементов\n\n    // наполнение массива _items\n    _sliderItems.forEach(function (item, index) {\n      _items.push({ item: item, position: index, transform: 0 });\n    });\n\n    var position = {\n      getMin: 0,\n      getMax: _items.length - 1,\n    }\n\n    var _transformItem = function (direction) {\n      if (direction === 'right') {\n        if ((_positionLeftItem + _wrapperWidth / _itemWidth - 1) >= position.getMax) {\n          return;\n        }\n        if (!_sliderControlLeft.classList.contains('slider__control_show')) {\n          _sliderControlLeft.classList.add('slider__control_show');\n        }\n        if (_sliderControlRight.classList.contains('slider__control_show') && (_positionLeftItem + _wrapperWidth / _itemWidth) >= position.getMax) {\n          _sliderControlRight.classList.remove('slider__control_show');\n        }\n        _positionLeftItem++;\n        _transform -= _step;\n      }\n      if (direction === 'left') {\n        if (_positionLeftItem <= position.getMin) {\n          return;\n        }\n        if (!_sliderControlRight.classList.contains('slider__control_show')) {\n          _sliderControlRight.classList.add('slider__control_show');\n        }\n        if (_sliderControlLeft.classList.contains('slider__control_show') && _positionLeftItem - 1 <= position.getMin) {\n          _sliderControlLeft.classList.remove('slider__control_show');\n        }\n        _positionLeftItem--;\n        _transform += _step;\n      }\n      _sliderWrapper.style.transform = 'translateX(' + _transform + '%)';\n    }\n\n    // обработчик события click для кнопок \"назад\" и \"вперед\"\n    var _controlClick = function (e) {\n      if (e.target.classList.contains('slider__control')) {\n        e.preventDefault();\n        var direction = e.target.classList.contains('slider__control_right') ? 'right' : 'left';\n        _transformItem(direction);\n      }\n    };\n\n    var _setUpListeners = function () {\n      // добавление к кнопкам \"назад\" и \"вперед\" обработчика _controlClick для события click\n      _sliderControls.forEach(function (item) {\n        item.addEventListener('click', _controlClick);\n      });\n    }\n\n    // инициализация\n    _setUpListeners();\n\n    return {\n      right: function () { // метод right\n        _transformItem('right');\n      },\n      left: function () { // метод left\n        _transformItem('left');\n      }\n    }\n\n  }\n}());\n    var slider = multiItemSlider('.slider')\n\n\n//# sourceURL=webpack:///./src/scripts/slider.js?");

/***/ }),

/***/ "./src/styles/adaptive.less":
/*!**********************************!*\
  !*** ./src/styles/adaptive.less ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!./adaptive.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/styles/adaptive.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/adaptive.less?");

/***/ }),

/***/ "./src/styles/responsive.less":
/*!************************************!*\
  !*** ./src/styles/responsive.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!./responsive.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/styles/responsive.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/responsive.less?");

/***/ }),

/***/ "./src/styles/style.less":
/*!*******************************!*\
  !*** ./src/styles/style.less ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/less-loader/dist/cjs.js!./style.less */ \"./node_modules/css-loader/index.js!./node_modules/less-loader/dist/cjs.js!./src/styles/style.less\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/styles/style.less?");

/***/ })

/******/ });