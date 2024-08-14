// const { PrismaClient } = require("@prisma/client");
// const { shopping } = require("../../../prisma/");
// const prisma = new PrismaClient();

import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { orderSummary } = req.body;

  if (req.method === "POST") {
    try {
      const shopping_bag = await prisma.shopping_Bag.create({
        data: {
          all_items_quantity: orderSummary.orderQty,
          total_price: orderSummary.orderTotal,
          completed: true,
          user_id: 1,
        },
      });
      res.json(shopping_bag);
      console.log("Order added");
    } catch (error) {
      res.status(500).json({ error: `Failed to create order: ${error}` });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
