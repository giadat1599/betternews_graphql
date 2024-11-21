import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { AppController } from "@/app.controller";
import { GraphqlConfigService } from "@/config/graphql.config";
import { UserModule } from "@/graphql/user/user.module";

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({ driver: ApolloDriver, useClass: GraphqlConfigService }),
  ],
  controllers: [AppController],
})
export class AppModule {}
