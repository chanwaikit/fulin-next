import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
import prisma from '../../../lib/prisma'


export default apiHandler().post(async(req,res) => {
  console.log('sku-ad')

  const { mid,local_sku } = req.body;
  
  let shopList = await prisma.local_shop_lists.findMany({
    // ...(mid?{mid}:{})
    where:{
      mid
    }
  })
  let Sku = await prisma.local_sku_mid_lists.findMany({
    // ...(local_sku?{where:{local_sku}}:{}),
    where:{
      local_sku
    },
    include: {
      local_sku_mid_through_sb_tables:{
        include:{
          local_sku_mid_sb_groups:true
        }
      },
      local_sku_mid_sp_groups: true,
    },
  });


  const pSku = [];
  console.log()
  Sku.map(item => {
    const pSbGroups = [];
    const pSpGroups = [];
    let local_sku_mid_sb_groups =  []

    item.local_sku_mid_through_sb_tables.map((element)=>{
      local_sku_mid_sb_groups.push(element.local_sku_mid_sb_groups)
    })

    local_sku_mid_sb_groups.map(element => {
      const shopName = (shopList.filter(shop => {
        return shop.sid == element.sid;
      })[0] || {}).name;
      pSbGroups.push({
        ...element,
        shopName,
      });
    });

    item.local_sku_mid_sp_groups.map(element => {
      const shopName = (shopList.filter(shop => {
        return shop.sid == element.sid;
      })[0] || {}).name;
      pSpGroups.push({
        ...element,
        shopName,
      });
    });

    const pItem = { ...item, sb_groups: pSbGroups, sp_groups: pSpGroups };
    delete pItem.local_sku_mid_sb_groups;
    delete pItem.local_sku_mid_sp_groups;
    delete pItem.local_sku_mid_through_sb_tables

    pSku.push(pItem);
    return pItem;
  });


  res.send({
    response:pSku
  })
  res.end()

});