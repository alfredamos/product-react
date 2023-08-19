import { Link, NavLink } from "react-router-dom";
import { authService } from "../services/auth.service";
import { useObservable } from "../hooks/useObservable";
import { AuthApiResponse } from "../models/auth/api-response.model";
import { UserType } from "../models/auth/user-type.model";

export function NavBar() {
  const authUser = useObservable<AuthApiResponse>(
    authService.authUser$,
    new AuthApiResponse()
  );

  const isLoggedIn = authUser?.isLoggedIn;
  const isAdmin = authUser.userType === UserType.Admin;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/products">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-5">
                <NavLink
                  to="/"
                  className="nav-link active mx-3"
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item mx-5">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              {isAdmin && (
                <li className="nav-item mx-5">
                  <NavLink to="/users" className="nav-link">
                    Users
                  </NavLink>
                </li>
              )}
            </ul>
            <ul className="navbar-nav d-flex" style={{ listStyle: "none" }}>
              {isLoggedIn && (
                <li className="nav-item dropdown mx-5">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Settings
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink to="/change-password" className="dropdown-item">
                        Change Password
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/edit-profile" className="dropdown-item">
                        Edit Profile
                      </NavLink>
                    </li>
                  </ul>
                </li>
              )}
              {!isLoggedIn && (
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link active align-self-auto"
                    aria-current="page"
                  >
                    Login
                  </NavLink>
                </li>
              )}
              {isAdmin && (
                <li className="nav-item mx-5 align-self-auto">
                  <NavLink
                    to="/admin-panel"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Admin
                  </NavLink>
                </li>
              )}
              {isLoggedIn && (
                <li className="nav-item mx-5 align-self-auto">
                  <NavLink
                    to="/logout"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Logout
                    
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/*  <AlertModal
        modalButtonClose="Back"
        modalButtonHandler={logout}
        modalButtonSave="Logout"
        modalMessage="Do you really want to Logout?"
        modalTitle="Logout Confirmation!"
      /> */}
    </>
  );
}
