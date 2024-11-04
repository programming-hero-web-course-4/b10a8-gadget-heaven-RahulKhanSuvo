import { Link, Outlet } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import { useState } from "react";

const DashBoard = () => {
  const [isActive, setIsActive] = useState({
    available: true,
    status: "available",
  });
  const handelIsActive = (status) => {
    if (status === "available") {
      setIsActive({
        available: true,
        status: "available",
      });
    } else {
      setIsActive({
        available: false,
        status: "selected",
      });
    }
  };
  return (
    <div className="">
      <div className="bg-[#9538E2]">
        <div className="container mx-auto">
          <SubHeading
            title={"Dashboard"}
            subTitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          ></SubHeading>
          <div className="flex py-4 justify-center items-center gap-2">
            <Link
              className={`${
                isActive.available
                  ? "text-[#9538E2] bg-white font-bold "
                  : "text-white"
              } px-12 border rounded-full py-3 md:py-4`}
              onClick={() => handelIsActive("available")}
              to={"/dashboard/cart"}
            >
              Cart
            </Link>

            <Link
              className={`px-12 border rounded-full py-3 md:py-4  ${
                isActive.available
                  ? "text-white"
                  : "text-[#9538E2] bg-white font-bold "
              }`}
              onClick={() => handelIsActive("selected")}
              to={"/dashboard/wishlist"}
            >
              Wishlist
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
