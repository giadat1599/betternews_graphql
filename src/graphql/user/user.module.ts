import { Module } from "@nestjs/common";

import { UserQueryResolver } from "./user-query.resolver";
import { UserMutationResolver } from "./user-mutation.resolver";

@Module({
  providers: [UserQueryResolver, UserMutationResolver],
})
export class UserModule {}
