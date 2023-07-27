import path from "path";
import { google } from "googleapis";
const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), "code-life-blog-42df71393fe9.json"),
    scopes: ["https://www.googleapis.com/auth/drive"],
});
export const driverService = google.drive({
    version: "v3",
    auth,
});
