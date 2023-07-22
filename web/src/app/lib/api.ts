import axios from "axios";

export const api = axios.create({
    baseURL: "https://code-life-server.vercel.app/",
});
