const { ApolloServer } = require("apollo-server");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const fs = require("fs");
const path = require("path");

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const Subscription = require("./resolvers/Subscription");

const { getUserId, noToken } = require("./utils");

const resolvers = {
  Query,
  Mutation,
  // Subscription,
};

const server = new ApolloServer({
  typeDefs: [
    fs.readFileSync(path.join(__dirname, "./schema.graphql"), "utf8"),
    fs.readFileSync(path.join(__dirname, "./users/schema.graphql"), "utf8"),
  ],
  resolvers,
  context: ({ req }) => {
    return {
      ...req,
      prisma,
      userId: req && req.headers.authorization ? getUserId(req) : null,
    };
  },
});

server
  .listen()
  .then(({ url }) => console.log(`Servidor escuchando en el puerto ${url}`));
