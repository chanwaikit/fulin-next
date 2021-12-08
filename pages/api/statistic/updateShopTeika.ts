import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
import prisma from '../../../lib/prisma';
import querystring from 'querystring';

const qs = require('qs')
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

export default apiHandler().post(async(req,res) => {
  console.log('ad-group')
  const {teika_open,sid} = req.body
  console.log(teika_open,sid)
  await prisma.local_shop_lists.updateMany({
    data:{
      teika_open,
    },
    where: {
      sid,
    },
  });

  

  res.send({
    response:'ok'
  })
  res.end()

});