"use strict";
exports.id = 198;
exports.ids = [198];
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

/***/ 844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(303);
/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_connect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(796);
/* harmony import */ var _hapi_boom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hapi_boom__WEBPACK_IMPORTED_MODULE_1__);
// import nc from 'next-connect'
// import { NextApiRequest, NextApiResponse } from "next";
// import prisma from './lib/prisma'
// function authMiddleware(req, res, next) {
//   // res.status(403)
//   // res.send('please sign in first')
//   next()
// }
// // 用 `nc()` 创建一个 api handler
// const apiHandler = nc<NextApiRequest, NextApiResponse>()
//   // .use(authMiddleware)
//   // // .get((req, res) => {
//   // //   // console.log(37,req.body)
//   // //   res.send('hello')
//   // // }).post((req,res) => {
//   // //   res.send('hello')
//   // // });
// export default apiHandler



const apiHandler = () => next_connect__WEBPACK_IMPORTED_MODULE_0___default()({
  onError(err, req, res) {
    if (_hapi_boom__WEBPACK_IMPORTED_MODULE_1__.isBoom(err)) {
      console.log(err);
      res.status(err.output.payload.statusCode);
      res.json({
        error: err.output.payload.error,
        message: err.output.payload.message
      });
    } else {
      res.status(500);
      res.json({
        message: "Unexpected error"
      });
      console.error(err); // unexcepted error
    }
  }

});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apiHandler);

/***/ })

};
;