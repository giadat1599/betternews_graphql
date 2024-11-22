import { Module } from "@nestjs/common";

import { UserQueryResolver } from "./user-query.resolver";
import { UserMutationResolver } from "./user-mutation.resolver";
import { UserService } from "./user.service";

import { DrizzleModule } from "@/drizzle/drizzle.module";

@Module({
  imports: [DrizzleModule],
  providers: [UserQueryResolver, UserMutationResolver, UserService],
})
export class UserModule {}
