import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { getTicketsForEventId } from './application/ticketService'

const app = express()

// Define the GraphQL schema
const typeDefs = gql`
  type Ticket {
    section: String
    row: String
    seatNumber: String
    price: Float
  }

  type Query {
    tickets(eventId: String!): [Ticket]
  }
`

// Implement the resolvers
const resolvers = {
  Query: {
    tickets: (_: any, { eventId }: { eventId: string }) => getTicketsForEventId(eventId),
  },
}

// Create an Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers })

async function startApolloServer() {
  await server.start()

  // Apply the middleware to Express after server.start() is called
  server.applyMiddleware({ app })
}

// Call the function to start Apollo Server
startApolloServer().then(() => {
  // Start the server after Apollo Server is initialized
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })
})
