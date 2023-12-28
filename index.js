const fastify = require("fastify")({
  logger: true,
});

fastify.get("/", function (_, reply) {
  reply.send({ hello: "hello fastify!" });
});

fastify.listen({ port: 8000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  console.log(`YOUR FASTIFY SERVER RUNNINT AT: ${address}`);
});
