import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { reviewBody, user_id } = req.body;

    if (req.method === "POST") {
        try {
            const review = await prisma.review.create({
                data: {
                    message: reviewBody.message,
                    user_id: user_id,
                    product_id: reviewBody.shoe_id,
                    star_rating: 5,
                },
            });
            res.json(review);
            console.log("Review added");
        } catch (error) {
            res.status(500).json({
                error: `Failed to create review: ${error}`,
            });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
