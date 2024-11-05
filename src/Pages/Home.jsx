import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div className=" ">
      <div className="relative">
        <Heading></Heading>
        <div className=" absolute -translate-y-72   lg:translate-x-80 ">
          <Banner></Banner>
        </div>
        <h3 className="text-center mt-[460px] font-bold text-4xl">
          Explore Cutting-Edge Gadgets
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-6 container mx-auto mt-12">
        <div>
          <Categories categories={categories}></Categories>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Home;
