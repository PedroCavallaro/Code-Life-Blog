import fastify from "fastify";
import { postRoutes } from "./routes/post";
import Cors from "@fastify/cors";
import { emailRoutes } from "./routes/email";

async function Main() {
    const app = fastify();

    await app.register(postRoutes);
    await app.register(emailRoutes);
    await app.register(Cors, {
        origin: true,
    });

    await app
        .listen({
            port: 3333,
        })
        .then((s) => console.log("http://localhost:3333"));
}

Main();
