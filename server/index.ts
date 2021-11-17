import 'reflect-metadata'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { createSchema } from './createSchema'

const PORT = process.env.PORT || 8080

async function bootstrap() {
  const app = express()

  // ... Building schema here
  const typeSchemas = await createSchema()

  // Create the GraphQL server
  const server = new ApolloServer({
    schema: typeSchemas,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  })

  // Start the server
  await server.start()
  server.applyMiddleware({ app, path: '/__graphql' })
  app.listen(PORT, () => {
    console.log(`server is listening on http://localhost:${PORT}`)
  })
}

bootstrap()
