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

  const fetchData = await getProfitLists({
      startDate,
      endDate,
    }); // 总数据

    const pSkuList = skuList.map((sku, iii) => {
      const skuData = fetchData.filter(element => {
        return sku.local_sku_mid === element.local_sku_mid;
      });
      // sku.data = [];
      sku.title = sku.local_sku;
      sku.local_name_country = sku.local_name + '_' + sku.country;

      sku.cost = 0;
      sku.ad_orders = 0;
      sku.sales_amount = 0;
      sku.total_volume = 0;
      sku.ad_sales_amount = 0;
      sku.product_volume = 0;

      sku.spCost = 0;
      sku.spOrderNum = 0;
      sku.spImpressions = 0;
      sku.spClicks = 0;
      sku.spSalesAmount = 0;
  		sku.sbSkuCost = 0;
      sku.sbSkuOrderNum = 0;
      sku.sbSkuImpressions = 0;
      sku.sbSkuClicks = 0;
      sku.sbSkuSalesAmount = 0;
  		sku.sbvCost = 0;
      sku.sbvOrderNum = 0;
      sku.sbvImpressions = 0;
      sku.sbvClicks = 0;
      sku.sbvSalesAmount = 0;
  		sku.sdCost = 0;
      sku.sdOrderNum = 0;
      sku.sdImpressions = 0;
      sku.sdClicks = 0;
      sku.sdSalesAmount = 0;
      sku.gross_profit = 0;
      sku.sessions = 0;
      sku.ad_clicks =0 ;
      sku.refundNum =  0;
      // skuData.map(item => {
        
      // });

      skuData.map(element => {
        const code_date = element.code + '_' + dayjs(element.date_str).format('YYYY-MM');
        const us_rate = Number(rateEnum['USD_' + dayjs(element.date_str).format('YYYY-MM')].rate || 1);
        const rate = Number(rateEnum[code_date].rate || 1);
        const ratio = 1;
        const ad_cost = Number(element.sp_cost || 0) + Number(element.sb_cost || 0) + Number(element.sbv_cost || 0) + Number(element.sd_cost || 0);
        const gross_profit = Number(element.total_amount || 0) + Number(element.refund_amount || 0) + Number(element.channel_fee || 0) + Number(element.commission_amount || 0) + Number(element.promotion_amount || 0) + Number(element.total_cg_price || 0) + Number(element.total_cg_transport_costs || 0) + Number(element.other_order_fee || 0) - ad_cost;
        const ad_orders = Number(element.sp_orders || 0) + Number(element.sb_orders || 0) + Number(element.sbv_orders || 0) + Number(element.sd_orders || 0);
        const ad_sales_amount = Number(element.sp_sales_amount || 0) + Number(element.sales_amount || 0) + Number(element.sbv_sales_amount || 0) + Number(element.sd_sales_amount || 0);
        const ad_clicks = Number(element.sp_clicks || 0) + Number(element.sb_clicks || 0) + Number(element.sbv_clicks || 0) + Number(element.sd_clicks || 0);

        sku.total_volume += Number(element.total_volume);
        sku.product_volume += Number(element.volume);
        sku.sessions += Number(element.sessions);
        sku.refundNum += Number(element.refund_num);

        sku.gross_profit += Number(gross_profit) * ratio;
        sku.cost += ad_cost * ratio;
        sku.sales_amount += Number(element.total_amount) * ratio;
        sku.ad_sales_amount += Number(ad_sales_amount) * ratio;
        sku.cid = element.cid;
        sku.mid = element.mid;
        sku.ad_orders += ad_orders;
        sku.ratio = (rate / us_rate) || 1;
        sku.ad_clicks += ad_clicks

        sku.spCost += Number(element.sp_cost || 0);
        sku.spOrderNum += Number(element.sp_orders || 0);
        sku.spImpressions += Number(element.sp_impressions || 0);
        sku.spClicks += Number(element.sp_clicks || 0);
        sku.spSalesAmount += Number(element.sp_sales_amount || 0);


        sku.sbSkuCost += Number(element.sb_cost || 0);
        sku.sbSkuOrderNum += Number(element.sb_orders || 0);
        sku.sbSkuImpressions += Number(element.sb_impressions || 0);
        sku.sbSkuClicks += Number(element.sb_clicks || 0);
        sku.sbSkuSalesAmount += Number(element.sb_sales_amount || 0);

        sku.sbvCost += Number(element.sbv_cost || 0);
        sku.sbvOrderNum += Number(element.sb_orders || 0);
        sku.sbvImpressions += Number(element.sbv_impressions || 0);
        sku.sbvClicks += Number(element.sbv_clicks || 0);
        sku.sbvSalesAmount += Number(element.sbv_sales_amount || 0);


        sku.sdCost += Number(element.sd_cost || 0);
        sku.sdOrderNum += Number(element.sd_orders || 0);
        sku.sdImpressions += Number(element.sd_impressions || 0);
        sku.sdClicks += Number(element.sd_clicks || 0);
        sku.sdSalesAmount += Number(element.sd_sales_amount || 0);
        // sku.data.push(element);
      });


      return sku;
    });
    pSkuList.sort((a, b) => b.sales_amount - a.sales_amount);


  res.send({
    // response:pSkuList
    response:pSkuList
  })
  res.end()

});