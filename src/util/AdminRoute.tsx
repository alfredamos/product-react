import { Navigate, Outlet } from "react-router-dom";
import { UserType } from "../models/auth/user-type.model";
import { authService } from "../services/auth.service";
import { NavBar } from "./NavBar";

export function AdminRoute() {
  
  const {userType } = authService.getLocalAuthUser();
  const isAdmin = userType === UserType.Admin;

  if (!isAdmin) return <Navigate replace to="/not-allowed" />;

  return (
    <>
       <NavBar /> 
      <Outlet />
    </>
  );
}
