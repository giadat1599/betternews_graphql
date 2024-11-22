import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schemas";

export const Drizzle = Symbol("dirzzle-connection");

@Module({
  providers: [
    {
      provide: Drizzle,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databaseUrl = configService.getOrThrow("DATABASE_URL");
        const pool = new Pool({
          connectionString: databaseUrl,
        });

        return drizzle(pool, {
          schema,
        });
      },
    },
  ],
  exports: [Drizzle],
})
export class DrizzleModule {}
