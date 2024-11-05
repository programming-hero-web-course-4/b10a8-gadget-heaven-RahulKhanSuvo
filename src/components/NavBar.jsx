import { NavLink, useLocation } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import CartContext from "../Routes/CartContext";

const NavBar = () => {
  const { pathname } = useLocation();
  const { product, loves } = useContext(CartContext);

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
        <h3 className="font-bold text-lg">Gadget Heaven</h3>
        <ul className="flex gap-8 items-center font-normal">
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
        <div className="flex gap-3">
          <div className="relative">
            <IoCartOutline
              size={24}
              className="text-black bg-white p-1 rounded-full"
            />
            <p className="absolute text-xs text-black -top-4 right-0">
              {product.length}
            </p>
          </div>
          <div className="relative">
            <CiHeart
              size={24}
              className="text-black bg-white p-1 rounded-full"
            />
            <p className="absolute text-xs text-black -top-4 right-0">
              {loves.length}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
