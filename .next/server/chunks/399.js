"use strict";
exports.id = 399;
exports.ids = [399];
exports.modules = {

/***/ 399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



async function getProfitData(req) {
  const {
    cid,
    mid,
    startDate,
    endDate
  } = req;

  const where = _objectSpread(_objectSpread(_objectSpread({}, cid ? {
    cid
  } : {}), mid ? {
    mid
  } : {}), {}, {
    date_str: {
      gte: startDate,
      lt: endDate
    }
  });

  return await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .default.local_sku_mid_profit_lists.findMany */ .Z.local_sku_mid_profit_lists.findMany({
    where
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProfitData);

/***/ })

};
;