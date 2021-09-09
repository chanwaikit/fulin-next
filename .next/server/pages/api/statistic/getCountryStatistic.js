"use strict";
(() => {
var exports = {};
exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(844);
/* harmony import */ var _utils_getProfitLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(399);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(349);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(132);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const getDayArray = (startDate, endDate) => {
  const startDateMs = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(startDate).valueOf();
  const endDateMs = dayjs__WEBPACK_IMPORTED_MODULE_2___default()(endDate).valueOf();
  const days = (endDateMs - startDateMs) / 60 / 60 / 1000 / 24 + 1;
  const daysArray = []; // const LocalSkuMidProfitList = ctx.model.Fulin.LocalSkuMidProfitList;

  const x_axis = [];

  for (let i = 0; i < days; i++) {
    if (i % 7 === 0) {
      const pStartDateMs = startDateMs + i * 60 * 60 * 24 * 1000;
      const pEndDateMs = pStartDateMs + 6 * 24 * 60 * 60 * 1000 > endDateMs ? endDateMs : pStartDateMs + 6 * 24 * 60 * 60 * 1000;
      x_axis.push(dayjs__WEBPACK_IMPORTED_MODULE_2___default()(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'));
      daysArray.push({
        date_str: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'),
        // startDateMs: pStartDateMs,
        // endDateMs: pEndDateMs,
        start_date_str: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'),
        end_date_str: dayjs__WEBPACK_IMPORTED_MODULE_2___default()(pEndDateMs).format('YYYY-MM-DD')
      });
    }
  }

  return {
    daysArray,
    x_axis
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_server__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)().post(async (req, res) => {
  console.log('country');
  const mids = [{
    mid: 1,
    title: '美国'
  }, {
    mid: 10,
    title: '日本'
  }, {
    mid: 4,
    title: '英国'
  }, {
    mid: 5,
    title: '德国'
  }, {
    mid: 6,
    title: '法国'
  }, {
    mid: 7,
    title: '意大利'
  }, {
    mid: 8,
    title: '西班牙'
  }];
  const {
    cid,
    startDate,
    endDate
  } = req.body;
  const {
    daysArray,
    x_axis
  } = getDayArray(startDate, endDate);
  const promiseArray = [];
  mids.map(item => {
    daysArray.map(element => {
      promiseArray.push(_objectSpread(_objectSpread({}, element), {}, {
        cid,
        mid: item.mid,
        title: item.title
      }));
      return element;
    });
    item.weekAds = daysArray;
    return item;
  });
  let rateList = await _lib_prisma__WEBPACK_IMPORTED_MODULE_3__/* .default.rate_lists.findMany */ .Z.rate_lists.findMany();
  const rateEnum = {};
  rateList.map(item => {
    rateEnum[item.code_date] = item;
  });
  const skuWeekData = [];
  const promiseAllArray = [];
  promiseArray.map(item => {
    const cid = item.cid;
    const startDate = item.start_date_str;
    const endDate = item.end_date_str;
    const mid = String(item.mid);
    promiseAllArray.push((0,_utils_getProfitLists__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)({
      cid,
      startDate,
      endDate,
      mid
    }));
  });
  await Promise.all(promiseAllArray).then(res => {
    // console.log(97)
    res.map((arr, arrIndex) => {
      const statistic = {
        cost: 0,
        category_text: '',
        cid: '',
        sales_amount: 0,
        date_str: promiseArray[arrIndex].date_str,
        ratio: 1,
        gross_profit: 0,
        ad_orders: 0,
        ad_sales_amount: 0
      };
      arr.map(element => {
        const code_date = element.code + '_' + dayjs__WEBPACK_IMPORTED_MODULE_2___default()(element.date_str).format('YYYY-MM');
        const us_rate = Number(rateEnum['USD_' + dayjs__WEBPACK_IMPORTED_MODULE_2___default()(element.date_str).format('YYYY-MM')].rate || 1);
        const rate = Number(rateEnum[code_date].rate || 1);
        const ratio = rate / us_rate || 1;
        const ad_cost = Number(element.sp_cost || 0) + Number(element.sb_cost || 0) + Number(element.sbv_cost || 0) + Number(element.sd_cost || 0);
        const gross_profit = Number(element.total_amount || 0) + Number(element.refund_amount || 0) + Number(element.channel_fee || 0) + Number(element.commission_amount || 0) + Number(element.promotion_amount || 0) + Number(element.total_cg_price || 0) + Number(element.total_cg_transport_costs || 0) + Number(element.other_order_fee || 0) - ad_cost;
        const ad_orders = Number(element.sp_orders || 0) + Number(element.sb_orders || 0) + Number(element.sbv_orders || 0) + Number(element.sd_orders || 0);
        const ad_sales_amount = Number(element.sp_sales_amount || 0) + Number(element.sales_amount || 0) + Number(element.sbv_sales_amount || 0) + Number(element.sd_sales_amount || 0);
        statistic.gross_profit += Number(gross_profit) * ratio;
        statistic.cost += ad_cost * ratio;
        statistic.sales_amount += Number(element.total_amount) * ratio;
        statistic.ad_sales_amount += Number(ad_sales_amount) * ratio;
        statistic.cid = element.cid;
        statistic.mid = element.mid;
        statistic.ad_orders += ad_orders;
        statistic.ratio = ratio;
      });
      skuWeekData.push(statistic);
    });
  });
  mids.map(item => {
    const weekAds = [];
    item.total_sales_amount = 0;
    item.total_cost = 0;
    item.total_gross_profit = 0;
    item.weekAds.map(element => {
      const data = skuWeekData.filter(weekData => {
        return weekData.date_str === element.date_str && item.mid == weekData.mid;
      })[0] || {};
      element = _objectSpread(_objectSpread({}, element), data);
      weekAds.push(element);
      item.total_sales_amount += Number(data.sales_amount);
      item.total_cost += Number(data.cost);
      item.total_gross_profit += Number(data.gross_profit);
      item.total_gross_profit_rate = item.total_gross_profit / item.total_sales_amount;
      return element;
    });
    item.weekAds = weekAds;
    return item;
  });
  res.send({
    response: {
      categories: mids,
      x_axis
    }
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
var __webpack_exports__ = __webpack_require__.X(0, [198,399], () => (__webpack_exec__(635)));
module.exports = __webpack_exports__;

})();