import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { html, transporter } from "../lib/transporter";
import { driverService } from "../lib/drive";

export async function postRoutes(app: FastifyInstance) {
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
    app.get("/postsBytag/:tag", async (req) => {
        const schema = z.object({
            tag: z.string().min(2),
        });

        const { tag } = schema.parse(req.params);

        const posts = await prisma.post.findMany({
            where: {
                tags: {
                    has: tag,
                },
            },
        });

        return posts;
    });
    app.get("/posts/:id", async (req, reply) => {
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
        const post = { ...posts, data: file.data };
        return post;
    });
    app.post("/newPost", async (req, reply) => {
        // const schema = z.object({
        // })

        console.log(req.body);
    });
}
