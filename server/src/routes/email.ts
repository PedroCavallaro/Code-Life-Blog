import { FastifyInstance } from "fastify";
import { google } from "googleapis";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { transporter } from "../lib/transporter";

export async function postRoutes(app: FastifyInstance) {
    app.post("/email", async (req) => {
        const schema = z.object({
            email: z.string().email(),
        });

        const { email } = schema.parse(req.body);

        // let isEmailSaved = ""

        // isEmailSaved = await prisma.email
    });
}
