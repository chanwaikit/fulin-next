import apiHandler from "../../../utils.server";
import { NextApiRequest, NextApiResponse } from "next";
import getProfitLists from "../../../utils/getProfitLists";
import dayjs from 'dayjs';
import nc from 'next-connect'
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
  console.log('all')
  const { cid,mid,startDate,endDate } = req.body;

  const {daysArray,x_axis} = getDayArray(startDate, endDate)
  
  let categories = await prisma.categories.findMany();
  let rateList = await prisma.rate_lists.findMany();

  const rateEnum = {};
  rateList.map(item => {
    rateEnum[item.code_date] = item;
  });

  const promiseArray = [];
  categories.map(item => {
    daysArray.map(element => {
      promiseArray.push({
        ...element,
        ...item,
      });
      return element;
    });
    item.weekAds = daysArray;
    return item;
  });
  const skuWeekData = [];
  let data = [];

  const promiseAllArray = []
  promiseArray.map(item => {
    const cid = item.cid;
    const startDate = item.start_date_str;
    const endDate =  item.end_date_str

    promiseAllArray.push(getProfitLists({
      cid,
      startDate,
      endDate
    })) ;
  })
  await Promise.all(promiseAllArray).then(res => {
      data = res;
      res.map((arr, arrIndex) => {
        const statistic = {
          cost: 0,
          category_text: '',
          cid: '',
          sales_amount: 0,
          date_str: promiseArray[arrIndex].date_str,
          ratio: 1,
          gross_profit: 0,
        };
        arr.map(element => {

          const code_date = element.code + '_' + dayjs(element.date_str).format('YYYY-MM');
          const us_rate = Number(rateEnum['USD_' + dayjs(element.date_str).format('YYYY-MM')].rate || 1);
          const rate = Number(rateEnum[code_date].rate || 1);
          const ratio = (rate / us_rate) || 1;
          const ad_cost = Number(element.sp_cost || 0) + Number(element.sb_cost || 0) + Number(element.sbv_cost || 0) + Number(element.sd_cost || 0);
          const gross_profit = Number(element.total_amount || 0) + Number(element.refund_amount || 0) + Number(element.channel_fee || 0) + Number(element.commission_amount || 0) + Number(element.promotion_amount || 0) + Number(element.total_cg_price || 0) + Number(element.total_cg_transport_costs || 0) + Number(element.other_order_fee || 0) - ad_cost;
          // console.log(element.total_amount, element.refund_amount, element.channel_fee, element.commission_amount, element.promotion_amount, element.total_cg_price, element.total_cg_transport_costs, element.other_order_fee);
          statistic.gross_profit += Number(gross_profit) * ratio;
          statistic.cost += ad_cost * ratio;
          statistic.sales_amount += Number(element.total_amount) * ratio;
          statistic.category_text = element.category_text;
          statistic.cid = element.cid;
          statistic.ratio = ratio;

        });
        skuWeekData.push(statistic);
      });

    });

    let cost_sum = 0;
    let sales_amount_sum = 0;
    let gross_profit_sum = 0;

    categories.map(item => {
      const weekAds = [];
      item.total_sales_amount = 0;
      item.total_cost = 0;
      item.total_gross_profit = 0;
      item.weekAds.map(element => {
        const data = skuWeekData.filter(weekData => {
          return (weekData.date_str === element.date_str && item.cid === weekData.cid);
        })[0] || {};
        element = { ...element, ...data };
        weekAds.push(element);
        item.total_sales_amount += Number(data.sales_amount);
        item.total_cost += Number(data.cost);
        item.total_gross_profit += Number(data.gross_profit);
        item.total_gross_profit_rate = item.total_gross_profit / item.total_sales_amount;

        return element;
      });

      item.weekAds = weekAds;
      gross_profit_sum += item.total_gross_profit;
      cost_sum += item.total_cost;
      sales_amount_sum += item.total_sales_amount;
      return item;
    });

  res.send({
    response:{
      gross_profit_sum,
      cost_sum,
      sales_amount_sum,
      categories,
      x_axis,
    }
  })
  res.end()

});