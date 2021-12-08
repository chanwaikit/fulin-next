import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs'
const prisma = new PrismaClient();
async function main() {
  // const users = await prisma.jobs.findMany();
  // console.log(users);
  // return users

  // npx prisma introspect
  
  const nowTime = new Date().getTime();
  const end_date = dayjs(nowTime - 24 * 60 * 60 * 1000).format('YYYY-MM-DD');
  const start_date = dayjs(nowTime - 365 * 24 * 60 * 60 * 1000).format('YYYY-MM-DD');

  const res = await fetch('https://jsondummy.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: {
      offset: '0',
      length: 10000,
      sort_field: 'total_volume',
      sort_type: 'desc',
      start_date,
      end_date,
      currency_type: '0',
      type: '0',
      req_time_sequence: '/api/report/profitAsin$$2'
    },
  });

}





main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    // const a = await prisma.$disconnect();
    // console.log(a)
  });

export default main