import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import ChangePasswordPage from "./pages/auth/ChangePasswordPage";
import EditProfilePage from "./pages/auth/EditProfilePage";
import SignupPage from "./pages/auth/SignupPage";
import { ProductListPage } from "./pages/products/ProductListPage";
import { Layout } from "./util/Layout";
import { ErrorPage } from "./util/ErrorPage";
import { PrivateRoutes } from "./util/PrivateRoutes";
import { HomePage } from "./pages/auth/HomePage";
import { MustLoginPage } from "./pages/auth/MustLoginPage";
import { NotAllowedPage } from "./pages/auth/NotAllowedPage";
import { UserListPage } from "./pages/users/UserListPage";
import { AdminRoute } from "./util/AdminRoute";
import { UserDeletePage } from "./pages/users/UserDeletePage";
import { UserEditPage } from "./pages/users/UserEditPage";
import { UserDetailPage } from "./pages/users/UserDetailPage";
import { ProductDetailPage } from "./pages/products/ProductDetailPage";
import { ProductCreatePage } from "./pages/products/ProductCreatePage";
import { ProductDeletePage } from "./pages/products/ProductDeletePage";
import { ProductEditPage } from "./pages/products/ProductEditPage";
import UserCreatePage from "./pages/users/UserCreatePage";
import { LogoutPage } from "./pages/auth/LogoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "logout", element: <LogoutPage /> },
      { path: "must-login", element: <MustLoginPage /> },
      { path: "not-allowed", element: <NotAllowedPage /> },
      { path: "signup", element: <SignupPage /> },
    ],
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "products",
        element: <ProductListPage />,
      },
      {
        path: "products/detail/:id",
        element: <ProductDetailPage />,
      },
      { path: "change-password", element: <ChangePasswordPage /> },
      { path: "edit-profile", element: <EditProfilePage /> },
    ],
  },
  {
    element: <AdminRoute />,
    children: [
      {
        path: "users",
        element: <UserListPage />,
        children: [
          { path: "create", element: <UserCreatePage /> },
          { path: "delete/:id", element: <UserDeletePage /> },
          { path: "edit/:id", element: <UserEditPage /> },
          { path: "detail/:id", element: <UserDetailPage /> },
        ],
      },
      { path: "products/create", element: <ProductCreatePage /> },
      { path: "products/delete/:id", element: <ProductDeletePage /> },
      { path: "products/edit/:id", element: <ProductEditPage /> },
    ],
  },
]);
