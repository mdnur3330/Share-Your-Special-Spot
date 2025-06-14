import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Authantication/AuthProvider";

const NavBar = () => {
  const navigate = useNavigate();
  const { currentUser, logOut } = useContext(AuthContext);
  const handellogOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="w-10/12 mx-auto border-b border-gray-400 py-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-6 items-center mr-3">
          <div className="dropdown lg:hidden">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div>

          <h4>histrucal</h4>
        </div>
        <ul className="lg:flex gap-5 hidden">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>All Artifacts</NavLink>
          </li>
          <li>
            <NavLink to={`liked-items/${currentUser?.email}`}>myLiked Artifacts</NavLink>
          </li>
          <li>
            <NavLink></NavLink>
          </li>
        </ul>
        <div className="">
          <div className="flex items-center gap-2">
            <label className="toggle text-base-content">
              <input
                type="checkbox"
                value="sunset"
                className="theme-controller"
              />

              <svg
                aria-label="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </g>
              </svg>

              <svg
                aria-label="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </g>
              </svg>
            </label>

            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            {currentUser ? (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={currentUser?.photoURL}
                    />
                  </div>
                </div>

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <p>{currentUser?.displayName}</p>
                  </li>
                  <li>
                    <Link to={`/my-artifact/${currentUser?.email}`}>2My Artifacts</Link>
                  </li>
                  <li>
                    <Link>Liked Artifacts Route</Link>
                  </li>
                  <li>
                    <button onClick={() => handellogOut()}>Log Out</button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to={"/login"} className="btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
