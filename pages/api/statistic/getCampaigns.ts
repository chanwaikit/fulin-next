import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
import prisma from '../../../lib/prisma'
const request = require('request')
const rp = require('request-promise');

export default apiHandler().post(async(req,res) => {
  console.log('sku-ad')

  const { sid, portfolio_id,startDate,endDate } = req.body;

  var options = {
    method: 'POST',
    uri: 'https://fulintech.lingxing.com/sc/data/ads/campaigns',
    body: {
      sid:Number(sid),
      start_date: startDate,
      end_date: endDate,
      type: 1,
    },
    headers: {
      "Content-Type":"application/json",
      'Authorization': 'bearer 1df89lYIY+J9i0xVBrqxroXOhq/yGcG1tD8kc3eiWT++Ss5RrredrVr6gqsBGFMPR6BvtRmIq4ggfBZE+futlE7gcKnLBsUBmHadvSLBoAdm0dbryA'
    },
    json: true // Automatically parses the JSON string in the response
  };

  const result = await rp(options)
  // console.log(result)
  
  let pResult = result.data.filter((item)=>{
    return item.portfolio_id == portfolio_id && item.impressions > 0
  })
  pResult = pResult.sort((a,b)=>b.cost-a.cost)
  
  res.send({
    response: pResult
  })
  res.end()

});