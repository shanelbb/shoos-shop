import prisma from "../../../lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function fetchReviews(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query;

  if (!productId) {
    return res.status(400).json({ error: "ID is required" });
  }
  try {
    const product_id_int = Number(productId);

    const reviews = await prisma.review.findMany({
      where: { product_id: product_id_int },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    if (reviews.length === 0) {
      return res.status(404).json({ error: "There are no reviews for this product yet. Leave one below!" });
    }
    res.status(200).json({ reviews: reviews });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while fetching reviews." });
  }
}
