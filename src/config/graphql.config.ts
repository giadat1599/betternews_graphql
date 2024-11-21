import { join } from "path";

import { ApolloDriverConfig } from "@nestjs/apollo";
import { GqlOptionsFactory } from "@nestjs/graphql";

import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";

export class GraphqlConfigService implements GqlOptionsFactory {
  createGqlOptions(): ApolloDriverConfig {
    return {
      playground: false,
      autoSchemaFile: join(process.cwd(), "src/graphql/schema.gql"),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    };
  }
}
