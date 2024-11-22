import { Inject, Injectable } from "@nestjs/common";

import { Drizzle } from "@/drizzle/drizzle.module";
import { DrizzleDB } from "@/drizzle/drizzle.type";

@Injectable()
export class UserService {
  constructor(@Inject(Drizzle) private readonly db: DrizzleDB) {}

  async users() {
    return this.db.query.userTable.findMany();
  }
}
