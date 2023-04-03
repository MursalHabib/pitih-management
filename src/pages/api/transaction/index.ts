import {NextApiRequest,NextApiResponse} from 'next'
import prisma from "../../../../lib/prisma";

// index.tsx
export default async function handle(req:any,res:any){
    const allTransactions = await prisma.transaksi.findMany();
    res.json({message:'success',data:allTransactions})
  };