const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'world'}`
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({ ...req })
})
const { PORT = 3000 } = process.env

server.start({
  port: PORT
}, ({ port }) => console.log(`Server is running on PORT ${port}`))