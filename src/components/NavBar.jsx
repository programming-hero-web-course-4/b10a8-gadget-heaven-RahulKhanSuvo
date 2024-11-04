import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { useContext } from "react";
import CartContext from "../Routes/CartContext";

const NavBar = () => {
  const { product, loves } = useContext(CartContext);

  return (
    <>
      <div className="flex text-white justify-between pt-4 px-4">
        <h3 className="font-bold text-lg">Gadget Heaven</h3>
        <ul className="flex gap-8 items-center font-normal">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
              to={"/statistics"}
            >
              Statistics
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "text-white"
              }
              to={"/dashboard"}
            >
              Dashboard
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
