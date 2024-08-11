import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

export default async function fetchSIOUrls(req: NextApiRequest, res: NextApiResponse) {
  const { productId } = req.query;

  // Check if productId is provided
  if (!productId) {
    return res.status(400).json({ error: "Product ID is required" });
  }

  try {
    // Fetch See It On images related to the product ID
    const sioImages = await prisma.seeItOn_Image.findMany({
      where: {
        product_id: parseInt(productId as string),
      },
    });

    // If no images are found, return 404
    if (sioImages.length === 0) {
      return res.status(404).json({ error: "No See It On images found for this product" });
    }

    res.status(200).json({ sio_urls: sioImages });
  } catch (error) {
    console.error("Error fetching See It On images:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
