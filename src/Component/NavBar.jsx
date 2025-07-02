
import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Authantication/AuthProvider";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  const navigate = useNavigate();
  const { currentUser, logOut } = useContext(AuthContext);

  const handellogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch(() => {});
  };

  return (
    <div className="bg-[#1B1F3B] text-white shadow-md sticky top-0 z-50">
      <div className="w-11/12 mx-auto flex justify-between items-center py-4">
        {/* Logo & Mobile Menu */}
        <div className="flex items-center gap-6">
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h10"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-[#1B1F3B] rounded-box w-52 space-y-2"
            >
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : ""}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/all-artifact" className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : ""}>All Artifacts</NavLink>
              </li>
              <li>
                <NavLink to="/my-artifact" className={({ isActive }) => isActive ? "text-yellow-400 font-bold" : ""}>My Added Spot</NavLink>
              </li>
            
            </ul>
          </div>

          <h4 className="text-2xl font-bold text-yellow-400">WanderNest</h4>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 text-lg font-medium">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-yellow-300"}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-artifact" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-yellow-300"}>
              All Artifacts
            </NavLink>
          </li>
          <li>
            <NavLink to="/my-artifact" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-yellow-300"}>
             My Added Spot
            </NavLink>
          </li>
          <li>
            <NavLink to="/liked-items" className={({ isActive }) => isActive ? "text-yellow-400" : "hover:text-yellow-300"}>
             My Liked Spot
            </NavLink>
          </li>
        </ul>

        <div>
          {/* User */}
          {currentUser ? (
            <div>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full border-2 border-yellow-400">
                  <img src={currentUser?.photoURL} alt="profile" />
                </div>
              </label>
              
                  <button onClick={handellogOut} className="btn bg-yellow-400 hover:bg-yellow-300 text-[#1B1F3B] font-semibold px-5">Log Out</button>
            </div>
          ) : (
            <Link to="/login" className="btn bg-yellow-400 hover:bg-yellow-300 text-[#1B1F3B] font-semibold px-5">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
