import fastify from "fastify";
import { postRoutes } from "./routes/post";
import Cors from "@fastify/cors";
import { emailRoutes } from "./routes/email";

const app = fastify();

app.register(postRoutes);
app.register(emailRoutes);
app.register(Cors, {
    origin: true,
});

app.listen({
    port: 3333,
}).then((s) => console.log("http://localhost:3333"));
