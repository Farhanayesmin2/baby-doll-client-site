import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import profile from "../../../image/Whatsapp-Dp-Princess-Cute-Doll-Images4.jpg";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // this is for user and logOut
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className=" bg-white shadow-md font-sans w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl  text-[#56d3c4] hidden lg:block from-current font-poppins ">
              <span className="flex justify-center h-8  items-center font-bold">
                <img
                  src="https://img.freepik.com/premium-vector/logo-desaign-baby-doll-vector_727263-3.jpg?w=2000"
                  className="flex justify-center h-16 animate-pulse  items-center font-bold"
                />
                Baby Doll{" "}
              </span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline font-bold space-x-4 font-poppins">
              {user ? (
                <>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "5px solid red" : "none",
                        color: isActive ? "#c09da9" : "#56d3c4",
                      };
                    }}
                    to="/mytoys"
                    className="text-[#56d3c4] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
                    activeClassName="border-current text-red-700"
                  >
                    My Toys
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "5px solid red" : "none",
                        color: isActive ? "#c09da9" : "#56d3c4",
                      };
                    }}
                    to="/addtoys"
                    className="text-[#56d3c4] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
                    activeClassName="border-current text-red-700"
                  >
                    Add A Toy
                  </NavLink>

                  <NavLink
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "5px solid red" : "none",
                        color: isActive ? "#c09da9" : "#56d3c4",
                      };
                    }}
                    to="/"
                    className="text-[#56d3c4] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#c09da9] active:text-[#c09da9]"
                    activeClassName="border-current text-red-700"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "5px solid red" : "none",
                        color: isActive ? "#c09da9" : "#56d3c4",
                      };
                    }}
                    to="/blog"
                    className="text-[#56d3c4] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
                    activeClassName="border-current text-red-700"
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "5px solid red" : "none",
                        color: isActive ? "#c09da9" : "#56d3c4",
                      };
                    }}
                    to="/alltoys"
                    className="text-[#56d3c4] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
                    activeClassName="border-current text-red-700"
                  >
                    All Toys
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "5px solid red" : "none",
                        color: isActive ? "#c09da9" : "#56d3c4",
                      };
                    }}
                    to="/"
                    className="text-[#56d3c4] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#c09da9] active:text-[#c09da9]"
                    activeClassName="border-current text-red-700"
                  >
                    Home
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "5px solid red" : "none",
                        color: isActive ? "#c09da9" : "#56d3c4",
                      };
                    }}
                    to="/blog"
                    className="text-[#56d3c4] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
                    activeClassName="border-current text-red-700"
                  >
                    Blog
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => {
                      return {
                        borderBottom: isActive ? "5px solid red" : "none",
                        color: isActive ? "#c09da9" : "#56d3c4",
                      };
                    }}
                    to="/alltoys"
                    className="text-[#56d3c4] border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700 active:text-red-700"
                    activeClassName="border-current text-red-700"
                  >
                    All Toys
                  </NavLink>
                </>
              )}
            </div>
          </div>

          <div className="hidden md:block font-poppins">
            <div className="flex items-center">
              {user ? (
                <div className="flex justify-center items-center">
                  <button className="btn btn-ghost btn-circle">
                    <Link to="/profile">
                      <div className="avatar online">
                        <div className="w-12 h-12 rounded-full ">
                          <abbr
                            title={
                              user.displayName ? user.displayName : user.email
                            }
                          >
                            <div className=" flex-shrink-0">
                              {/* <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border rounded-full dark:text-gray-100 dark:border-gray-900"></span> */}
                              <img
                                src={`${
                                  user.photoURL ? user.photoURL : profile
                                }`}
                                alt=""
                                className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                              />
                            </div>
                          </abbr>
                        </div>
                      </div>
                    </Link>
                  </button>

                  <Link className="py-2  mx-1 px-4 bg-[#56d3c4] text-black font-semibold rounded-lg shadow-md hover:bg-[#c09da9] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                    <button onClick={logOut} className="">
                      LogOut
                    </button>
                  </Link>
                </div>
              ) : (
                <Link
                  className="py-2 mx-1 px-4 bg-[#56d3c4] text-black  font-semibold rounded-lg shadow-md hover:bg-[#c09da9] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  to="/login"
                >
                  <button>Login</button>
                </Link>
              )}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:text-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 font-bold text-xl  pt-2 pb-3 space-y-1 ">
          <div class="flex h-screen flex-col justify-between border-e bg-white ">
            <div class="px-4 py-6">
              <span class="grid h-10 w-[100%] place-content-center rounded-lg bg-gray-100 text-xl text-gray-600">
                <span className="flex justify-center h-8  items-center font-bold">
                  <img
                    src="https://img.freepik.com/premium-vector/logo-desaign-baby-doll-vector_727263-3.jpg?w=2000"
                    className="flex justify-center h-16 animate-pulse  items-center font-bold"
                  />
                  Baby Doll{" "}
                </span>
              </span>

              <nav aria-label="Main Nav" class=" flex flex-col">
                <NavLink
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "5px solid red" : "none",
                      color: isActive ? "#c09da9" : "#56d3c4",
                    };
                  }}
                  to="/"
                  className="text-[#56d3c4] border-b-4 border-transparent leading-[3rem] hover:border-current hover:text-red-700 active:text-red-700"
                  activeClassName="border-current text-red-700"
                >
                  Home
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "5px solid red" : "none",
                      color: isActive ? "#c09da9" : "#56d3c4",
                    };
                  }}
                  to="/chef"
                  className="text-[#56d3c4] border-b-4 border-transparent leading-[3rem]  hover:border-current hover:text-red-700 active:text-red-700"
                  activeClassName="border-current text-red-700"
                >
                  All Chef
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "5px solid red" : "none",
                      color: isActive ? "#c09da9" : "#56d3c4",
                    };
                  }}
                  to="/restaurant"
                  className="text-[#56d3c4] border-b-4 border-transparent leading-[3rem]  hover:border-current hover:text-red-700 active:text-red-700"
                  activeClassName="border-current text-red-700"
                >
                  Restaurant
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      borderBottom: isActive ? "5px solid red" : "none",
                      color: isActive ? "#c09da9" : "#56d3c4",
                    };
                  }}
                  to="/blog"
                  className="text-[#56d3c4] border-b-4 border-transparent leading-[3rem] hover:border-current hover:text-red-700 active:text-red-700"
                  activeClassName="border-current text-red-700"
                >
                  Blog
                </NavLink>

                <div className="flex items-center">
                  {user ? (
                    <div className="flex justify-center items-center">
                      <button className="btn btn-ghost btn-circle">
                        <Link to="/profile">
                          <div className="avatar online">
                            <div className="w-12 h-12 rounded-full ">
                              <abbr
                                title={
                                  user.displayName
                                    ? user.displayName
                                    : user.email
                                }
                              >
                                <div className="relative flex-shrink-0">
                                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                                  <img
                                    alt=""
                                    className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                                  />
                                </div>
                              </abbr>
                            </div>
                          </div>
                        </Link>
                      </button>
                      <Link className="py-2  mx-1 px-4 bg-[#56d3c4] text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        <button className="">LogOut</button>
                      </Link>
                    </div>
                  ) : (
                    <Link
                      className="py-2 mx-1 px-4 bg-[#56d3c4] text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      to="/login"
                    >
                      <button>Login</button>
                    </Link>
                  )}
                </div>
              </nav>
            </div>

            <div class=" inset-x-0 bottom-0 border-t border-gray-100">
              <a
                href="#"
                class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
              >
                <div className="hidden md:block">
                  <div className="flex items-center">
                    <div className="flex justify-center items-center">
                      <button className="btn btn-ghost btn-circle">
                        <Link to="/profile">
                          <div className="avatar online">
                            <div className="w-12 h-12 rounded-full ">
                              <abbr>
                                <div className="relative flex-shrink-0">
                                  <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border rounded-full dark:text-gray-100 dark:border-gray-900"></span>
                                  <img
                                    src=""
                                    alt=""
                                    className="w-12 h-12 border rounded-full dark:bg-gray-500 dark:border-gray-700"
                                  />
                                </div>
                              </abbr>
                            </div>
                          </div>
                        </Link>
                      </button>
                      <Link className="py-2  mx-1 px-4 bg-[#56d3c4] text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        <button className="">LogOut</button>
                      </Link>
                    </div>

                    <Link
                      className="py-2 mx-1 px-4 bg-[#56d3c4] text-white font-semibold rounded-lg shadow-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                      to="/login"
                    >
                      <button>Login</button>
                    </Link>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
