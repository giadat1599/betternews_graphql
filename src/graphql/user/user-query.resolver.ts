import { Query, Resolver } from "@nestjs/graphql";

import { User } from "./user.type";

@Resolver(() => User)
export class UserQueryResolver {
  @Query(() => User)
  user(): User {
    return {
      id: 1,
      username: "dat.truong",
      fullname: "Dat Truong",
    };
  }
}
