import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const NavBar = () => {
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
          <IoCartOutline
            size={24}
            className="text-black bg-white p-1 rounded-full"
          />
          <CiHeart size={24} className="text-black bg-white p-1 rounded-full" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
