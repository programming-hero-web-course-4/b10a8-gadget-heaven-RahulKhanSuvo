import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const NavBar = () => {
  return (
    <>
      <div className="flex text-white justify-between pt-4">
        <h3 className="font-bold text-base">Gadget Heaven</h3>
        <ul className="flex gap-12 items-center font-normal">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/statistics"}>Statistics</NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
        </ul>
        <div className="flex gap-2">
          <IoCartOutline className="size-8 text-black bg-white p-1 rounded-full"></IoCartOutline>
          <CiHeart className="size-8 text-black bg-white p-1 rounded-full"></CiHeart>
        </div>
      </div>
    </>
  );
};

export default NavBar;
