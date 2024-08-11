// const { PrismaClient } = require("@prisma/client");
// const { shopping } = require("../../../prisma/");
// const prisma = new PrismaClient();

import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { orderData, bag_id } = req.body;

    if (req.method === "POST") {
        try {
            const shopping_bag = await prisma.shopping_Bag.create({
                data: {
                    all_items_quantity: 3,
                    total_price: 300,
                    completed: false,
                    user_id: 1,
                    addedItems: orderData.addedItems,
                    id: Number(bag_id),
                },
            });
            res.json(shopping_bag);
            console.log("Order added");
        } catch (error) {
            res.status(500).json({ error: "Failed to create order" });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
