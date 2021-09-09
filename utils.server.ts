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


import nc from "next-connect";
import * as Boom from "@hapi/boom";
import { NextApiRequest, NextApiResponse } from "next";
const apiHandler = () =>
  nc<NextApiRequest, NextApiResponse>({
    onError(err, req, res) {
      if (Boom.isBoom(err)) {
        console.log(err);
        res.status(err.output.payload.statusCode);
        res.json({
          error: err.output.payload.error,
          message: err.output.payload.message,
        });
      } else {
        res.status(500);
        res.json({
          message: "Unexpected error",
        });
        console.error(err);
        // unexcepted error
      }
    },
  });

export default apiHandler