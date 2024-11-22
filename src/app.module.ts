import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigModule } from "@nestjs/config";

import { DrizzleModule } from "./drizzle/drizzle.module";

import { AppController } from "@/app.controller";
import { GraphqlConfigService } from "@/config/graphql.config";
import { UserModule } from "@/graphql/user/user.module";

@Module({
  imports: [
    DrizzleModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({ driver: ApolloDriver, useClass: GraphqlConfigService }),
  ],
  controllers: [AppController],
})
export class AppModule {}
