import prisma from "../../../../lib/prisma";

export default async function handle(req:any,res:any) {
    const { title, nominal,type } = req.body;
    const newTransaksi = await prisma.transaksi.create({
      data: {
        title: title,
        nominal: nominal,
        type: type
      },
    })
    res.status(201).json({message: 'success', data:newTransaksi})
  }