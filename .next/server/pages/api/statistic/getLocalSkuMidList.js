"use strict";
(() => {
var exports = {};
exports.id = 130;
exports.ids = [130];
exports.modules = {

/***/ 969:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(844);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(349);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(132);




const getDayArray = (startDate, endDate) => {
  const startDateMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startDate).valueOf();
  const endDateMs = dayjs__WEBPACK_IMPORTED_MODULE_1___default()(endDate).valueOf();
  const days = (endDateMs - startDateMs) / 60 / 60 / 1000 / 24 + 1;
  const daysArray = []; // const LocalSkuMidProfitList = ctx.model.Fulin.LocalSkuMidProfitList;

  const x_axis = [];

  for (let i = 0; i < days; i++) {
    if (i % 7 === 0) {
      const pStartDateMs = startDateMs + i * 60 * 60 * 24 * 1000;
      const pEndDateMs = pStartDateMs + 6 * 24 * 60 * 60 * 1000 > endDateMs ? endDateMs : pStartDateMs + 6 * 24 * 60 * 60 * 1000;
      x_axis.push(dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'));
      daysArray.push({
        date_str: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'),
        // startDateMs: pStartDateMs,
        // endDateMs: pEndDateMs,
        start_date_str: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'),
        end_date_str: dayjs__WEBPACK_IMPORTED_MODULE_1___default()(pEndDateMs).format('YYYY-MM-DD')
      });
    }
  }

  return {
    daysArray,
    x_axis
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_server__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)().post(async (req, res) => {
  console.log('sku');
  const {
    cid,
    mid,
    startDate,
    endDate,
    local_sku
  } = req.body; // const profitLists  = await getProfitLists(req.body)

  const {
    daysArray,
    x_axis
  } = getDayArray(startDate, endDate);
  let list = await _lib_prisma__WEBPACK_IMPORTED_MODULE_2__/* .default.local_sku_mid_lists.findMany */ .Z.local_sku_mid_lists.findMany();
  res.send({
    response: list || []
  });
  res.end();
}));

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("@hapi/boom");

/***/ }),

/***/ 212:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 349:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 303:
/***/ ((module) => {

module.exports = require("next-connect");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [198], () => (__webpack_exec__(969)));
module.exports = __webpack_exports__;

})();