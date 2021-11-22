
import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
import prisma from '../../../lib/prisma'


export default apiHandler().post(async(req,res) => {
  const {name_time,
    sid,
    bid,
    keywords,
    asin,
    name,

    sp_sum ,
    natural_sum ,
    sp_all_sum ,
    natural_all_sum ,

    sp_sort ,
    sp_all_sort ,
    natural_sort ,
    natural_all_sort ,

    sp_all_page ,
    sp_page ,
    natural_all_page ,
    natural_page } = req.body
  

  await prisma.local_sku_positions.create({
    data:{
      name_time,
      sid,
      bid,
      keywords,
      asin,
      name,

      sp_sum ,
      natural_sum ,
      sp_all_sum ,
      natural_all_sum ,

      sp_sort ,
      sp_all_sort ,
      natural_sort ,
      natural_all_sort ,
 
      sp_all_page ,
      sp_page ,
      natural_all_page ,
      natural_page  
    }
  });
  let Shops = await prisma.local_sku_positions.findMany({
    
  })
  
  res.send({
    response:Shops
  })
  res.end()

});