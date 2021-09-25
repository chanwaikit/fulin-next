import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
import prisma from '../../../lib/prisma'
const request = require('request')
const rp = require('request-promise');
const bodyParser = require("body-parser");


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



// async function getProfitData(req): Promise<object>{
//   const { cid,mid,startDate,endDate } = req;
//   const where = {
//     ...(cid ? { cid } : {}),
//     ...(mid ? { mid } : {}),
//     date_str: {
//       gte: startDate,
//       lt:  endDate
//     },
//   };

//   return await prisma.local_sku_mid_profit_lists.findMany({
//     where
//   })
// }

// pages/api/user.js
// export default async function user(req, res) {
//   console.log(req.body); // {"name":"Kieran","age":26}
//   console.log(req.query) // {} in our example
//   console.log(req.method); // POST
//   console.log(req.headers.host); // localhost:3000
//   console.log(req.url); // /api/user

//   res.status(200).json({ message: "success" })
// }


export default apiHandler().post(async(req,res) => {
  
  // const { sid, portfolio_id } = req.body;
  // const { cid,mid,startDate,endDate } = req.body;
  // console.log(req.body)

  const { sid,campaignIds,startDate,endDate } = req.body;
  
  // console.log(109,req.body,reqData)
  const {x_axis} = getDayArray(startDate, endDate)

  const weekData = []
  for(let i = 0;i<x_axis.length;i++){
    const endDate = dayjs((dayjs(x_axis[i]).valueOf() + 7 * 60 * 60 * 24 * 1000)).format('YYYY-MM-DD')
    var options = {
      method: 'POST',
      uri: 'https://fulintech.lingxing.com/sc/data/ads/campaigns',
      body: {
        sid:Number(sid),
        start_date: x_axis[i],
        end_date: endDate,
        type: 1,
      },
      headers: {
        "Content-Type":"application/json",
        'Authorization': 'bearer 1df89lYIY+J9i0xVBrqxroXOhq/yGcG1tD8kc3eiWT++Ss5RrredrVr6gqsBGFMPR6BvtRmIq4ggfBZE+futlE7gcKnLBsUBmHadvSLBoAdm0dbryA'
      },
      json: true // Automatically parses the JSON string in the response
    };
    // console.log(x_axis[i],endDate)
    const result = await rp(options)
    const pResult = result.data.map((item)=>{
      item.startDate =  x_axis[i];
      item.endDate = endDate
      return item
    })

    
    const a = pResult.filter((item)=>{
      return campaignIds.indexOf(item.campaign_id) > -1
    })

    weekData.push(a)
  }

  res.send({
    response: {
      x_axis,
      weekData
    }
  })
  res.end()

});