import fastify from "fastify";
import Cors from "@fastify/cors";
import multipart from "@fastify/multipart";
import jwt from "@fastify/jwt";
import { postRoutes } from "./routes/post";
import { emailRoutes } from "./routes/email";
import { uploadRoutes } from "./routes/upload";

async function Main() {
    const app = fastify();
    await app.register(multipart);
    await app.register(Cors, {
        origin: true,
    });
    await app.register(jwt, {
        secret: "d6ft7gyjiokptcresxrcutviybunimo,ok9u8y97t6o85dircgvjhbjkl",
    });
    await app.register(postRoutes);
    await app.register(emailRoutes);
    await app.register(uploadRoutes);
    await app
        .listen({
            port: 3333,
        })
        .then((s) => console.log("http://localhost:3333"));
}

Main();
