import { Gender } from "./gender.model";
import { UserType } from "./user-type.model";

export class UserDto {
  id?: string = "";
  name: string = "";
  email: string = "";
  phone: string = "";
  password: string = "";
  confirmPassword?: string = "";
  userType?: UserType;
  gender: Gender = Gender.Male;
}
