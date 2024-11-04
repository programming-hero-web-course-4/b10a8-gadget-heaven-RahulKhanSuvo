import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-[#D9D9D9] pt-4">
      <div className=" bg-[#9538E2] -4 mx-4 rounded-t-lg">
        <div className="container mx-auto">
          <NavBar></NavBar>
        </div>
      </div>
      <div className="mx-4 min-h-[calc(100vh-200px)]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
