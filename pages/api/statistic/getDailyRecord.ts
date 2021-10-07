import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
import prisma from '../../../lib/prisma'


export default apiHandler().post(async(req,res) => {
  console.log('ad-group')
  const {mid} = req.body
  let result = await prisma.daily_records.findMany({
    
  })
  const pResult = result.sort((a,b)=>{
    return dayjs(b.date_str).valueOf() - dayjs(a.date_str).valueOf()
  })
  res.send({
    response:pResult
  })
  res.end()

});