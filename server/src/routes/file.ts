import { FastifyInstance } from "fastify";
import { google } from "googleapis";

export async function fileRoutes(app: FastifyInstance) {
    const auth = new google.auth.GoogleAuth({
        keyFile: "./code-life-blog-42df71393fe9.json",
        scopes: ["https://www.googleapis.com/auth/drive"],
    });
    const driverService = google.drive({
        version: "v3",
        auth,
    });

    app.get("/file", async () => {
        const file = await driverService.files.get({
            fileId: "17WWcJQG4360DsMceDSQNkoPl0_38dU3x",
            alt: "media",
        });

        return file.data;
    });
}
