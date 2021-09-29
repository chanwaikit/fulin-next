import prisma from '../lib/prisma'
import dayjs from 'dayjs';


async function getProfitData(req): Promise<object>{
  const { cid,mid,startDate,endDate } = req;
  const pEndDate = dayjs(dayjs(endDate).valueOf() + 24 * 60 * 60* 1000).format('YYYY-MM-DD')
  const where = {
    ...(cid ? { cid } : {}),
    ...(mid ? { mid } : {}),
    date_str: {
      gte: startDate,
      lt:  pEndDate
    },
  };

  return await prisma.local_sku_mid_profit_lists.findMany({
    where
  })
}


export default getProfitData