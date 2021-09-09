"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/statistic/getLocalSkuMidList";
exports.ids = ["pages/api/statistic/getLocalSkuMidList"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC8uL2xpYi9wcmlzbWEuanM/YzU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxubGV0IHByaXNtYVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hXG59XG5cbmV4cG9ydCBkZWZhdWx0IHByaXNtYSJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/statistic/getLocalSkuMidList.ts":
/*!***************************************************!*\
  !*** ./pages/api/statistic/getLocalSkuMidList.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils.server */ \"./utils.server.ts\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\n\n\n\n\nconst getDayArray = (startDate, endDate) => {\n  const startDateMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startDate).valueOf();\n  const endDateMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(endDate).valueOf();\n  const days = (endDateMs - startDateMs) / 60 / 60 / 1000 / 24 + 1;\n  const daysArray = []; // const LocalSkuMidProfitList = ctx.model.Fulin.LocalSkuMidProfitList;\n\n  const x_axis = [];\n\n  for (let i = 0; i < days; i++) {\n    if (i % 7 === 0) {\n      const pStartDateMs = startDateMs + i * 60 * 60 * 24 * 1000;\n      const pEndDateMs = pStartDateMs + 6 * 24 * 60 * 60 * 1000 > endDateMs ? endDateMs : pStartDateMs + 6 * 24 * 60 * 60 * 1000;\n      x_axis.push(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'));\n      daysArray.push({\n        date_str: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'),\n        // startDateMs: pStartDateMs,\n        // endDateMs: pEndDateMs,\n        start_date_str: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'),\n        end_date_str: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(pEndDateMs).format('YYYY-MM-DD')\n      });\n    }\n  }\n\n  return {\n    daysArray,\n    x_axis\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_server__WEBPACK_IMPORTED_MODULE_0__.default)().post(async (req, res) => {\n  console.log('sku');\n  const {\n    cid,\n    mid,\n    startDate,\n    endDate,\n    local_sku\n  } = req.body; // const profitLists  = await getProfitLists(req.body)\n\n  const {\n    daysArray,\n    x_axis\n  } = getDayArray(startDate, endDate);\n  let list = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__.default.local_sku_mid_lists.findMany();\n  res.send({\n    response: list || []\n  });\n  res.end();\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc3RhdGlzdGljL2dldExvY2FsU2t1TWlkTGlzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBR0E7QUFFQTs7QUFHQSxNQUFNRyxXQUFXLEdBQUcsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLEtBQXdCO0FBQzFDLFFBQU1DLFdBQVcsR0FBR0wsNENBQUssQ0FBQ0csU0FBRCxDQUFMLENBQWlCRyxPQUFqQixFQUFwQjtBQUNBLFFBQU1DLFNBQVMsR0FBR1AsNENBQUssQ0FBQ0ksT0FBRCxDQUFMLENBQWVFLE9BQWYsRUFBbEI7QUFDQSxRQUFNRSxJQUFJLEdBQUcsQ0FBQ0QsU0FBUyxHQUFHRixXQUFiLElBQTRCLEVBQTVCLEdBQWlDLEVBQWpDLEdBQXNDLElBQXRDLEdBQTZDLEVBQTdDLEdBQWtELENBQS9EO0FBQ0EsUUFBTUksU0FBUyxHQUFHLEVBQWxCLENBSjBDLENBSzFDOztBQUNBLFFBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0gsSUFBcEIsRUFBMEJHLENBQUMsRUFBM0IsRUFBK0I7QUFDN0IsUUFBSUEsQ0FBQyxHQUFHLENBQUosS0FBVSxDQUFkLEVBQWlCO0FBQ2YsWUFBTUMsWUFBWSxHQUFHUCxXQUFXLEdBQUdNLENBQUMsR0FBRyxFQUFKLEdBQVMsRUFBVCxHQUFjLEVBQWQsR0FBbUIsSUFBdEQ7QUFDQSxZQUFNRSxVQUFVLEdBQUlELFlBQVksR0FBRyxJQUFJLEVBQUosR0FBUyxFQUFULEdBQWMsRUFBZCxHQUFtQixJQUFuQyxHQUEyQ0wsU0FBM0MsR0FBdURBLFNBQXZELEdBQW9FSyxZQUFZLEdBQUcsSUFBSSxFQUFKLEdBQVMsRUFBVCxHQUFjLEVBQWQsR0FBbUIsSUFBekg7QUFDQUYsTUFBQUEsTUFBTSxDQUFDSSxJQUFQLENBQVlkLDRDQUFLLENBQUNLLFdBQVcsR0FBR00sQ0FBQyxHQUFHLEVBQUosR0FBUyxFQUFULEdBQWMsRUFBZCxHQUFtQixJQUFsQyxDQUFMLENBQTZDSSxNQUE3QyxDQUFvRCxZQUFwRCxDQUFaO0FBQ0FOLE1BQUFBLFNBQVMsQ0FBQ0ssSUFBVixDQUFlO0FBQ2JFLFFBQUFBLFFBQVEsRUFBRWhCLDRDQUFLLENBQUNLLFdBQVcsR0FBR00sQ0FBQyxHQUFHLEVBQUosR0FBUyxFQUFULEdBQWMsRUFBZCxHQUFtQixJQUFsQyxDQUFMLENBQTZDSSxNQUE3QyxDQUFvRCxZQUFwRCxDQURHO0FBRWI7QUFDQTtBQUNBRSxRQUFBQSxjQUFjLEVBQUVqQiw0Q0FBSyxDQUFDSyxXQUFXLEdBQUdNLENBQUMsR0FBRyxFQUFKLEdBQVMsRUFBVCxHQUFjLEVBQWQsR0FBbUIsSUFBbEMsQ0FBTCxDQUE2Q0ksTUFBN0MsQ0FBb0QsWUFBcEQsQ0FKSDtBQUtiRyxRQUFBQSxZQUFZLEVBQUVsQiw0Q0FBSyxDQUFDYSxVQUFELENBQUwsQ0FBa0JFLE1BQWxCLENBQXlCLFlBQXpCO0FBTEQsT0FBZjtBQVFEO0FBQ0Y7O0FBQ0QsU0FBTztBQUNMTixJQUFBQSxTQURLO0FBRUxDLElBQUFBO0FBRkssR0FBUDtBQUlELENBMUJEOztBQTRCQSxpRUFBZVgsc0RBQVUsR0FBR29CLElBQWIsQ0FBa0IsT0FBTUMsR0FBTixFQUFVQyxHQUFWLEtBQWtCO0FBQ2pEQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBRUEsUUFBTTtBQUFFQyxJQUFBQSxHQUFGO0FBQU1DLElBQUFBLEdBQU47QUFBVXRCLElBQUFBLFNBQVY7QUFBb0JDLElBQUFBLE9BQXBCO0FBQTRCc0IsSUFBQUE7QUFBNUIsTUFBMENOLEdBQUcsQ0FBQ08sSUFBcEQsQ0FIaUQsQ0FLakQ7O0FBQ0EsUUFBTTtBQUFDbEIsSUFBQUEsU0FBRDtBQUFXQyxJQUFBQTtBQUFYLE1BQXFCUixXQUFXLENBQUNDLFNBQUQsRUFBWUMsT0FBWixDQUF0QztBQUNBLE1BQUl3QixJQUFJLEdBQUcsTUFBTTNCLDZFQUFBLEVBQWpCO0FBQ0FvQixFQUFBQSxHQUFHLENBQUNVLElBQUosQ0FBUztBQUNQQyxJQUFBQSxRQUFRLEVBQUNKLElBQUksSUFBSTtBQURWLEdBQVQ7QUFHQVAsRUFBQUEsR0FBRyxDQUFDWSxHQUFKO0FBRUQsQ0FiYyxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC8uL3BhZ2VzL2FwaS9zdGF0aXN0aWMvZ2V0TG9jYWxTa3VNaWRMaXN0LnRzP2QwYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFwaUhhbmRsZXIgZnJvbSBcIi4uLy4uLy4uL3V0aWxzLnNlcnZlclwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgZ2V0UHJvZml0TGlzdHMgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2dldFByb2ZpdExpc3RzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnO1xuaW1wb3J0IG5jIGZyb20gJ25leHQtY29ubmVjdCdcbmltcG9ydCBwcmlzbWEgZnJvbSAnLi4vLi4vLi4vbGliL3ByaXNtYSdcblxuXG5jb25zdCBnZXREYXlBcnJheSA9IChzdGFydERhdGUsIGVuZERhdGUpID0+IHtcbiAgY29uc3Qgc3RhcnREYXRlTXMgPSBkYXlqcyhzdGFydERhdGUpLnZhbHVlT2YoKTtcbiAgY29uc3QgZW5kRGF0ZU1zID0gZGF5anMoZW5kRGF0ZSkudmFsdWVPZigpO1xuICBjb25zdCBkYXlzID0gKGVuZERhdGVNcyAtIHN0YXJ0RGF0ZU1zKSAvIDYwIC8gNjAgLyAxMDAwIC8gMjQgKyAxO1xuICBjb25zdCBkYXlzQXJyYXkgPSBbXTtcbiAgLy8gY29uc3QgTG9jYWxTa3VNaWRQcm9maXRMaXN0ID0gY3R4Lm1vZGVsLkZ1bGluLkxvY2FsU2t1TWlkUHJvZml0TGlzdDtcbiAgY29uc3QgeF9heGlzID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5czsgaSsrKSB7XG4gICAgaWYgKGkgJSA3ID09PSAwKSB7XG4gICAgICBjb25zdCBwU3RhcnREYXRlTXMgPSBzdGFydERhdGVNcyArIGkgKiA2MCAqIDYwICogMjQgKiAxMDAwO1xuICAgICAgY29uc3QgcEVuZERhdGVNcyA9IChwU3RhcnREYXRlTXMgKyA2ICogMjQgKiA2MCAqIDYwICogMTAwMCkgPiBlbmREYXRlTXMgPyBlbmREYXRlTXMgOiAocFN0YXJ0RGF0ZU1zICsgNiAqIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgICAgeF9heGlzLnB1c2goZGF5anMoc3RhcnREYXRlTXMgKyBpICogNjAgKiA2MCAqIDI0ICogMTAwMCkuZm9ybWF0KCdZWVlZLU1NLUREJykpO1xuICAgICAgZGF5c0FycmF5LnB1c2goe1xuICAgICAgICBkYXRlX3N0cjogZGF5anMoc3RhcnREYXRlTXMgKyBpICogNjAgKiA2MCAqIDI0ICogMTAwMCkuZm9ybWF0KCdZWVlZLU1NLUREJyksXG4gICAgICAgIC8vIHN0YXJ0RGF0ZU1zOiBwU3RhcnREYXRlTXMsXG4gICAgICAgIC8vIGVuZERhdGVNczogcEVuZERhdGVNcyxcbiAgICAgICAgc3RhcnRfZGF0ZV9zdHI6IGRheWpzKHN0YXJ0RGF0ZU1zICsgaSAqIDYwICogNjAgKiAyNCAqIDEwMDApLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuICAgICAgICBlbmRfZGF0ZV9zdHI6IGRheWpzKHBFbmREYXRlTXMpLmZvcm1hdCgnWVlZWS1NTS1ERCcpLFxuXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBkYXlzQXJyYXksXG4gICAgeF9heGlzLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhcGlIYW5kbGVyKCkucG9zdChhc3luYyhyZXEscmVzKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdza3UnKVxuXG4gIGNvbnN0IHsgY2lkLG1pZCxzdGFydERhdGUsZW5kRGF0ZSxsb2NhbF9za3UgfSA9IHJlcS5ib2R5O1xuXG4gIC8vIGNvbnN0IHByb2ZpdExpc3RzICA9IGF3YWl0IGdldFByb2ZpdExpc3RzKHJlcS5ib2R5KVxuICBjb25zdCB7ZGF5c0FycmF5LHhfYXhpc30gPSBnZXREYXlBcnJheShzdGFydERhdGUsIGVuZERhdGUpXG4gIGxldCBsaXN0ID0gYXdhaXQgcHJpc21hLmxvY2FsX3NrdV9taWRfbGlzdHMuZmluZE1hbnkoKTtcbiAgcmVzLnNlbmQoe1xuICAgIHJlc3BvbnNlOmxpc3QgfHwgW11cbiAgfSlcbiAgcmVzLmVuZCgpXG5cbn0pOyJdLCJuYW1lcyI6WyJhcGlIYW5kbGVyIiwiZGF5anMiLCJwcmlzbWEiLCJnZXREYXlBcnJheSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzdGFydERhdGVNcyIsInZhbHVlT2YiLCJlbmREYXRlTXMiLCJkYXlzIiwiZGF5c0FycmF5IiwieF9heGlzIiwiaSIsInBTdGFydERhdGVNcyIsInBFbmREYXRlTXMiLCJwdXNoIiwiZm9ybWF0IiwiZGF0ZV9zdHIiLCJzdGFydF9kYXRlX3N0ciIsImVuZF9kYXRlX3N0ciIsInBvc3QiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiY2lkIiwibWlkIiwibG9jYWxfc2t1IiwiYm9keSIsImxpc3QiLCJsb2NhbF9za3VfbWlkX2xpc3RzIiwiZmluZE1hbnkiLCJzZW5kIiwicmVzcG9uc2UiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/statistic/getLocalSkuMidList.ts\n");

