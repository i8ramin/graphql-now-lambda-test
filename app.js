// const http = require('http')
// const { PORT = 3000 } = process.env

// http.createServer((req, res) => {
//   res.end('Hello World from app.js\n')
// }).listen(PORT)

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
