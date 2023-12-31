import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(console.log("log out success"));
  };
  return (
    <div className="navbar mb-4 bg-base-100 p-2">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link className="btn-ghost btn text-xl normal-case">
          Home Cook by Mosh
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-xl font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-amber-900"
                  : isPending
                  ? "pending"
                  : "text-gray-500"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-amber-900"
                  : isPending
                  ? "pending"
                  : "text-gray-500"
              }
              to="/chefs"
            >
              Our Chef
            </NavLink>
          </li>
          <li className="text-xl font-bold">
            <NavLink
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-amber-900"
                  : isPending
                  ? "pending"
                  : "text-gray-500"
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {loading ? (
          <div>Loading</div>
        ) : user ? (
          <button
            onClick={handleLogOut}
            className="btn-brown mr-2 text-xl font-bold"
          >
            Log Out
          </button>
        ) : (
          <>
            <Link to="/login" className="btn-brown mr-2 text-xl font-bold">
              Login
            </Link>
            <Link to="/register" className="btn-brown text-xl font-bold">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
