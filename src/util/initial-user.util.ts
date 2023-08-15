import { UserInfo } from "../models/auth/user-info.model";
import { UserType } from "../models/auth/user-type.model";

export const initialUser: UserInfo = {
  id: "",
  name: "",
  userType: UserType.Customer,
  token: "",
};
