import { UserType } from "./user-type.model";
import { UserDto } from "./user.model";

export class UserInfo {
  id!: string;
  name!: string;
  userType!: UserType;
  token?: string;
  message?: string;
  user?: UserDto
}
