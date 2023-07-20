import { FastifyInstance } from "fastify";
import { google } from "googleapis";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function postRoutes(app: FastifyInstance) {
    const auth = new google.auth.GoogleAuth({
        keyFile: "./code-life-blog-42df71393fe9.json",
        scopes: ["https://www.googleapis.com/auth/drive"],
    });
    const driverService = google.drive({
        version: "v3",
        auth,
    });
    app.get("/posts", async () => {
        const posts = await prisma.post.findMany({
            orderBy: [
                {
                    date: "desc",
                },
            ],
        });

        return posts;
    });
    app.get("/post/:id", async (req, reply) => {
        const schema = z.object({
            id: z.string().uuid(),
        });
        const { id } = schema.parse(req.params);

        const posts = await prisma.post.findUnique({
            where: {
                id,
            },
        });
        if (!posts) return reply.status(404).send();

        const file = await driverService.files.get({
            fileId: posts?.driveId,
            alt: "media",
        });

        return file.data;
    });
}
