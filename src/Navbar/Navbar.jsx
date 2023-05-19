import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "../pages/provider/Authprovider";
import { FaHamburger } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const { user, logOut } = useContext(Authcontext);
  const [open, setOpen] = useState(false);
  const logoutBtn = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="bg-[#66347F] text-white font-serif font-bold  md:mx-12 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center  gap-3">
          <img
            src="https://images.unsplash.com/photo-1612505995758-b795f2e5d6d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="w-10 h-10 rounded-full"
          />
          <h2 className="text-3xl">
            <span className="text-[#FFD95A] "> Dolls </span>Haunter
          </h2>
        </div>
        <div>
          <ul
            className={`md:flex gap-8 md:bg-transparent bg-[#643843] font-bold md:static absolute text-xl items-center  ${
              open ? "top-20 right-7 p-3 " : "-top-48 right-0"
            }`}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isActive ? "text-[#FFD95A]" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alltoy"
                className={({ isActive, isPending }) =>
                  isActive ? "text-[#FFD95A]" : ""
                }
              >
                All Toys
              </NavLink>
            </li>
            {user && (
              <li>
                <NavLink
                  to="/mytoys"
                  className={({ isActive, isPending }) =>
                    isActive ? "text-[#FFD95A]" : ""
                  }
                >
                  My Toys
                </NavLink>
              </li>
            )}
            {user && (
              <li>
                <NavLink
                  to="/add"
                  className={({ isActive, isPending }) =>
                    isActive ? "text-[#FFD95A]" : ""
                  }
                >
                  Add A Toy
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isActive ? "text-[#FFD95A]" : ""
                }
              >
                Blogs
              </NavLink>
            </li>
            {user ? (
              <div className="flex  items-center gap-2">
                <img
                  src={user.photoURL}
                  className="w-10 h-10 rounded-full"
                  alt={user.displayName}
                  title={user.displayName && user.displayName}
                />

                <button onClick={logoutBtn}>Logout</button>
              </div>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isActive ? "text-[#FFD95A]" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        {/* hambarg menu */}
        <div className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <ImCross /> : <FaHamburger />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// trF$%3
