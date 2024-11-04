import Banner from "../components/Banner";
import Heading from "../components/Heading";

const Home = () => {
  return (
    <div>
      <div className="relative">
        <Heading></Heading>
        <div className=" absolute -translate-y-72   lg:translate-x-80 ">
          <Banner></Banner>
        </div>
        <h3 className="text-center mt-[460px] font-bold text-4xl">
          Explore Cutting-Edge Gadgets
        </h3>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
