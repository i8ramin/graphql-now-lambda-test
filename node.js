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

server.start(() => console.log('Server is running on http://localhost:4000'))
