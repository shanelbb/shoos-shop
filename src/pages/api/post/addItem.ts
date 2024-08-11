// const { PrismaClient } = require("@prisma/client");
// const { shopping } = require("../../../prisma/");
// const prisma = new PrismaClient();

import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { itemOrder, bag_id } = req.body;
    if (req.method === "POST") {
        try {
            const added_item = await prisma.added_Item.create({
                data: {
                    bag_id: Number(bag_id),
                    product_id: itemOrder.product_id,
                    size: itemOrder.size,
                    unit_quantity: itemOrder.quantity,
                    total_unit_price: itemOrder.price,
                },
            });
            res.json(added_item);
            console.log("Item added");
        } catch (error) {
            res.status(500).json({ error: "Failed to create order" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
