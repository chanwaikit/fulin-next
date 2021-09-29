import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import prisma from '../../../lib/prisma'


const getDayArray = (startDate, endDate) => {
  const startDateMs = dayjs(startDate).valueOf();
  const endDateMs = dayjs(endDate).valueOf();
  const days = (endDateMs - startDateMs) / 60 / 60 / 1000 / 24 + 1;
  const daysArray = [];
  // const LocalSkuMidProfitList = ctx.model.Fulin.LocalSkuMidProfitList;
  const x_axis = [];
  for (let i = 0; i < days; i++) {
    if (i % 7 === 0) {
      const pStartDateMs = startDateMs + i * 60 * 60 * 24 * 1000;
      const pEndDateMs = (pStartDateMs + 6 * 24 * 60 * 60 * 1000) > endDateMs ? endDateMs : (pStartDateMs + 6 * 24 * 60 * 60 * 1000);
      x_axis.push(dayjs(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'));
      daysArray.push({
        date_str: dayjs(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'),
        // startDateMs: pStartDateMs,
        // endDateMs: pEndDateMs,
        start_date_str: dayjs(startDateMs + i * 60 * 60 * 24 * 1000).format('YYYY-MM-DD'),
        end_date_str: dayjs(pEndDateMs).format('YYYY-MM-DD'),

      });
    }
  }
  return {
    daysArray,
    x_axis,
  };
}

export default apiHandler().post(async(req,res) => {
  console.log('sku')

  const { mid,startDate,endDate,local_sku,currencyType = 2 } = req.body;
  const cid  = String(req.body.cid || '')
  let skuList = await prisma.local_sku_mid_lists.findMany();
  let rateList = await prisma.rate_lists.findMany();
  // let skuNameTable = await prisma.sku_name_tables.findMany();
  const rateEnum = {};  
  rateList.map(item => {
    rateEnum[item.code_date] = item;
  });

  let skuNameTable = await prisma.sku_name_tables.findMany();


    
  res.send({
    // response:pSkuList
    response:skuNameTable[0].sku_name
  })
  res.end()

});