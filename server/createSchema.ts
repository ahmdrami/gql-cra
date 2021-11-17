import { GraphQLSchema } from 'graphql'
import { buildSchema } from 'type-graphql'
import Container from 'typedi'

export const createSchema = async (): Promise<GraphQLSchema> => {
  return buildSchema({
    resolvers: [__dirname + '/modules/**/*.resolver.{ts,js}'],
    container: Container,
  })
}
