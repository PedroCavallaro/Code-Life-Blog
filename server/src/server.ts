import fastify from "fastify";
import { postRoutes } from "./routes/post";
import Cors from "@fastify/cors";

const app = fastify();

app.register(postRoutes);
app.register(Cors, {
    origin: true,
});

app.listen({
    port: 3333,
}).then((s) => console.log("http://localhost:3333"));
