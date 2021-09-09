import prisma from '../lib/prisma'


async function getProfitData(req): Promise<object>{
  const { cid,mid,startDate,endDate } = req;
  const where = {
    ...(cid ? { cid } : {}),
    ...(mid ? { mid } : {}),
    date_str: {
      gte: startDate,
      lt:  endDate
    },
  };

  return await prisma.local_sku_mid_profit_lists.findMany({
    where
  })
}


export default getProfitData