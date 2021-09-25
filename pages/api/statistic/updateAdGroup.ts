import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
import prisma from '../../../lib/prisma';
import querystring from 'querystring';

const qs = require('qs')
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// }

export default apiHandler().post(async(req,res) => {
  console.log('ad-group')


  let reqBody = {};
  let arrayKey = []
  const pData = {};
  const indexArray = []
  for(let k in req.body){
    if(k.indexOf('[') > -1){
      let keyName =k.split('.')[0];

      if(!pData[keyName.split('[')[0]]){
        pData[keyName.split('[')[0]] = [];
      }
      const indexNo = keyName.split('[')[1].split(']')[0]
      arrayKey.push({
        keyIndex:keyName,
        keyName:k.split('.')[1],
        value:req.body[k],
        index: indexNo
      })
      if(indexArray.indexOf(indexNo) === -1){
        indexArray.push(indexNo)
      }
    }else{
      reqBody[k] = req.body[k]
    }
  }
    for(let k in pData){
      indexArray.map((no)=>{
        const arr = arrayKey.filter((item)=>{
          return item.keyIndex.indexOf(k) > -1 && item.index == no
        })
        const obj = {};
        arr.map((item)=>{
          obj[item.keyName] = item.value
        })
        pData[k].push(obj)
        // console.log(62,obj)
      })
    }
  // console.log(31,reqBody,pData)

  const reqData  = {...reqBody,...pData}

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


  for (let i = 0; i < sbGroups.length; i++) {
    const sbGroupObj = sbGroupList.filter(item => {
      return item.portfolio_id == sbGroups[i].portfolio_id;
    })[0] || {};
    // console.log(34,sbGroups)
    await prisma.local_sku_mid_through_sb_tables.create({
      data:{
        portfolio_id: sbGroups[i].portfolio_id,
        // local_sku_sid: sbGroups[i].local_sku_sid,
        name: sbGroupObj.name,
        local_sku_mid,
        cid,
        category_text,
      }
    });
  }


  for (let i = 0; i < spGroups.length; i++) {
    const spObj = await prisma.local_sku_mid_sp_groups.findUnique({
      where:{
        portfolio_id:spGroups[i].portfolio_id
      }
    });
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