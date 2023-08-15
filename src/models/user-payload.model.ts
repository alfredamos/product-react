import { UserType } from "./auth/user-type.model";

export class UserPayload{
  id: string = "";
  name: string = "";
  userType: UserType = UserType.Customer;
}