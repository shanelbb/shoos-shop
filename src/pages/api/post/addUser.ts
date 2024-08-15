import prisma from "lib/prisma";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { userData } = req.body;

    if (req.method === "POST") {
        try {
            const user = await prisma.user.create({
                data: {
                    name: userData.name,
                    email: userData.email,
                },
            });
            res.json(user);
            console.log("User added");
        } catch (error) {
            res.status(500).json({ error: `Failed to create user: ${error}` });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
