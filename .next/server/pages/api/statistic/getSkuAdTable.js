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
exports.id = "pages/api/statistic/getSkuAdTable";
exports.ids = ["pages/api/statistic/getSkuAdTable"];
exports.modules = {

/***/ "./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUNELGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC8uL2xpYi9wcmlzbWEuanM/YzU2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCdcblxubGV0IHByaXNtYVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbn0gZWxzZSB7XG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xuICAgIGdsb2JhbC5wcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hXG59XG5leHBvcnQgZGVmYXVsdCBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.js\n");

/***/ }),

/***/ "./pages/api/statistic/getSkuAdTable.ts":
/*!**********************************************!*\
  !*** ./pages/api/statistic/getSkuAdTable.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils.server */ \"./utils.server.ts\");\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"./lib/prisma.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_server__WEBPACK_IMPORTED_MODULE_0__.default)().post(async (req, res) => {\n  console.log('sku-ad');\n  let shopList = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.default.local_shop_lists.findMany();\n  let Sku = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.default.local_sku_mid_lists.findMany({\n    include: {\n      local_sku_mid_through_sb_tables: {\n        include: {\n          local_sku_mid_sb_groups: true\n        }\n      },\n      local_sku_mid_sp_groups: true\n    }\n  });\n  const pSku = [];\n  console.log();\n  Sku.map(item => {\n    const pSbGroups = [];\n    const pSpGroups = [];\n    let local_sku_mid_sb_groups = [];\n    item.local_sku_mid_through_sb_tables.map(element => {\n      local_sku_mid_sb_groups.push(element.local_sku_mid_sb_groups);\n    });\n    local_sku_mid_sb_groups.map(element => {\n      const shopName = (shopList.filter(shop => {\n        return shop.sid == element.sid;\n      })[0] || {}).name;\n      pSbGroups.push(_objectSpread(_objectSpread({}, element), {}, {\n        shopName\n      }));\n    });\n    item.local_sku_mid_sp_groups.map(element => {\n      const shopName = (shopList.filter(shop => {\n        return shop.sid == element.sid;\n      })[0] || {}).name;\n      pSpGroups.push(_objectSpread(_objectSpread({}, element), {}, {\n        shopName\n      }));\n    });\n\n    const pItem = _objectSpread(_objectSpread({}, item), {}, {\n      sb_groups: pSbGroups,\n      sp_groups: pSpGroups\n    });\n\n    delete pItem.local_sku_mid_sb_groups;\n    delete pItem.local_sku_mid_sp_groups;\n    delete pItem.local_sku_mid_through_sb_tables;\n    pSku.push(pItem);\n    return pItem;\n  });\n  res.send({\n    response: pSku\n  });\n  res.end();\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvc3RhdGlzdGljL2dldFNrdUFkVGFibGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFLQTtBQUdBLGlFQUFlQSxzREFBVSxHQUFHRSxJQUFiLENBQWtCLE9BQU1DLEdBQU4sRUFBVUMsR0FBVixLQUFrQjtBQUNqREMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUdBLE1BQUlDLFFBQVEsR0FBRyxNQUFNTiwwRUFBQSxFQUFyQjtBQUNBLE1BQUlTLEdBQUcsR0FBRyxNQUFNVCw2RUFBQSxDQUFvQztBQUNsRFcsSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLCtCQUErQixFQUFDO0FBQzlCRCxRQUFBQSxPQUFPLEVBQUM7QUFDTkUsVUFBQUEsdUJBQXVCLEVBQUM7QUFEbEI7QUFEc0IsT0FEekI7QUFNUEMsTUFBQUEsdUJBQXVCLEVBQUU7QUFObEI7QUFEeUMsR0FBcEMsQ0FBaEI7QUFZQSxRQUFNQyxJQUFJLEdBQUcsRUFBYjtBQUNBWCxFQUFBQSxPQUFPLENBQUNDLEdBQVI7QUFDQUksRUFBQUEsR0FBRyxDQUFDTyxHQUFKLENBQVFDLElBQUksSUFBSTtBQUNkLFVBQU1DLFNBQVMsR0FBRyxFQUFsQjtBQUNBLFVBQU1DLFNBQVMsR0FBRyxFQUFsQjtBQUNBLFFBQUlOLHVCQUF1QixHQUFJLEVBQS9CO0FBRUFJLElBQUFBLElBQUksQ0FBQ0wsK0JBQUwsQ0FBcUNJLEdBQXJDLENBQTBDSSxPQUFELElBQVc7QUFDbERQLE1BQUFBLHVCQUF1QixDQUFDUSxJQUF4QixDQUE2QkQsT0FBTyxDQUFDUCx1QkFBckM7QUFDRCxLQUZEO0FBSUFBLElBQUFBLHVCQUF1QixDQUFDRyxHQUF4QixDQUE0QkksT0FBTyxJQUFJO0FBQ3JDLFlBQU1FLFFBQVEsR0FBRyxDQUFDaEIsUUFBUSxDQUFDaUIsTUFBVCxDQUFnQkMsSUFBSSxJQUFJO0FBQ3hDLGVBQU9BLElBQUksQ0FBQ0MsR0FBTCxJQUFZTCxPQUFPLENBQUNLLEdBQTNCO0FBQ0QsT0FGaUIsRUFFZixDQUZlLEtBRVQsRUFGUSxFQUVKQyxJQUZiO0FBR0FSLE1BQUFBLFNBQVMsQ0FBQ0csSUFBVixpQ0FDS0QsT0FETDtBQUVFRSxRQUFBQTtBQUZGO0FBSUQsS0FSRDtBQVVBTCxJQUFBQSxJQUFJLENBQUNILHVCQUFMLENBQTZCRSxHQUE3QixDQUFpQ0ksT0FBTyxJQUFJO0FBQzFDLFlBQU1FLFFBQVEsR0FBRyxDQUFDaEIsUUFBUSxDQUFDaUIsTUFBVCxDQUFnQkMsSUFBSSxJQUFJO0FBQ3hDLGVBQU9BLElBQUksQ0FBQ0MsR0FBTCxJQUFZTCxPQUFPLENBQUNLLEdBQTNCO0FBQ0QsT0FGaUIsRUFFZixDQUZlLEtBRVQsRUFGUSxFQUVKQyxJQUZiO0FBR0FQLE1BQUFBLFNBQVMsQ0FBQ0UsSUFBVixpQ0FDS0QsT0FETDtBQUVFRSxRQUFBQTtBQUZGO0FBSUQsS0FSRDs7QUFVQSxVQUFNSyxLQUFLLG1DQUFRVixJQUFSO0FBQWNXLE1BQUFBLFNBQVMsRUFBRVYsU0FBekI7QUFBb0NXLE1BQUFBLFNBQVMsRUFBRVY7QUFBL0MsTUFBWDs7QUFDQSxXQUFPUSxLQUFLLENBQUNkLHVCQUFiO0FBQ0EsV0FBT2MsS0FBSyxDQUFDYix1QkFBYjtBQUNBLFdBQU9hLEtBQUssQ0FBQ2YsK0JBQWI7QUFFQUcsSUFBQUEsSUFBSSxDQUFDTSxJQUFMLENBQVVNLEtBQVY7QUFDQSxXQUFPQSxLQUFQO0FBQ0QsR0FwQ0Q7QUF1Q0F4QixFQUFBQSxHQUFHLENBQUMyQixJQUFKLENBQVM7QUFDUEMsSUFBQUEsUUFBUSxFQUFDaEI7QUFERixHQUFUO0FBR0FaLEVBQUFBLEdBQUcsQ0FBQzZCLEdBQUo7QUFFRCxDQS9EYyxDQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbmV4dC8uL3BhZ2VzL2FwaS9zdGF0aXN0aWMvZ2V0U2t1QWRUYWJsZS50cz8zYzc1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhcGlIYW5kbGVyIGZyb20gXCIuLi8uLi8uLi91dGlscy5zZXJ2ZXJcIjtcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IGdldFByb2ZpdExpc3RzIGZyb20gXCIuLi8uLi8uLi91dGlscy9nZXRQcm9maXRMaXN0c1wiO1xuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJztcbmltcG9ydCBuYyBmcm9tICduZXh0LWNvbm5lY3QnXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uLy4uL2xpYi9wcmlzbWEnXG5cblxuZXhwb3J0IGRlZmF1bHQgYXBpSGFuZGxlcigpLnBvc3QoYXN5bmMocmVxLHJlcykgPT4ge1xuICBjb25zb2xlLmxvZygnc2t1LWFkJylcblxuXG4gIGxldCBzaG9wTGlzdCA9IGF3YWl0IHByaXNtYS5sb2NhbF9zaG9wX2xpc3RzLmZpbmRNYW55KClcbiAgbGV0IFNrdSA9IGF3YWl0IHByaXNtYS5sb2NhbF9za3VfbWlkX2xpc3RzLmZpbmRNYW55KHtcbiAgICBpbmNsdWRlOiB7XG4gICAgICBsb2NhbF9za3VfbWlkX3Rocm91Z2hfc2JfdGFibGVzOntcbiAgICAgICAgaW5jbHVkZTp7XG4gICAgICAgICAgbG9jYWxfc2t1X21pZF9zYl9ncm91cHM6dHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgbG9jYWxfc2t1X21pZF9zcF9ncm91cHM6IHRydWUsXG4gICAgfSxcbiAgfSk7XG5cblxuICBjb25zdCBwU2t1ID0gW107XG4gIGNvbnNvbGUubG9nKClcbiAgU2t1Lm1hcChpdGVtID0+IHtcbiAgICBjb25zdCBwU2JHcm91cHMgPSBbXTtcbiAgICBjb25zdCBwU3BHcm91cHMgPSBbXTtcbiAgICBsZXQgbG9jYWxfc2t1X21pZF9zYl9ncm91cHMgPSAgW11cblxuICAgIGl0ZW0ubG9jYWxfc2t1X21pZF90aHJvdWdoX3NiX3RhYmxlcy5tYXAoKGVsZW1lbnQpPT57XG4gICAgICBsb2NhbF9za3VfbWlkX3NiX2dyb3Vwcy5wdXNoKGVsZW1lbnQubG9jYWxfc2t1X21pZF9zYl9ncm91cHMpXG4gICAgfSlcblxuICAgIGxvY2FsX3NrdV9taWRfc2JfZ3JvdXBzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHNob3BOYW1lID0gKHNob3BMaXN0LmZpbHRlcihzaG9wID0+IHtcbiAgICAgICAgcmV0dXJuIHNob3Auc2lkID09IGVsZW1lbnQuc2lkO1xuICAgICAgfSlbMF0gfHwge30pLm5hbWU7XG4gICAgICBwU2JHcm91cHMucHVzaCh7XG4gICAgICAgIC4uLmVsZW1lbnQsXG4gICAgICAgIHNob3BOYW1lLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpdGVtLmxvY2FsX3NrdV9taWRfc3BfZ3JvdXBzLm1hcChlbGVtZW50ID0+IHtcbiAgICAgIGNvbnN0IHNob3BOYW1lID0gKHNob3BMaXN0LmZpbHRlcihzaG9wID0+IHtcbiAgICAgICAgcmV0dXJuIHNob3Auc2lkID09IGVsZW1lbnQuc2lkO1xuICAgICAgfSlbMF0gfHwge30pLm5hbWU7XG4gICAgICBwU3BHcm91cHMucHVzaCh7XG4gICAgICAgIC4uLmVsZW1lbnQsXG4gICAgICAgIHNob3BOYW1lLFxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBwSXRlbSA9IHsgLi4uaXRlbSwgc2JfZ3JvdXBzOiBwU2JHcm91cHMsIHNwX2dyb3VwczogcFNwR3JvdXBzIH07XG4gICAgZGVsZXRlIHBJdGVtLmxvY2FsX3NrdV9taWRfc2JfZ3JvdXBzO1xuICAgIGRlbGV0ZSBwSXRlbS5sb2NhbF9za3VfbWlkX3NwX2dyb3VwcztcbiAgICBkZWxldGUgcEl0ZW0ubG9jYWxfc2t1X21pZF90aHJvdWdoX3NiX3RhYmxlc1xuXG4gICAgcFNrdS5wdXNoKHBJdGVtKTtcbiAgICByZXR1cm4gcEl0ZW07XG4gIH0pO1xuXG5cbiAgcmVzLnNlbmQoe1xuICAgIHJlc3BvbnNlOnBTa3VcbiAgfSlcbiAgcmVzLmVuZCgpXG5cbn0pOyJdLCJuYW1lcyI6WyJhcGlIYW5kbGVyIiwicHJpc21hIiwicG9zdCIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzaG9wTGlzdCIsImxvY2FsX3Nob3BfbGlzdHMiLCJmaW5kTWFueSIsIlNrdSIsImxvY2FsX3NrdV9taWRfbGlzdHMiLCJpbmNsdWRlIiwibG9jYWxfc2t1X21pZF90aHJvdWdoX3NiX3RhYmxlcyIsImxvY2FsX3NrdV9taWRfc2JfZ3JvdXBzIiwibG9jYWxfc2t1X21pZF9zcF9ncm91cHMiLCJwU2t1IiwibWFwIiwiaXRlbSIsInBTYkdyb3VwcyIsInBTcEdyb3VwcyIsImVsZW1lbnQiLCJwdXNoIiwic2hvcE5hbWUiLCJmaWx0ZXIiLCJzaG9wIiwic2lkIiwibmFtZSIsInBJdGVtIiwic2JfZ3JvdXBzIiwic3BfZ3JvdXBzIiwic2VuZCIsInJlc3BvbnNlIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/statistic/getSkuAdTable.ts\n");

/***/ }),

