import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/Auth.jsx";

const Nav = () => {
  const { userInfo, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-base-200/70">
      <div className="container">
        <div className="navbar justify-between">
          <h1 className="font-bold text-xl">CookUp</h1>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  "px-3 py-2 rounded-2xl" + (isActive ? " bg-accent" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/blog"}
                className={({ isActive }) =>
                  "px-3 py-2 rounded-2xl" + (isActive ? " bg-accent" : "")
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
          {userInfo?.uid ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={userInfo.photoURL} alt="" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu menu-compact mt-3 p-2 w-52 bg-base-100 rounded-box shadow"
              >
                <li>
                  <Link to={""}>Profile</Link>
                </li>
                <li>
                  <Link to={"/login"} onClick={(_) => logOut()}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                "rounded-lg" + (isActive ? " bg-accent" : "")
              }
            >
              <button role="button" className="btn btn-sm btn-outline">
                Login
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
