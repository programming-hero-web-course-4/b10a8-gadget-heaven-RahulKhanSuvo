import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const NavBar = () => {
  return (
    <>
      <div className="flex text-white justify-between ">
        <h3 className="font-bold text-base">Gadget Heaven</h3>
        <ul className="flex gap-12 items-center font-">
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
        <div className="flex">
          <IoCartOutline></IoCartOutline>
          <CiHeart></CiHeart>
        </div>
      </div>
    </>
  );
};

export default NavBar;
