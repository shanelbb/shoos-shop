import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function fetchProducts(req: NextApiRequest, res: NextApiResponse) {
  const sio_urls = await prisma.seeItOn_Image.findMany();
  res.status(200).json({ sio_urls: sio_urls });
}