/***/ "./utils.server.ts":
/*!*************************!*\
  !*** ./utils.server.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-connect */ \"next-connect\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @hapi/boom */ \"@hapi/boom\");\n/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hapi_boom__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst apiHandler = () => next_connect__WEBPACK_IMPORTED_MODULE_0___default()({\n  onError(err, req, res) {\n    if (_hapi_boom__WEBPACK_IMPORTED_MODULE_1__.isBoom(err)) {\n      console.log(err);\n      res.status(err.output.payload.statusCode);\n      res.json({\n        error: err.output.payload.error,\n        message: err.output.payload.message\n      });\n    } else {\n      res.status(500);\n      res.json({\n        message: \"Unexpected error\"\n      });\n      console.error(err); // unexcepted error\n    }\n  }\n\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy5zZXJ2ZXIudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUlBLE1BQU1FLFVBQVUsR0FBRyxNQUNqQkYsbURBQUUsQ0FBa0M7QUFDbENHLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLEdBQVgsRUFBZ0I7QUFDckIsUUFBSUwsOENBQUEsQ0FBWUcsR0FBWixDQUFKLEVBQXNCO0FBQ3BCSSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWjtBQUNBRSxNQUFBQSxHQUFHLENBQUNJLE1BQUosQ0FBV04sR0FBRyxDQUFDTyxNQUFKLENBQVdDLE9BQVgsQ0FBbUJDLFVBQTlCO0FBQ0FQLE1BQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTO0FBQ1BDLFFBQUFBLEtBQUssRUFBRVgsR0FBRyxDQUFDTyxNQUFKLENBQVdDLE9BQVgsQ0FBbUJHLEtBRG5CO0FBRVBDLFFBQUFBLE9BQU8sRUFBRVosR0FBRyxDQUFDTyxNQUFKLENBQVdDLE9BQVgsQ0FBbUJJO0FBRnJCLE9BQVQ7QUFJRCxLQVBELE1BT087QUFDTFYsTUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWDtBQUNBSixNQUFBQSxHQUFHLENBQUNRLElBQUosQ0FBUztBQUNQRSxRQUFBQSxPQUFPLEVBQUU7QUFERixPQUFUO0FBR0FSLE1BQUFBLE9BQU8sQ0FBQ08sS0FBUixDQUFjWCxHQUFkLEVBTEssQ0FNTDtBQUNEO0FBQ0Y7O0FBakJpQyxDQUFsQyxDQURKOztBQXFCQSxpRUFBZUYsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHQvLi91dGlscy5zZXJ2ZXIudHM/ZTAzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbmMgZnJvbSBcIm5leHQtY29ubmVjdFwiO1xuaW1wb3J0ICogYXMgQm9vbSBmcm9tIFwiQGhhcGkvYm9vbVwiO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5cbmNvbnN0IGFwaUhhbmRsZXIgPSAoKSA9PlxuICBuYzxOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlPih7XG4gICAgb25FcnJvcihlcnIsIHJlcSwgcmVzKSB7XG4gICAgICBpZiAoQm9vbS5pc0Jvb20oZXJyKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICByZXMuc3RhdHVzKGVyci5vdXRwdXQucGF5bG9hZC5zdGF0dXNDb2RlKTtcbiAgICAgICAgcmVzLmpzb24oe1xuICAgICAgICAgIGVycm9yOiBlcnIub3V0cHV0LnBheWxvYWQuZXJyb3IsXG4gICAgICAgICAgbWVzc2FnZTogZXJyLm91dHB1dC5wYXlsb2FkLm1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApO1xuICAgICAgICByZXMuanNvbih7XG4gICAgICAgICAgbWVzc2FnZTogXCJVbmV4cGVjdGVkIGVycm9yXCIsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIC8vIHVuZXhjZXB0ZWQgZXJyb3JcbiAgICAgIH1cbiAgICB9LFxuICB9KTtcblxuZXhwb3J0IGRlZmF1bHQgYXBpSGFuZGxlciJdLCJuYW1lcyI6WyJuYyIsIkJvb20iLCJhcGlIYW5kbGVyIiwib25FcnJvciIsImVyciIsInJlcSIsInJlcyIsImlzQm9vbSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJvdXRwdXQiLCJwYXlsb2FkIiwic3RhdHVzQ29kZSIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils.server.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/statistic/getSkuAdTable.ts"));
module.exports = __webpack_exports__;

})();