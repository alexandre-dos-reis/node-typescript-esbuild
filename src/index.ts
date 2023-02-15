import Fastify from "fastify";
import { ucFirst } from "~/deep/functions/ucFirst";

const fastify = Fastify({
  logger: true,
});

fastify.get("/", async () => ({ hello: ucFirst("test") }));

(async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
