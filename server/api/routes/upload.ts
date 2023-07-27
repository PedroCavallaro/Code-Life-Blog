import { FastifyInstance } from "fastify";
import path from "path";
import fs from "fs";
import { pipeline } from "stream";
import { driverService } from "../lib/drive";
import { promisify } from "node:util";

export async function uploadRoutes(app: FastifyInstance) {
    app.post("/upload", async (req, reply) => {
        const upload = await req.file();

        const pump = promisify(pipeline);

        if (!upload) return reply.status(300).send();

        const writeStream = fs.createWriteStream(
            path.resolve(process.cwd(), "uploads", upload.filename)
        );

        await pump(upload.file, writeStream);

        const requestBody = {
            name: upload.filename,
            fields: "id",
            parents: [process.env.POSTS_FOLDER_ID!],
        };

        const uploadDrive = await driverService.files.create({
            requestBody,
            media: {
                mimeType: upload.mimetype,
                body: fs.createReadStream(
                    path.join(process.cwd(), "uploads", upload.filename)
                ),
            },
        });
        return uploadDrive.data;
    });
}
