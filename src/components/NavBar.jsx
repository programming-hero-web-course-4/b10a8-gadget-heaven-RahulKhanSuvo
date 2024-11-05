import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useContext, useState } from "react";
import CartContext from "../Routes/CartContext";
import { FaBars } from "react-icons/fa";
const NavBar = () => {
  const { pathname } = useLocation();
  const { product, loves } = useContext(CartContext);
  const [isHere, setIsHere] = useState(false);
  return (
    <>
      <div
        className={`flex ${
          pathname === "/" ||
          pathname === "/category/Phone" ||
          pathname === "/category/Laptop" ||
          pathname === "/category/Accessories" ||
          pathname === "/category/Smart%20Watches"
            ? "text-white pt-6"
            : "text-black  py-6 "
        } justify-between`}
      >
        <div className="flex items-center gap-2">
          <button onClick={() => setIsHere(!isHere)} className="md:hidden">
            <FaBars />
          </button>
          <ul
            className={`${
              isHere ? "hidden" : ""
            } absolute z-50 top-[72px] bg-white p-4 md:hidden gap-8 items-center font-normal shadow-lg rounded-lg`}
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg bg-purple-600 text-white py-2 px-4 shadow-md"
                    : "text-gray-700 hover:bg-gray-100 rounded-lg py-2 px-4"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg bg-purple-600 text-white py-2 px-4 shadow-md"
                    : "text-gray-700 hover:bg-gray-100 rounded-lg py-2 px-4"
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg bg-purple-600 text-white py-2 px-4 shadow-md"
                    : "text-gray-700 hover:bg-gray-100 rounded-lg py-2 px-4"
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "rounded-lg bg-purple-600 text-white py-2 px-4 shadow-md"
                    : "text-gray-700 hover:bg-gray-100 rounded-lg py-2 px-4"
                }
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>

          <h3 className="font-bold text-lg">Gadget Heaven</h3>
        </div>
        <ul className=" hidden md:flex  gap-8 items-center font-normal">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "py-1 px-2 rounded-lg bg-gray-800"
                  : `${
                      pathname === "/" ||
                      pathname === "/category/Phone" ||
                      pathname === "/category/Laptop" ||
                      pathname === "/category/Accessories" ||
                      pathname === "/category/Smart%20Watches"
                        ? "text-white"
                        : "text-black"
                    }`
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "py-1 px-2 rounded-lg text-white bg-gray-800"
                  : `${
                      pathname === "/" ||
                      pathname === "/category/Phone" ||
                      pathname === "/category/Laptop" ||
                      pathname === "/category/Accessories" ||
                      pathname === "/category/Smart%20Watches"
                        ? ""
                        : "text-black"
                    }`
              }
              to={"/statistics"}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "py-1 px-2 rounded-lg text-white bg-gray-800"
                  : `${
                      pathname === "/" ||
                      pathname === "/category/Phone" ||
                      pathname === "/category/Laptop" ||
                      pathname === "/category/Accessories" ||
                      pathname === "/category/Smart%20Watches"
                        ? "text-white"
                        : "text-black"
                    }`
              }
              to={"/dashboard"}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "py-1 px-2 rounded-lg text-white bg-gray-800"
                  : `${
                      pathname === "/" ||
                      pathname === "/category/Phone" ||
                      pathname === "/category/Laptop" ||
                      pathname === "/category/Accessories" ||
                      pathname === "/category/Smart%20Watches"
                        ? "text-white"
                        : "text-black"
                    }`
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="flex gap-4 ">
          <div className="relative">
            <IoCartOutline className="text-white text-4xl bg-blue-600 p-2 rounded-full shadow-lg transition-transform transform hover:scale-105" />
            <p className="absolute text-xs text-orange-500 font-semibold -top-4 right-0">
              {product.length}
            </p>
          </div>
          <div className="relative">
            <CiHeart className="text-white bg-red-600 p-2 rounded-full shadow-lg text-4xl transition-transform transform hover:scale-105" />
            <p className="absolute text-xs text-lime-500 font-semibold -top-4 right-0">
              {loves.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
