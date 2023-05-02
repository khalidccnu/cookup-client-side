import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

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
          <button
            role="button"
            className="btn btn-sm btn-outline"
            onClick={(_) => navigate("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
