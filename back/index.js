import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { importSchema } from "graphql-import";
import mongoose from "mongoose";
import "dotenv/config";
const typeDefs = importSchema("./graphql/typeDefs/sailor.graphql");
import resolvers from "./graphql/resolvers/sailor.resolver.js";

async function main() {
    await mongoose
        .connect(`${process.env.MONGO_URI}`, {
            autoIndex: true,
        })
        .then(() => console.log("Connecté à la base de données"))
        .catch((err) => console.log(err));

    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
}
main();
