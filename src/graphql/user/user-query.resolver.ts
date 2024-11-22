import { Query, Resolver } from "@nestjs/graphql";

import { User } from "./user.type";
import { UserService } from "./user.service";

@Resolver(() => User)
export class UserQueryResolver {
  constructor(private readonly userService: UserService) {}
  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await this.userService.users();
    return users.map((user) => ({ id: user.id, username: user.username }));
  }
}
