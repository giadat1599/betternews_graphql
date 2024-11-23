import { Query, Resolver } from "@nestjs/graphql";

import { User } from "./user.type";
import { UserService } from "./user.service";

import { Serialize } from "@/interceptors/serialize.interceptor";

@Resolver(() => User)
export class UserQueryResolver {
  constructor(private readonly userService: UserService) {}

  @Serialize(User)
  @Query(() => [User])
  async users(): Promise<User[]> {
    return await this.userService.users();
  }
}
