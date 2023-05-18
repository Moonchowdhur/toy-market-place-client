import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
          <ul className="flex text-xl items-center gap-5">
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
            {/* <li>
              <NavLink
                to="/mytoys"
                className={({ isActive, isPending }) =>
                  isActive ? "text-[#FFD95A]" : ""
                }
              >
                My Toys
              </NavLink>
            </li>
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
            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isActive ? "text-[#FFD95A]" : ""
                }
              >
                Blog
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
