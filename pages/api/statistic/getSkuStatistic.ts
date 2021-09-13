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

  const { cid,mid,startDate,endDate,local_sku } = req.body;

  // const profitLists  = await getProfitLists(req.body)
  const {daysArray,x_axis} = getDayArray(startDate, endDate)
  
  let skuList = await prisma.local_sku_mid_lists.findMany({
    where: {
      ...(cid ? { cid } : {}),
      ...(mid ? { mid } : {}),
      ...(local_sku ? { local_sku } : {}),

    },
  });
  let rateList = await prisma.rate_lists.findMany();
  const rateEnum = {};
  rateList.map(item => {
    rateEnum[item.code_date] = item;
  });

  const fetchData = await getProfitLists({
      cid,
      startDate,
      endDate,
      ...(mid ? { mid:String(mid) } : {}),
    }); // 总数据

    const pSkuList = skuList.map((sku, iii) => {
      const skuData = fetchData.filter(element => {
        return sku.local_sku_mid === element.local_sku_mid;
      });
      // sku.data = [];
      sku.title = sku.local_sku;

      sku.cost = 0;
      sku.ad_orders = 0;
      sku.sales_amount = 0;
      sku.total_volume = 0;
      sku.ad_sales_amount = 0;


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
  		sku.dCost = 0;
      sku.sdOrderNum = 0;
      sku.sdImpressions = 0;
      sku.sdClicks = 0;
      sku.sdSalesAmount = 0;

      skuData.map(item => {
        sku.spCost += Number(item.sp_cost || 0);
        sku.spOrderNum += Number(item.sp_orders || 0);
        sku.spImpressions += Number(item.sp_impressions || 0);
        sku.spClicks += Number(item.sp_clicks || 0);
        sku.spSalesAmount += Number(item.sp_sales_amount || 0);


        sku.sbSkuCost += Number(item.sb_cost || 0);
        sku.sbSkuOrderNum += Number(item.sb_orders || 0);
        sku.sbSkuImpressions += Number(item.sb_impressions || 0);
        sku.sbSkuClicks += Number(item.sb_clicks || 0);
        sku.sbSkuSalesAmount += Number(item.sb_sales_amount || 0);

        sku.sbvCost += Number(item.sbv_cost || 0);
        sku.sbvOrderNum += Number(item.sb_orders || 0);
        sku.sbvImpressions += Number(item.sbv_impressions || 0);
        sku.sbvClicks += Number(item.sbv_clicks || 0);
        sku.sbvSalesAmount += Number(item.sbv_sales_amount || 0);


        sku.sdCost += Number(item.sd_cost || 0);
        sku.sdOrderNum += Number(item.sd_orders || 0);
        sku.sdImpressions += Number(item.sd_impressions || 0);
        sku.sdClicks += Number(item.sd_clicks || 0);
        sku.sdSalesAmount += Number(item.sd_sales_amount || 0);
      });

      sku.weekAds = [ ];
      const name = sku.local_sku;
      sku.weekAds = [];
      daysArray.map((element, jjjj) => {
        const startMs = dayjs(element.start_date_str).valueOf();
        const endMs = dayjs(element.end_date_str).valueOf();
        const filterData = skuData.filter(profitData => {
          const { date_str } = profitData;
          const dateMs = dayjs(date_str).valueOf();
          return dateMs >= startMs && dateMs <= endMs;
        });
        const obj = {
          date_str: element.date_str,
          end_date_str: element.end_date_str,
          start_date_str: element.start_date_str,
          sales_amount: 0,
          gross_profit: 0,
          cost: 0,
          ad_orders: 0,
          ad_clicks: 0,
          weekData: filterData,
          ad_impressions: 0,
        };

        filterData.map(profit => {
          const code_date = profit.code + '_' + dayjs(profit.date_str).format('YYYY-MM');
          const us_rate = Number(rateEnum['USD_' + dayjs(profit.date_str).format('YYYY-MM')].rate || 1);
          const rate = Number(rateEnum[code_date].rate || 1);
          const ratio = (rate / us_rate) || 1;
          const ad_cost = Number(profit.sp_cost || 0) + Number(profit.sb_cost || 0) + Number(profit.sbv_cost || 0) + Number(profit.sd_cost || 0);
          const ad_orders = Number(profit.sp_orders || 0) + Number(profit.sb_orders || 0) + Number(profit.sbv_orders || 0) + Number(profit.sd_orders || 0);
          const ad_clicks = Number(profit.sp_clicks || 0) + Number(profit.sb_clicks || 0) + Number(profit.sbv_clicks || 0) + Number(profit.sd_clicks || 0);
          const ad_impressions = Number(profit.sp_clicks || 0) + Number(profit.sb_impressions || 0) + Number(profit.sbv_impressions || 0) + Number(profit.sd_impressions || 0);
          const gross_profit = Number(profit.total_amount || 0) + Number(profit.refund_amount || 0) + Number(profit.channel_fee || 0) + Number(profit.commission_amount || 0) + Number(profit.promotion_amount || 0) + Number(profit.total_cg_price || 0) + Number(profit.total_cg_transport_costs || 0) + Number(profit.other_order_fee || 0) - ad_cost;


          obj.cost += ad_cost * ratio;
          obj.ad_orders += Number(ad_orders);
          obj.ad_clicks += Number(ad_clicks);
          obj.sales_amount += Number(profit.total_amount) * ratio;
          obj.ad_impressions += Number(ad_impressions);
          obj.gross_profit += Number(gross_profit) * ratio;
          obj.total_acos = (obj.cost / obj.sales_amount) * 100;
          obj.profit_rate = (obj.gross_profit / obj.sales_amount) * 100;
        });


        sku.weekAds.push(obj);

      });

      skuData.map(element => {
        const code_date = element.code + '_' + dayjs(element.date_str).format('YYYY-MM');
        const us_rate = Number(rateEnum['USD_' + dayjs(element.date_str).format('YYYY-MM')].rate || 1);
        const rate = Number(rateEnum[code_date].rate || 1);
        const ratio = (rate / us_rate) || 1;
        const ad_cost = Number(element.sp_cost || 0) + Number(element.sb_cost || 0) + Number(element.sbv_cost || 0) + Number(element.sd_cost || 0);
        const gross_profit = Number(element.total_amount || 0) + Number(element.refund_amount || 0) + Number(element.channel_fee || 0) + Number(element.commission_amount || 0) + Number(element.promotion_amount || 0) + Number(element.total_cg_price || 0) + Number(element.total_cg_transport_costs || 0) + Number(element.other_order_fee || 0) - ad_cost;
        const ad_orders = Number(element.sp_orders || 0) + Number(element.sb_orders || 0) + Number(element.sbv_orders || 0) + Number(element.sd_orders || 0);
        const ad_sales_amount = Number(element.sp_sales_amount || 0) + Number(element.sales_amount || 0) + Number(element.sbv_sales_amount || 0) + Number(element.sd_sales_amount || 0);

        sku.total_volume += Number(element.total_volume);
        sku.gross_profit += Number(gross_profit) * ratio;
        sku.cost += ad_cost * ratio;
        sku.sales_amount += Number(element.total_amount) * ratio;
        sku.ad_sales_amount += Number(ad_sales_amount) * ratio;
        sku.cid = element.cid;
        sku.mid = element.mid;
        sku.ad_orders += ad_orders;
        sku.ratio = ratio;

        // sku.data.push(element);
      });


      return sku;
    });
    pSkuList.sort((a, b) => b.sales_amount - a.sales_amount);


  res.send({
    response:{
      categories: pSkuList,
      x_axis,
    }
  })
  res.end()

});