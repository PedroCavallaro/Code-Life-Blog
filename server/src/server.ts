import fastify from "fastify";
import { fileRoutes } from "./routes/file";
import Cors from "@fastify/cors";

const app = fastify();

app.register(fileRoutes);
app.register(Cors, {
    origin: true,
});

app.listen({
    port: 3333,
}).then((s) => console.log("http://localhost:3333"));
