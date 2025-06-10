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
      <div className="flex items-center justify-around">
        <div>
          <h4>histrucal</h4>
        </div>
        <ul className="flex gap-5">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>All Artifacts</NavLink>
          </li>
          <li>
            <NavLink>Add Artifacts</NavLink>
          </li>
          <li>
            <NavLink>Home</NavLink>
          </li>
        </ul>
        <div className="bg-base-100 shadow-sm">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            {
              currentUser ? <div className="dropdown dropdown-end">
               
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
                  <Link>My Artifacts </Link>
                </li>
                <li>
                  <Link>Liked Artifacts Route</Link>
                </li>
                <li>
                  <button onClick={() => handellogOut()}>Log Out</button>
                </li>
              </ul>
            </div> : <Link to={'/login'} className="btn">Login</Link>
            }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
