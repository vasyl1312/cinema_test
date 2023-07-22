"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const ticketService_1 = require("./application/ticketService");
const app = (0, express_1.default)();
// Define the GraphQL schema
const typeDefs = (0, apollo_server_express_1.gql) `
  type Ticket {
    section: String
    row: String
    seatNumber: String
    price: Float
  }

  type Query {
    tickets(eventId: String!): [Ticket]
  }
`;
// Implement the resolvers
const resolvers = {
    Query: {
        tickets: (_, { eventId }) => (0, ticketService_1.getTicketsForEventId)(eventId),
    },
};
// Create an Apollo Server instance
const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers });
async function startApolloServer() {
    await server.start();
    // Apply the middleware to Express after server.start() is called
    server.applyMiddleware({ app });
}
// Call the function to start Apollo Server
startApolloServer().then(() => {
    // Start the server after Apollo Server is initialized
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
    });
});
