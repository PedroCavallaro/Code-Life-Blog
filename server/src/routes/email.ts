import { FastifyInstance } from "fastify";
import { z } from "zod";
import { prisma } from "../lib/prisma";

export async function emailRoutes(app: FastifyInstance) {
    app.post("/email", async (req) => {
        const schema = z.object({
            email: z.string().email(),
        });

        const { email } = schema.parse(req.body);

        let isEmailSaved = await prisma.email.findUnique({
            where: {
                email,
            },
        });

        if (!isEmailSaved) {
            isEmailSaved = await prisma.email.create({
                data: {
                    email,
                },
            });
        }
        return isEmailSaved;
    });
}
