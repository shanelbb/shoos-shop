import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { orderData, bag_id } = req.body;

    const addedItems = orderData.map(item => {
        return {
            bag_id: bag_id,
            product_id: item.product_id,
            size: item.size,
            unit_quantity: item.quantity,
            total_unit_price: item.price,
        };
    });

    if (req.method === "POST") {
        try {
            const added_item = await prisma.added_Item.createMany({
                data: addedItems,
            });
            res.json(added_item);
            console.log("Item added");
        } catch (error) {
            res.status(500).json({ error: `Failed to create item: ${error}` });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
