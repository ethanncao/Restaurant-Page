/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-load.js":
/*!*****************************!*\
  !*** ./src/contact-load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactPage: () => (/* binding */ contactPage)\n/* harmony export */ });\nfunction contactPage() {\r\n  const content = document.getElementById('content');\r\n\r\n  const contactUs = document.createElement('div');\r\n  contactUs.id = 'contact-content';\r\n  contactUs.innerHTML = \"Contact Us\";\r\n  content.appendChild(contactUs);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhY3QtbG9hZC5qcz80YmQwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjb250YWN0UGFnZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuXHJcbiAgY29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29udGFjdFVzLmlkID0gJ2NvbnRhY3QtY29udGVudCc7XHJcbiAgY29udGFjdFVzLmlubmVySFRNTCA9IFwiQ29udGFjdCBVc1wiO1xyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdFVzKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contact-load.js\n");

/***/ }),

/***/ "./src/home-load.js":
/*!**************************!*\
  !*** ./src/home-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homePage: () => (/* binding */ homePage)\n/* harmony export */ });\nconst description = \"A cozy, modern bistro specializing in wood-fired dishes and fresh, herb-infused flavors. Ember & Thyme offers a warm ambiance with an open kitchen concept, where guests can watch chefs craft rustic yet refined meals. The menu highlights seasonal ingredients, with a focus on flame-grilled meats, roasted vegetables, and house-made artisanal bread. Perfect for date nights or casual gatherings, the restaurant pairs its dishes with a curated selection of wines and handcrafted cocktails.\"\r\n\r\nfunction homePage() {\r\n  const content = document.getElementById('content');\r\n\r\n  //appending a header to content\r\n  const header = document.createElement('div');\r\n  header.id = 'header';\r\n  content.appendChild(header);\r\n\r\n  //appending a title to the header\r\n  const restaurantName = document.createElement('div');\r\n  restaurantName.id = 'title';\r\n  restaurantName.innerHTML = \"Ember & Thyme\";\r\n  header.appendChild(restaurantName);\r\n\r\n  //appending a desc to the header\r\n  const desc = document.createElement('div');\r\n  desc.id = 'desc';\r\n  desc.innerHTML = description;\r\n  header.appendChild(desc);\r\n\r\n  //appending hours to content\r\n  const hours = document.createElement('div');\r\n  hours.id = 'hours';\r\n  content.appendChild(hours);\r\n\r\n  //appending hours title and info to hours\r\n  const hoursTitle = document.createElement('div');\r\n  const hoursOne = document.createElement('div');\r\n  const hoursTwo = document.createElement('div');\r\n  const hoursThree = document.createElement('div');\r\n  hoursTitle.id = 'title';\r\n\r\n  hoursTitle.innerHTML = \"Hours\";\r\n  hoursOne.innerHTML = \"Monday - Thursday: 11:00 AM - 9:00 PM\";\r\n  hoursTwo.innerHTML = \"Friday - Saturday: 11:00AM - 10:30 PM\";\r\n  hoursThree.innerHTML = \"Sunday: 10:00 AM - 8:00 PM (Brunch served from 10:00AM - 2:00 PM)\";\r\n\r\n  hours.appendChild(hoursTitle);\r\n  hours.appendChild(hoursOne);\r\n  hours.appendChild(hoursTwo);\r\n  hours.appendChild(hoursThree);\r\n\r\n  //appending an address holder to content\r\n  const address = document.createElement('div');\r\n  address.id = 'address';\r\n  content.appendChild(address);\r\n\r\n  //adding a title to address\r\n  const addressTitle = document.createElement('div');\r\n  addressTitle.id = 'title';\r\n  addressTitle.innerHTML = \"Address\";\r\n  address.appendChild(addressTitle);\r\n\r\n  //adding the address and append to address\r\n  const addy = document.createElement('div');\r\n  addy.innerHTML = \"2475 Willowcrest Ave, Portland, OR 97205\";\r\n  address.appendChild(addy);\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9tZS1sb2FkLmpzPzUyZmEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZGVzY3JpcHRpb24gPSBcIkEgY296eSwgbW9kZXJuIGJpc3RybyBzcGVjaWFsaXppbmcgaW4gd29vZC1maXJlZCBkaXNoZXMgYW5kIGZyZXNoLCBoZXJiLWluZnVzZWQgZmxhdm9ycy4gRW1iZXIgJiBUaHltZSBvZmZlcnMgYSB3YXJtIGFtYmlhbmNlIHdpdGggYW4gb3BlbiBraXRjaGVuIGNvbmNlcHQsIHdoZXJlIGd1ZXN0cyBjYW4gd2F0Y2ggY2hlZnMgY3JhZnQgcnVzdGljIHlldCByZWZpbmVkIG1lYWxzLiBUaGUgbWVudSBoaWdobGlnaHRzIHNlYXNvbmFsIGluZ3JlZGllbnRzLCB3aXRoIGEgZm9jdXMgb24gZmxhbWUtZ3JpbGxlZCBtZWF0cywgcm9hc3RlZCB2ZWdldGFibGVzLCBhbmQgaG91c2UtbWFkZSBhcnRpc2FuYWwgYnJlYWQuIFBlcmZlY3QgZm9yIGRhdGUgbmlnaHRzIG9yIGNhc3VhbCBnYXRoZXJpbmdzLCB0aGUgcmVzdGF1cmFudCBwYWlycyBpdHMgZGlzaGVzIHdpdGggYSBjdXJhdGVkIHNlbGVjdGlvbiBvZiB3aW5lcyBhbmQgaGFuZGNyYWZ0ZWQgY29ja3RhaWxzLlwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaG9tZVBhZ2UoKSB7XHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcblxyXG4gIC8vYXBwZW5kaW5nIGEgaGVhZGVyIHRvIGNvbnRlbnRcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBoZWFkZXIuaWQgPSAnaGVhZGVyJztcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gIC8vYXBwZW5kaW5nIGEgdGl0bGUgdG8gdGhlIGhlYWRlclxyXG4gIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgcmVzdGF1cmFudE5hbWUuaWQgPSAndGl0bGUnO1xyXG4gIHJlc3RhdXJhbnROYW1lLmlubmVySFRNTCA9IFwiRW1iZXIgJiBUaHltZVwiO1xyXG4gIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XHJcblxyXG4gIC8vYXBwZW5kaW5nIGEgZGVzYyB0byB0aGUgaGVhZGVyXHJcbiAgY29uc3QgZGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGRlc2MuaWQgPSAnZGVzYyc7XHJcbiAgZGVzYy5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGVzYyk7XHJcblxyXG4gIC8vYXBwZW5kaW5nIGhvdXJzIHRvIGNvbnRlbnRcclxuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGhvdXJzLmlkID0gJ2hvdXJzJztcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvdXJzKTtcclxuXHJcbiAgLy9hcHBlbmRpbmcgaG91cnMgdGl0bGUgYW5kIGluZm8gdG8gaG91cnNcclxuICBjb25zdCBob3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgaG91cnNPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBob3Vyc1R3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGhvdXJzVGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBob3Vyc1RpdGxlLmlkID0gJ3RpdGxlJztcclxuXHJcbiAgaG91cnNUaXRsZS5pbm5lckhUTUwgPSBcIkhvdXJzXCI7XHJcbiAgaG91cnNPbmUuaW5uZXJIVE1MID0gXCJNb25kYXkgLSBUaHVyc2RheTogMTE6MDAgQU0gLSA5OjAwIFBNXCI7XHJcbiAgaG91cnNUd28uaW5uZXJIVE1MID0gXCJGcmlkYXkgLSBTYXR1cmRheTogMTE6MDBBTSAtIDEwOjMwIFBNXCI7XHJcbiAgaG91cnNUaHJlZS5pbm5lckhUTUwgPSBcIlN1bmRheTogMTA6MDAgQU0gLSA4OjAwIFBNIChCcnVuY2ggc2VydmVkIGZyb20gMTA6MDBBTSAtIDI6MDAgUE0pXCI7XHJcblxyXG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzVGl0bGUpO1xyXG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzT25lKTtcclxuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1R3byk7XHJcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNUaHJlZSk7XHJcblxyXG4gIC8vYXBwZW5kaW5nIGFuIGFkZHJlc3MgaG9sZGVyIHRvIGNvbnRlbnRcclxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkcmVzcy5pZCA9ICdhZGRyZXNzJztcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xyXG5cclxuICAvL2FkZGluZyBhIHRpdGxlIHRvIGFkZHJlc3NcclxuICBjb25zdCBhZGRyZXNzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGRyZXNzVGl0bGUuaWQgPSAndGl0bGUnO1xyXG4gIGFkZHJlc3NUaXRsZS5pbm5lckhUTUwgPSBcIkFkZHJlc3NcIjtcclxuICBhZGRyZXNzLmFwcGVuZENoaWxkKGFkZHJlc3NUaXRsZSk7XHJcblxyXG4gIC8vYWRkaW5nIHRoZSBhZGRyZXNzIGFuZCBhcHBlbmQgdG8gYWRkcmVzc1xyXG4gIGNvbnN0IGFkZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBhZGR5LmlubmVySFRNTCA9IFwiMjQ3NSBXaWxsb3djcmVzdCBBdmUsIFBvcnRsYW5kLCBPUiA5NzIwNVwiO1xyXG4gIGFkZHJlc3MuYXBwZW5kQ2hpbGQoYWRkeSk7XHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home-load.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-load.js */ \"./src/home-load.js\");\n/* harmony import */ var _menu_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-load.js */ \"./src/menu-load.js\");\n/* harmony import */ var _contact_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-load.js */ \"./src/contact-load.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_home_load_js__WEBPACK_IMPORTED_MODULE_0__.homePage)();\r\n\r\nconst content = document.getElementById('content');\r\nconst homeBtn = document.querySelector(\".home\");\r\nconst menuBtn = document.querySelector(\".menu\");\r\nconst contactBtn = document.querySelector(\".contact\");\r\n\r\nhomeBtn.addEventListener(\"click\", () => {\r\n  //emptying out the content\r\n  content.innerHTML = \"\";\r\n  //then load the home page\r\n  (0,_home_load_js__WEBPACK_IMPORTED_MODULE_0__.homePage)();\r\n})\r\n\r\nmenuBtn.addEventListener(\"click\", () => {\r\n  //emptying out the content\r\n  content.innerHTML = \"\";\r\n  (0,_menu_load_js__WEBPACK_IMPORTED_MODULE_1__.menuPage)();\r\n})\r\n\r\ncontactBtn.addEventListener(\"click\", () => {\r\n  content.innerHTML = \"\";\r\n  (0,_contact_load_js__WEBPACK_IMPORTED_MODULE_2__.contactPage)();\r\n})//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEwQztBQUNBO0FBQ007QUFDaEQ7QUFDQTtBQUNBLHVEQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHVEQUFRO0FBQ1YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSx1REFBUTtBQUNWLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQUFFLDZEQUFXO0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZS1sb2FkLmpzXCI7XHJcbmltcG9ydCB7IG1lbnVQYWdlIH0gZnJvbSBcIi4vbWVudS1sb2FkLmpzXCI7XHJcbmltcG9ydCB7IGNvbnRhY3RQYWdlIH0gZnJvbSBcIi4vY29udGFjdC1sb2FkLmpzXCI7XHJcblxyXG5cclxuaG9tZVBhZ2UoKTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tZW51XCIpO1xyXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWN0XCIpO1xyXG5cclxuaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIC8vZW1wdHlpbmcgb3V0IHRoZSBjb250ZW50XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIC8vdGhlbiBsb2FkIHRoZSBob21lIHBhZ2VcclxuICBob21lUGFnZSgpO1xyXG59KVxyXG5cclxubWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIC8vZW1wdHlpbmcgb3V0IHRoZSBjb250ZW50XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIG1lbnVQYWdlKCk7XHJcbn0pXHJcblxyXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGNvbnRhY3RQYWdlKCk7XHJcbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu-load.js":
