import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
import prisma from '../../../lib/prisma'


export default apiHandler().post(async(req,res) => {
  console.log('ad-group')
  const {mid} = req.body
  let result = await prisma.local_sku_mid_profit_lists.findMany({
    where:{
      local_sku: "LM-165_Gold_UK_FURIDEN",
      mid: "4",
      date_str: {
        gte: '2021-09-01',
        lt:  '2021-10-01'
      },
    },
    // include: {
    //   local_shop_lists: true,
    // },
  })
  
  res.send({
    response:result
  })
  res.end()

});