import { FastifyInstance } from "fastify";
import { pipeline } from "node:stream";
import { promisify } from "node:util";
import fs from "fs";
import { driverService } from "../lib/drive";

// const pump = promisify(pipeline);

export async function uploadRoutes(app: FastifyInstance) {
    app.post("/upload", async (req, reply) => {
        const upload = await req.file();

        if (!upload) return reply.status(400).send();

        const uploadDrive = await driverService.files.create({
            requestBody: {
                name: "teste2.txt",
                mimeType: "text/plain",
            },
            media: {
                mimeType: "text/plain",
                body: fs.createReadStream("./teste2.txt", "utf-8"),
            },
        });

        return uploadDrive.data;
    });
}
