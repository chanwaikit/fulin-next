
import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
import prisma from '../../../lib/prisma'


export default apiHandler().post(async(req,res) => {
  const {mid} = req.body
  let Shops = await prisma.local_shop_lists.findMany({
    
  })
  
  res.send({
    response:Shops
  })
  res.end()

});