/*!**************************!*\
  !*** ./src/menu-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPage: () => (/* binding */ menuPage)\n/* harmony export */ });\nfunction menuPage() {\r\n  const content = document.getElementById('content');\r\n\r\n  //creating an appetizer holder to append to content\r\n  const appetizers = document.createElement('div');\r\n  appetizers.id = 'appetizers-content';\r\n  appetizers.innerHTML = \"Appetizers\";\r\n  content.appendChild(appetizers);\r\n\r\n  //creating main dishes holder to append to content\r\n  const mainDish = document.createElement('div');\r\n  mainDish.id = 'main-dish-content';\r\n  mainDish.innerHTML = \"Main Dishes\";\r\n  content.appendChild(mainDish);\r\n\r\n  //creating beverages\r\n  const bev = document.createElement('div');\r\n  bev.id = 'bev-content';\r\n  bev.innerHTML = \"Beverages\";\r\n  content.appendChild(bev);\r\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS1sb2FkLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWVudS1sb2FkLmpzPzk5ODkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIG1lbnVQYWdlKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuICAvL2NyZWF0aW5nIGFuIGFwcGV0aXplciBob2xkZXIgdG8gYXBwZW5kIHRvIGNvbnRlbnRcclxuICBjb25zdCBhcHBldGl6ZXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYXBwZXRpemVycy5pZCA9ICdhcHBldGl6ZXJzLWNvbnRlbnQnO1xyXG4gIGFwcGV0aXplcnMuaW5uZXJIVE1MID0gXCJBcHBldGl6ZXJzXCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChhcHBldGl6ZXJzKTtcclxuXHJcbiAgLy9jcmVhdGluZyBtYWluIGRpc2hlcyBob2xkZXIgdG8gYXBwZW5kIHRvIGNvbnRlbnRcclxuICBjb25zdCBtYWluRGlzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIG1haW5EaXNoLmlkID0gJ21haW4tZGlzaC1jb250ZW50JztcclxuICBtYWluRGlzaC5pbm5lckhUTUwgPSBcIk1haW4gRGlzaGVzXCI7XHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChtYWluRGlzaCk7XHJcblxyXG4gIC8vY3JlYXRpbmcgYmV2ZXJhZ2VzXHJcbiAgY29uc3QgYmV2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYmV2LmlkID0gJ2Jldi1jb250ZW50JztcclxuICBiZXYuaW5uZXJIVE1MID0gXCJCZXZlcmFnZXNcIjtcclxuICBjb250ZW50LmFwcGVuZENoaWxkKGJldik7XHJcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu-load.js\n");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;