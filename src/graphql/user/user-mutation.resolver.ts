import { Args, Mutation, Resolver } from "@nestjs/graphql";

import { User } from "./user.type";

@Resolver(() => User)
export class UserMutationResolver {
  @Mutation(() => User)
  updateUser(@Args({ name: "name" }) name: string): User {
    return {
      id: 1,
      fullname: name,
      username: name,
    };
  }
}
