"use strict";
(() => {
var exports = {};
exports.id = 812;
exports.ids = [812];
exports.modules = {

/***/ 132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;

if (true) {
  prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);

/***/ }),

/***/ 364:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(844);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_server__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)().post(async (req, res) => {
  console.log('sku-ad');
  const {
    mid,
    local_sku
  } = req.body;
  let shopList = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* .default.local_shop_lists.findMany */ .Z.local_shop_lists.findMany({
    // ...(mid?{mid}:{})
    where: {
      mid
    }
  });
  let Sku = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* .default.local_sku_mid_lists.findMany */ .Z.local_sku_mid_lists.findMany({
    // ...(local_sku?{where:{local_sku}}:{}),
    where: {
      local_sku
    },
    include: {
      local_sku_mid_through_sb_tables: {
        include: {
          local_sku_mid_sb_groups: true
        }
      },
      local_sku_mid_sp_groups: true
    }
  });
  const pSku = [];
  console.log();
  Sku.map(item => {
    const pSbGroups = [];
    const pSpGroups = [];
    let local_sku_mid_sb_groups = [];
    item.local_sku_mid_through_sb_tables.map(element => {
      local_sku_mid_sb_groups.push(element.local_sku_mid_sb_groups);
    });
    local_sku_mid_sb_groups.map(element => {
      const shopName = (shopList.filter(shop => {
        return shop.sid == element.sid;
      })[0] || {}).name;
      pSbGroups.push(_objectSpread(_objectSpread({}, element), {}, {
        shopName
      }));
    });
    item.local_sku_mid_sp_groups.map(element => {
      const shopName = (shopList.filter(shop => {
        return shop.sid == element.sid;
      })[0] || {}).name;
      pSpGroups.push(_objectSpread(_objectSpread({}, element), {}, {
        shopName
      }));
    });

    const pItem = _objectSpread(_objectSpread({}, item), {}, {
      sb_groups: pSbGroups,
      sp_groups: pSpGroups
    });

    delete pItem.local_sku_mid_sb_groups;
    delete pItem.local_sku_mid_sp_groups;
    delete pItem.local_sku_mid_through_sb_tables;
    pSku.push(pItem);
    return pItem;
  });
  res.send({
    response: pSku
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
var __webpack_exports__ = __webpack_require__.X(0, [844], () => (__webpack_exec__(364)));
module.exports = __webpack_exports__;

})();