/***/ }),

/***/ "./utils.server.ts":
/*!*************************!*\
  !*** ./utils.server.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hapi/boom */ \"@hapi/boom\");\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hapi_boom__WEBPACK_IMPORTED_MODULE_1__);\n// import nc from 'next-connect'\n// import { NextApiRequest, NextApiResponse } from \"next\";\n// import prisma from './lib/prisma'\n// function authMiddleware(req, res, next) {\n//   // res.status(403)\n//   // res.send('please sign in first')\n//   next()\n// }\n// // 用 `nc()` 创建一个 api handler\n// const apiHandler = nc<NextApiRequest, NextApiResponse>()\n//   // .use(authMiddleware)\n//   // // .get((req, res) => {\n//   // //   // console.log(37,req.body)\n//   // //   res.send('hello')\n//   // // }).post((req,res) => {\n//   // //   res.send('hello')\n//   // // });\n// export default apiHandler\n\n\n\nconst apiHandler = () => next_connect__WEBPACK_IMPORTED_MODULE_0___default()({\n  onError(err, req, res) {\n    if (_hapi_boom__WEBPACK_IMPORTED_MODULE_1__.isBoom(err)) {\n      console.log(err);\n      res.status(err.output.payload.statusCode);\n      res.json({\n        error: err.output.payload.error,\n        message: err.output.payload.message\n      });\n    } else {\n      res.status(500);\n      res.json({\n        message: \"Unexpected error\"\n      });\n      console.error(err); // unexcepted error\n    }\n  }\n\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy5zZXJ2ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBOztBQUVBLE1BQU1FLFVBQVUsR0FBRyxNQUNqQkYsbURBQUUsQ0FBa0M7QUFDbENHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLEdBQVgsRUFBZ0I7QUFDckIsUUFBSUwsOENBQUEsQ0FBWUcsR0FBWixDQUFKLEVBQXNCO0FBQ3BCSSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWjtBQUNBRSxNQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBV04sR0FBRyxDQUFDTyxNQUFKLENBQVdDLE9BQVgsQ0FBbUJDLFVBQTlCO0FBQ0FQLE1BQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTO0FBQ1BDLFFBQUFBLEtBQUssRUFBRVgsR0FBRyxDQUFDTyxNQUFKLENBQVdDLE9BQVgsQ0FBbUJHLEtBRG5CO0FBRVBDLFFBQUFBLE9BQU8sRUFBRVosR0FBRyxDQUFDTyxNQUFKLENBQVdDLE9BQVgsQ0FBbUJJO0FBRnJCLE9BQVQ7QUFJRCxLQVBELE1BT087QUFDTFYsTUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWDtBQUNBSixNQUFBQSxHQUFHLENBQUNRLElBQUosQ0FBUztBQUNQRSxRQUFBQSxPQUFPLEVBQUU7QUFERixPQUFUO0FBR0FSLE1BQUFBLE9BQU8sQ0FBQ08sS0FBUixDQUFjWCxHQUFkLEVBTEssQ0FNTDtBQUNEO0FBQ0Y7O0FBakJpQyxDQUFsQyxDQURKOztBQXFCQSxpRUFBZUYsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQvLi91dGlscy5zZXJ2ZXIudHM/ZTAzZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgbmMgZnJvbSAnbmV4dC1jb25uZWN0J1xuLy8gaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbi8vIGltcG9ydCBwcmlzbWEgZnJvbSAnLi9saWIvcHJpc21hJ1xuXG4vLyBmdW5jdGlvbiBhdXRoTWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCkge1xuLy8gICAvLyByZXMuc3RhdHVzKDQwMylcbi8vICAgLy8gcmVzLnNlbmQoJ3BsZWFzZSBzaWduIGluIGZpcnN0Jylcbi8vICAgbmV4dCgpXG4vLyB9XG5cblxuLy8gLy8g55SoIGBuYygpYCDliJvlu7rkuIDkuKogYXBpIGhhbmRsZXJcbi8vIGNvbnN0IGFwaUhhbmRsZXIgPSBuYzxOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlPigpXG4vLyAgIC8vIC51c2UoYXV0aE1pZGRsZXdhcmUpXG4vLyAgIC8vIC8vIC5nZXQoKHJlcSwgcmVzKSA9PiB7XG4vLyAgIC8vIC8vICAgLy8gY29uc29sZS5sb2coMzcscmVxLmJvZHkpXG4vLyAgIC8vIC8vICAgcmVzLnNlbmQoJ2hlbGxvJylcbi8vICAgLy8gLy8gfSkucG9zdCgocmVxLHJlcykgPT4ge1xuLy8gICAvLyAvLyAgIHJlcy5zZW5kKCdoZWxsbycpXG4vLyAgIC8vIC8vIH0pO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBhcGlIYW5kbGVyXG5cblxuaW1wb3J0IG5jIGZyb20gXCJuZXh0LWNvbm5lY3RcIjtcbmltcG9ydCAqIGFzIEJvb20gZnJvbSBcIkBoYXBpL2Jvb21cIjtcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuY29uc3QgYXBpSGFuZGxlciA9ICgpID0+XG4gIG5jPE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2U+KHtcbiAgICBvbkVycm9yKGVyciwgcmVxLCByZXMpIHtcbiAgICAgIGlmIChCb29tLmlzQm9vbShlcnIpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIHJlcy5zdGF0dXMoZXJyLm91dHB1dC5wYXlsb2FkLnN0YXR1c0NvZGUpO1xuICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgZXJyb3I6IGVyci5vdXRwdXQucGF5bG9hZC5lcnJvcixcbiAgICAgICAgICBtZXNzYWdlOiBlcnIub3V0cHV0LnBheWxvYWQubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDUwMCk7XG4gICAgICAgIHJlcy5qc29uKHtcbiAgICAgICAgICBtZXNzYWdlOiBcIlVuZXhwZWN0ZWQgZXJyb3JcIixcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgLy8gdW5leGNlcHRlZCBlcnJvclxuICAgICAgfVxuICAgIH0sXG4gIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBhcGlIYW5kbGVyIl0sIm5hbWVzIjpbIm5jIiwiQm9vbSIsImFwaUhhbmRsZXIiLCJvbkVycm9yIiwiZXJyIiwicmVxIiwicmVzIiwiaXNCb29tIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsIm91dHB1dCIsInBheWxvYWQiLCJzdGF0dXNDb2RlIiwianNvbiIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils.server.ts\n");

/***/ }),

/***/ "@hapi/boom":
/*!*****************************!*\
  !*** external "@hapi/boom" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("@hapi/boom");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("next-connect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/statistic/getLocalSkuMidList.ts"));
module.exports = __webpack_exports__;

})();