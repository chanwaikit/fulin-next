import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
import prisma from '../../../lib/prisma'


export default apiHandler().post(async(req,res) => {
  console.log('ad-group')
  const {mid} = req.body
  let SbGroup = await prisma.local_sku_mid_sb_groups.findMany({
    where:{
      local_shop_lists:{
        mid
      }
    },
    include: {
      local_shop_lists: true,
    },
  })
  const SpGroup = await prisma.local_sku_mid_sp_groups.findMany({
    where:{
      local_shop_lists:{
        mid
      }
    },
    include: {
      local_shop_lists: {
       
      },
    },
  })

  const result = [];
    SbGroup.map(item => {
      const { name, country, mid } = item.local_shop_lists;
      const element = {
        shopName: name,
        country,
        mid,
        ...item,
      };
      delete element.local_shop_lists;
      result.push(element);
      return element;
    });

    SpGroup.map(item => {
      const { name, country, mid } = item.local_shop_lists;
      const element = {
        shopName: name,
        country,
        mid,
        ...item,
      };
      delete element.local_shop_lists;
      result.push(element);
      return element;
    });


  res.send({
    response:result
  })
  res.end()

});