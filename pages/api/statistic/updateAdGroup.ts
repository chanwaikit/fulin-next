import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
import prisma from '../../../lib/prisma';
import querystring from 'querystring';

const qs = require('qs')


export default apiHandler().post(async(req,res) => {
  console.log('ad-group')
  const {sbGroups = [], spGroups = [], local_sku_mid = '', cid, category_text} = req.body
  let sbGroupList = await prisma.local_sku_mid_sb_groups.findMany()

  await prisma.local_sku_mid_sp_groups.updateMany({
    data:{
      local_sku_sid: null,
      local_sku_mid: null,
    },
    where: {
      local_sku_mid,
    },
  });

  await prisma.local_sku_mid_through_sb_tables.deleteMany({ 
    where: {local_sku_mid} 
  });

  console.log(28,req.body)

  for (let i = 0; i < sbGroups.length; i++) {
    const sbGroupObj = sbGroupList.filter(item => {
      return item.portfolio_id == sbGroups[i].portfolio_id;
    })[0] || {};
    console.log(34,sbGroups)
    await prisma.local_sku_mid_through_sb_tables.create({
      data:{
        portfolio_id: sbGroups[i].portfolio_id,
        local_sku_sid: sbGroups[i].local_sku_sid,
        name: sbGroupObj.name,
        local_sku_mid,
        cid,
        category_text,
      }
    });
  }


  for (let i = 0; i < spGroups.length; i++) {
    const spObj = await prisma.local_sku_mid_sp_groups.findByPk(spGroups[i].portfolio_id);
    if (spObj) {
      await prisma.local_sku_mid_sp_groups.update({
        data:{
          ...spObj,
          local_sku_sid: spGroups[i].local_sku_sid,
          local_sku_mid,
          cid,
          category_text
        },
        where:{
          portfolio_id: spGroups[i].portfolio_id
        }
        
      });
    }
  }


  const result = [];


  res.send({
    response:result
  })
  res.end()

});