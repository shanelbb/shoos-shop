import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function fetchProducts(req: NextApiRequest, res: NextApiResponse) {
  const products = await prisma.product.findMany();
  res.status(200).json({ products: products });
}
