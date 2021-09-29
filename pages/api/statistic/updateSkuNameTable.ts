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
  const {sku_name} = req.body

  await prisma.sku_name_tables.updateMany({
    data:{
      sku_name,
    },
    where: {
      id:1,
    },
  });

  

  res.send({
    response:'ok'
  })
  res.end()

});