import { UserType } from "./user-type.model";

export class AuthApiResponse{
  message: string = "";
  token: string = "";
  isLoggedIn: boolean = false;
  userType?: UserType = UserType.Customer;
}